import React, { useLayoutEffect, useState } from "react";
import { fakeAuthProvider } from "./fakeAuthprovider";

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  isAuth: boolean | undefined;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(null);
  const [isAuth, setIsAuth] = useState<boolean | undefined>(undefined);

  useLayoutEffect(() => {
    const username = localStorage.getItem("userName");
    if (username) {
      setUser(username);
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      localStorage.setItem("userName", newUser);
      setUser(newUser);
      setIsAuth(true);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      localStorage.removeItem("userName");
      setIsAuth(false);
      setUser(null);
      callback();
    });
  };

  if (isAuth === undefined) {
    return <h1>Loading...</h1>;
  }

  const value = { user, signin, signout, isAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
