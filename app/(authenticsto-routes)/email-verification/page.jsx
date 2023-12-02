"use client";
import { MainContext } from "@/context/account";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { toast } from "sonner";
const Page = () => {
  const [verified, setVerified] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
 const { verificationEmail } = useContext(MainContext)


  const verifyMail = async () => {
    try {
      fetch(`/api/email-verification?token=${token}`).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        if (response.ok) {
          toast.success("Email verified successfully ")
          setVerified(true);
          console.log(response.json());
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   if (token) {
    verifyMail();
   }
  }, []);
  return (
  <>
    <div className="w-full h-[100dvh] flex flex-col items-center">
    { token &&  <div className="mt-32">
        {verified ? (
          <h1 className="text-5xl font-[700]">Email verified successful</h1>
        ) : (
          <h1 className="text-5xl font-[700]">Email verifying...</h1>
        )}
        <Link href={"/sign-in"} className="mt-10">
          <button className="w-32 h-12 rounded mt-10 bg-primary text-white">
            Log in
          </button>
        </Link>
      </div>}

      { !token &&<div className="w-6/12  mt-32 p-4 flex flex-col items-center">
        <span className="text-[150px] text-accent">
        <MdEmail />
        </span>
        <h1 className="text-center font-bold text-4xl mt-3">Email Confirmation</h1>
        <p className="text-[18px] w-11/12 text-center mt-3">we have sent email to <span className="text-primary cursor-pointer">{verificationEmail}</span>  to confirm the validity of our  email address. After receiving the email follow the link provided to complete your registration</p>
       
        <p className="text-[18px] text-center mt-5">if you have confirm your email <Link href={'/sign-in'}><span className="text-primary underline cursor-pointer ">continue</span></Link></p>
      </div>}
    </div>
  </>
  );
};

export default Page;
