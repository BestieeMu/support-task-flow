import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { toast } from "sonner";


const Card = ({ preview, previewId }) => {
  const [organization, setOrganization] = useState({});
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const [createdBy, setCreatedBy] = useState('');
  const [myOrg, setMyOrg] = useState([]);



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
        setCreatedBy(user._id);
        setMyOrg(user.createdOrganizations);

        // console.log('this is running', user);
        // addToCreatedOrganization(createdBy, organizationId);
      }
    } catch (error) {}
  };

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
          const data = org.data.filter((data) => data._id === previewId);
          data.map((item) => setOrganization(item));
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.error("Error fetching data:", err);
        });
    } catch (error) {}
  };

  useEffect(() => {
    fetchOrg();
    getUser();
  }, [session]);


  const handleJoin = async () =>{
    try {
        
        const res = await fetch("/api/join-org", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            createdBy,
            previewId
          }),
        });
  
        if (res.ok) {

          toast.success("Joining organization successful ");
    fetchOrg();
    getUser();
          
        }
      } catch (error) {
        toast.error("Error joining this organization, please try again");

      }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="w-5/12 bg-secondary mt-20 rounded min-h-[600px] overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${organization.avater})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.519)",
          }}
          className="w-full h-[200px] relative text-white flex justify-center items-center"
        >
          <span
            className="absolute top-4 text-2xl cursor-pointer right-4"
            onClick={() => preview(false)}
          >
            <BiArrowBack />
          </span>
          <h3 className="text-3xl font-[500]">{organization.org_name}</h3>
        </div>
        <div className="w-full px-10 py-4 border-b flex items-center justify-between">
          <span className="text-center flex flex-col gap-3">
            <p className="text-xl">Members</p>
            <div className="text-2xl font-[600]">{organization.members.length}</div>
          </span>
          {myOrg.includes(organization?._id) || organization.members.includes(createdBy) ? (
                      <button className="px-3 py-2 rounded bg-primary text-white" >
                      Visit organization
                    </button>
                  ) : (
                    <button className="px-3 py-2 rounded bg-primary text-white" onClick={handleJoin}>
                    Join organization
                  </button>
                  )}
        
        </div>
        <div className="w-full mt-4 px-10">
          <h4 className="text-xl font-[600]">Description</h4>
          <p className="text-1xl mt-5">
            {
                organization.description
            }
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
