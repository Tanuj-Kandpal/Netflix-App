import { createContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("dummyuser@getnada.com");
  const [password, setPassword] = useState("dummy123@@");

  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
