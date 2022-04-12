import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "firebase-app/clientApp";

const firebaseAuth = getAuth(firebaseApp);

export const loginUser = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log("errCode:", errorCode);
    // console.log("errMsg:", errorMessage);
    return false;
  }
};

export function signOutUser() {
  firebaseAuth.signOut().then(
    function () {
      console.log("Signout successful!");
    },
    function (error) {
      console.log("Signout failed");
    }
  );
}
