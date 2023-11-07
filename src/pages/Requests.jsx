import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/requests/${user.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
   .then((res) => res.json())
   .then((data) => {
        setRequests(data);
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
    <div>
      <h1>{requests.length}</h1>
    </div>
  );
};

export default Requests;