"use client";
import Header from "@/components/Header/Header";
import Form from "@/components/createOrg-form/Form";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserProfile = ({ user }) => {
  return (
    <>
      <div className="w-10/12 flex flex-col gap-20 rounded min-h-[550px] mt-20">
        <div className="w-full flex items-center justify-start gap-14">
          <div className=" bg-black text-white w-[250px] flex justify-center items-center h-[250px] rounded-[100%]">
            img
          </div>
          <div className="flex flex-col gap-3 items-start">
            <p className="text-4xl font-[600]">{user.name}</p>
            <p className="text-xl font-[500]">IT support </p>
          </div>
        </div>
        <div className="w-full  p-3">
          <form className="w-full grid grid-cols-2 gap-20">
            <label
              htmlFor=""
              className="w-full flex flex-col text-sm gap-3   rounded"
            >
              User Name
              <input
                type="text"
                value={user.name}
                className="w-full border border-gray-400 h-12 px-2  outline-none bg-transparent"
                placeholder="name"
              />
            </label>
            <label
              htmlFor=""
              className="w-full flex flex-col text-sm gap-3   rounded"
            >
              Email
              <input
                type="text"
                value={user.email}
                className="w-full border border-gray-400 h-12 px-2  outline-none bg-transparent"
                placeholder="email"
              />
            </label>
            <label
              htmlFor=""
              className="w-full flex flex-col text-sm gap-3   rounded"
            >
              Role
              <input
                type="text"
                value={"the default value"}
                className="w-full border border-gray-400 h-12 px-2  outline-none bg-transparent"
                placeholder="role"
              />
            </label>
            <label
              htmlFor=""
              className="w-full flex flex-col text-sm gap-3   rounded"
            >
              Password
              <input
                type="text"
                value={"the default value"}
                className="w-full border border-gray-400 h-12 px-2  outline-none bg-transparent"
                placeholder="password"
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

const UserOrg = ({ organization, createdBy, userId, setModal }) => {
  const isMember =organization?.length != 0 && organization.some((org) => org.members.includes(userId));
const isAdmin =organization?.length != 0 && organization.some((org) => createdBy.includes(org._id));
  return (
    <>
      <main className="w-10/12 flex flex-col items-center gap-20 rounded min-h-[550px] mt-20 ">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-2xl font-[6000]">All your Organization</h2>
          <button
            className="py-3 px-3 bg-secondary rounded p-3"
            onClick={() => setModal(true)}
          >
            create new organization
          </button>
        </div>
        <div className=" flex flex-wrap px-3  gap-5 items-start  w-11/12 place-content-start ">
          {organization?.length != 0 &&
            organization
              .filter(
                (orgId) =>
                  createdBy.includes(orgId?._id) ||
                  orgId.members.includes(userId)
              )
              .map((item, index) => (
                <>
                  <div className="flex flex-col items-center">
                    <div
                      className="border-2 border-[#4B4EFC] cursor-pointer w-[150px] text-center font-[500] text-white rounded shadow-md flex items-center justify-center p-2 h-[100px]"
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

                    {organization.some((org) => item.members.includes(userId)) && <p className="mt-2">Member</p>}

                    {organization.some((org) => createdBy.includes(item._id)) && <p className="mt-2">Admin</p>}
                  </div>
                </>
              ))}
        </div>
      </main>
    </>
  );
};
const Page = () => {
  const [organization, setOrganization] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [createdBy, setCreatedBy] = useState([]);
  const [modal, setModal] = useState(false);
  const { data: session } = useSession();
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState("");
  const searchParams = useSearchParams();

  const active = searchParams.get("active");

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
        setUserId(user._id);
        setUser(user);
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
  // organization.filter((orgId) => createdBy.includes(orgId?._id))
  return (
    <>
      <Header />
      <div className="w-full flex flex justify-center  min-h-[100dvh]">
        <div className="w-11/12 flex flex justify-center">
          <div className="w-[400px]  flex flex-col  items-start ">
            <div className="mt-20 py-5  w-full">
              <h3 className="text-xl font-[600] ml-5 ">Your Profile</h3>
              <ul className="w-full mt-10 flex  flex-col items-start gap-5">
                <Link
                  href={"/profile?active=profile"}
                  className={
                    active === "profile"
                      ? `cursor-pointer pl-5 bg-secondary rounded  p-2 w-full border-r-4 border-accent`
                      : `cursor-pointer pl-5  p-2 w-full hover:border-r-4 border-accent`
                  }
                >
                  <li>User Account</li>
                </Link>
                <Link
                  href={"/profile?active=organization"}
                  className={
                    active === "organization"
                      ? `cursor-pointer pl-5 bg-secondary rounded  p-2 w-full border-r-4 border-accent`
                      : `cursor-pointer pl-5  p-2 w-full hover:border-r-4 border-accent`
                  }
                >
                  <li>My Organization</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="w-full flex justify-center items-start ">
            {active === "profile" && <UserProfile user={user} />}
            {active === "organization" && (
              <UserOrg
                organization={organization}
                userId={userId}
                createdBy={createdBy}
                setModal={setModal}
              />
            )}
          </div>
        </div>
      </div>
      {modal && (
        <div className="w-full fixed flex backdrop-filter backdrop-blur-lg transition-all justify-center items-start top-0 h-[100dvh] ">
          <Form
            fetchOrg={fetchOrg}
            setModal={setModal}
            getUserUpdate={getUser}
          />
        </div>
      )}
    </>
  );
};

export default Page;
