"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";



const Form = ({ fetchOrg, setModal, getUserUpdate }) => {
  const { data: session } = useSession();
  const [org_name, setOrg_name] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [avater, setAvater] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        const organizationId = responseJson.data;
        setCreatedBy(organizationId._id);
        // addToCreatedOrganization(createdBy, organizationId);
      }
    } catch (error) {}
  };

  useEffect(() => {
 if (session) {
   getUser();
  
 }
    
  }, [session]);

  if (!loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const create_org = async (e) => {
    e.preventDefault();

    try {
      //  const user = await finedOne(session.user.email)
      if (createdBy) {
        const res = await fetch("/api/create-org", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            org_name,
            createdBy,
            description,
            avater,
          }),
        });

        //   router.refresh()
        if (res.ok) {
          setAvater("");
          setDescription("");
          setOrg_name("");
          setCreatedBy("");
          fetchOrg();
          getUserUpdate()
          toast.success("New organization created successfully ");
          setModal(false);

          const responseJson = await res.json();
          const organizationId = responseJson.data;

          addToCreatedOrganization(createdBy, organizationId);
        } else {
          console.log("registration failed");
        }
      }
    } catch (error) {
      console.log(error, "from create org component");
    }
  };
  return (
    <>
      <div className="mt-10 flex flex-col items-center w-5/12 rounded bg-white py-5">
        <h1 className="text-3xl font-[500]">Create your 👍🏼 own organization</h1>
        <form
          onSubmit={create_org}
          className="w-full flex items-center flex-col gap-5 mt-10"
        >
          <label htmlFor="name" className="w-11/12 flex flex-col gap-2 text-sm">
            Organization name
            <input
              type="text"
              onChange={(e) => setOrg_name(e.target.value)}
              value={org_name}
              className="w-full h-12 rounded outline-none px-3 border border-gray-400 text-[16px]"
            />
          </label>
          <label
            htmlFor="avater"
            className="w-11/12 flex flex-col gap-2 text-sm"
          >
            Organization Avatar link
            <input
              type="text"
              onChange={(e) => setAvater(e.target.value)}
              value={avater}
              className="w-full h-12 rounded outline-none px-3 border border-gray-400 text-[16px]"
            />
          </label>
          <label
            htmlFor="description"
            className="w-11/12 flex flex-col gap-2 text-sm"
          >
            Organization description
            <textarea
              name="description"
              id=""
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="w-full rounded p-3 h-[150px] outline-none resize-none border border-gray-400 text-[16px]"
            ></textarea>
          </label>
          <div className="w-11/12 flex gap-2">
            <button
              className="bg-secondary w-full text-[18px] h-12 text-white rounded"
              onClick={() => setModal(false)}
            >
              cancel
            </button>
            <button className="bg-primary w-full text-[18px] h-12 text-white  rounded">
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
