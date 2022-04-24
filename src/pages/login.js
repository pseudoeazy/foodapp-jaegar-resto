import { useState } from "react";
import Head from "next/head";
import { providers, signIn, getSession, getCsrfToken } from "next-auth/client";
import { useForm } from "react-hook-form";
import Layout from "@components/Layout";
import { Navbar } from "@components/sidebar/";
import ErrorMessage from "components/alerts/ErrorMessage";
import Error from "components/alerts/Error";

const styles = {
  input: `block
    w-full
    px-5
    py-3
    text-base text-white
    placeholder-gray-300
    transition
    duration-500
    ease-in-out
    transform
    border border-basebg-200
    rounded-lg
    bg-formbg
    focus:outline-none
    focus:border-transparent
    focus:ring-2
    focus:ring-white
    focus:ring-offset-2
    focus:ring-offset-formbg`,
  button: ` flex
    items-center
    justify-center
    w-full
    px-10
    py-4
    text-base
    font-medium
    text-center text-primary
    transition
    duration-500
    ease-in-out
    transform
    bg-transparent
    rounded-xl
    border
    border-primary
    hover:bg-primary
    hover:border-primary
    hover:text-white
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-primary-500`,
};

const Login = ({ csrfToken }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleLogin = async ({ csrfToken, email, password }) => {
    const credentials = {
      csrfToken,
      email,
      password,
      redirect: false,
    };
    setHasError(false);
    setIsSubmit((submit) => !submit);

    const auth = await signIn("credentials", credentials);

    if (auth.status === 401 || auth.ok !== true) {
      setHasError((error) => !error);
      setIsSubmit((submit) => !submit);
      return;
    }
    setIsSubmit((submit) => !submit);
    const [, redirectUrl] = auth.url.split("callbackUrl=");
    window.location.replace(redirectUrl ?? "/dashboard");
  };

  return (
    <Layout>
      <Navbar />
      <Head>
        <title>Login | Jaegar Resto</title>
      </Head>
      <main className="flex-1 min-h-screen p-6  bg-basebg-200">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="w-1/2 mx-auto my-24 p-6 rounded-md"
        >
          {hasError && <ErrorMessage error=" Invalid email or password" />}
          <input
            name="csrfToken"
            type="hidden"
            defaultValue={csrfToken}
            {...register("csrfToken")}
          />
          <div className="my-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              id="email"
              autoComplete="off"
              name="email"
              type="text"
              placeholder="john@jaegar-resto.com"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              })}
            />
            {errors.email && errors.email?.type === "required" && (
              <Error message="email is required" />
            )}
            {errors.email && errors.email?.type === "pattern" && (
              <Error message="Invalid email address" />
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={styles.input}
              autoComplete="off"
              id="password"
              name="password"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && errors.password?.type === "required" && (
              <Error message="password is require" />
            )}
          </div>

          <button
            className={`${styles.button} ${isSubmit && " cursor-not-allowed"}`}
            type="submit"
            disabled={isSubmit}
          >
            Login {isSubmit && <small> ...</small>}
          </button>
        </form>
      </main>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { res } = context;
  const session = await getSession(context);

  if (session) {
    res.writeHead(302, { Location: "/" });
    res.end();
    return;
  }
  return {
    props: {
      session: null,
      providers: await providers(context),
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default Login;
