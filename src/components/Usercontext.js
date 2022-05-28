import { createContext, useState } from "react";

const AuthContext = createContext();

export function Appcontext({ children }) {
  const [auth, setauth] = useState(false);
  function toggle() {
    setauth(!auth);
  }
  return (
    <AuthContext.Provider value={{ auth, toggle }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
