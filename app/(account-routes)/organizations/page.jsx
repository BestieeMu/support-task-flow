"use client";
import Header from "@/components/Header/Header";
import Form from "@/components/createOrg-form/Form";
import Card from "@/components/orgPreview-card/Card";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";

// ///////////////////////////////////////
// //////////////////////////////////////
/////////////////////////////////////////

const Page = () => {
  const [organization, setOrganization] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [createdBy, setCreatedBy] = useState([]);
  const { data: session } = useSession();
  const [preview, setPreview] = useState(false);
  const [previewId, setPreviewId] = useState("");

  const fetchOrg = async () => {
    try {
      fetch("/api/get-org")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((org) => {
          setOrganization(org.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
          console.error("Error fetching data:", err);
        });
    } catch (error) {}
  };

  const getUser = async () => {
    try {
      const email = session.user.email;
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (res.ok) {
        const responseJson = await res.json();
        const user = responseJson.data;
        // userOrg = user.createdOrganizations;
        // console.log(userOrg);
        setCreatedBy(user.createdOrganizations);
        // console.log('this is running', user);
        // addToCreatedOrganization(createdBy, organizationId);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();

    fetchOrg();
  }, [session]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handlepreview = (orgId) => {
    setPreview(true);
    setPreviewId(orgId);
  };
  // console.log(createdBy);
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center  min-h-screen">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-3xl font-medium mt-20">All The Organizations</h2>
          <p>
            Lorem ipsum dolor sit abet consectetur adipisicing elia. Rescinds
            minus expedite magna?
          </p>
        </div>

        <div className=" flex flex-wrap px-3 mt-20 gap-5 max-w-[55%] place-content-center ">
          {organization?.length === 0 
          ?
           (<>
           <h1 className="text-4xl mt-10">No Organization available yet😒</h1>
           </>) 
           :
            organization?.map((item, index) => (
              <>
                <div
                  className="flex flex-col items-center"
                  onClick={() => handlepreview(item?._id)}
                >
                  <div
                    className="border-2 border-accent cursor-pointer w-[150px] text-center font-[500] text-white rounded shadow-md flex items-center justify-center p-2 h-[100px]"
                    key={index}
                    style={{
                      backgroundImage: `url(${item?.avater})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.619)",
                    }}
                  >
                    <div>{item?.org_name}</div>
                  </div>
                  {/* {createdBy.includes(item?._id) &&
                    <p className="mt-2">Admin</p>
                 } */}
                </div>
              </>
            ))}
        </div>
      </div>
      {preview && (
        <div className="w-full fixed flex backdrop-filter backdrop-blur-lg transition-all justify-center items-start top-0 h-[100dvh] ">
          <Card preview={setPreview} previewId={previewId} />
        </div>
      )}
    </>
  );
};

export default Page;
