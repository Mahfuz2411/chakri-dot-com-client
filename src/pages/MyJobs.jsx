import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import MyJobCards from "../components/MyJobCards";


const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/myjobs/${user.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((data) => {
        setMyJobs(data);
      })
    .catch(() => {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
          confirmButtonText: "Ok",
        });
      });
  }, [user, myJobs]);
  return (
    <div className="container mx-auto py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {
        myJobs.map((job) => (
          <MyJobCards key={job._id} job={job} />
        ))
      }
    </div>
  );
};

export default MyJobs;