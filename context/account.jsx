"use client"
import { createContext, useState } from "react";

export const MainContext = createContext({
	// Add your default values here
    verificationEmail:  '',
    verifyEmail: () => {},
});

export default function MainContextProvider({
  children,
}) {

// Add your states here
const [verificationEmail, setVerificationEmail] = useState("");


//Add functions to update your state
const verifyEmail = (email) =>{
    setVerificationEmail(email);
 
}

return (
    <MainContext.Provider
      value={{
        verificationEmail,
        verifyEmail,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

