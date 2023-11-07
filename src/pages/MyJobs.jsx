import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";


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
  }, [user]);
  return (
    <>
      <h1>{myJobs.length}</h1>
    </>
  );
};

export default MyJobs;