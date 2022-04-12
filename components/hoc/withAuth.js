import { useSession } from "next-auth/client";
import RedirectToLogin from "../RedirectToLogin";

function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const [session, loading] = useSession();
    if (loading) return null;
    if (!loading && !session) return <RedirectToLogin />;
    return <WrappedComponent {...props} />;
  };
}
export default withAuth;
