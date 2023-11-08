import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import MyJobCards from "../components/MyJobCards";
import { LoaderContext } from "../contexts/LoaderProvider";
import HelmetCompo from "../components/HelmetCompo";

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const { user } = useContext(AuthContext);
  const { isLoadingData, setIsLoadingData } = useContext(LoaderContext);

  useEffect(() => {
    fetch(`https://chakri-dot-com-server.vercel.app/myjobs/${user.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyJobs(data);
        setIsLoadingData((prev) => false);
      })
      .catch(() => {
        setIsLoadingData((prev) => false);
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
          confirmButtonText: "Ok",
        });
      });
  }, [user, myJobs, isLoadingData]);
  return (
    <>
      <HelmetCompo helmet={"My Job"}></HelmetCompo>
      <div className="container mx-auto px-10 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {myJobs.map((job) => (
          <MyJobCards key={job._id} job={job} />
        ))}
      </div>
    </>
  );
};

export default MyJobs;
