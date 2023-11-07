import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const MyBids = () => {
  const [myBids, setMyBids] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/mybids/${user.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((data) => {
        setMyBids(data);
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
      <h1>{myBids.length}</h1>
    </div>
  );
};

export default MyBids;