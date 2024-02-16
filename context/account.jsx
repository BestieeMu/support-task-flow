"use client"
import { createContext, useState } from "react";

export const MainContext = createContext({
	// Add your default values here
    verificationEmail:  '',
    currentOrgId: '',
    verifyEmail: () => {},
    getcurrentOrgId: () => {},
});

export default function MainContextProvider({
  children,
}) {

// Add your states here
const [verificationEmail, setVerificationEmail] = useState("");
const [currentOrgId, setCurrentOrgId] = useState('')


//Add functions to update your state
const verifyEmail = (email) =>{
    setVerificationEmail(email);
 
}

const getcurrentOrgId = (id) =>{
  setCurrentOrgId(id)
}

return (
    <MainContext.Provider
      value={{
        verificationEmail,
        currentOrgId,
        verifyEmail,
        getcurrentOrgId
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

