import { createContext, useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "../utlis/firebase";
import { Spinner } from "@nextui-org/react";

export const Authcontext = createContext();

function AuthcontextProvider({ children }) {
  const [user, setUser] = useState({
    islogin: false,
    userInfo: {},
  });

  const [loading, setLoading] = useState(true);

  function onAuthchanged(User) {
    console.log("user=>", User);

    if (User) {
      setUser({
        islogin: true,
        userInfo: {
          name: User.displayName,
          photourl: User.photoURL,
          email: User.email,
        },
      });
    } else {
      setUser({ islogin: false, userInfo: {} });
    }
    setLoading(false);
  }

  useEffect(() => {
   
    const subscriber = onAuthStateChanged(auth, onAuthchanged);
    if (user) {
      setUser({ isLogin: true, email: user.email });
      console.log("User login he", user);
    } else {
      setUser({ isLogin: false, email: "" });
      console.log("User login nahn he");
    }
    return () => subscriber(); 
  }, []);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with popup", error);
    }
  };

  return (
    <Authcontext.Provider value={{ user, setUser, handleSignIn }}>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </Authcontext.Provider>
  );
}

export default AuthcontextProvider;
