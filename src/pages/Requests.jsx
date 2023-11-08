import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const Requests = () => {
  const [req, setReq] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/requests/${user.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReq(data);
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

  // console.log(req.bid_tittle);

  const handleAccept = ()=> {

  }

  const handleReject = ()=> {

  }

  let count = 0;
  return ( req && 
    <div>
      <div className="container mx-auto overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>SI. No.</th>
              <th>Job title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {req.map((bid) => {
              count += 1;
              return ( 
                <tr key={bid._id}>
                  <td>{count}</td>
                  <th>{bid.bid_tittle}</th>
                  <td>{bid.useremail}</td>
                  <td>{bid.bid_deadline}</td>
                  <td>{bid.bid_amount}</td>
                  <td>{bid.status}</td>
                  <td>
                    {bid.status === "in progress" ? (
                      <div className="flex">
                        <button onClick={handleAccept}>Complete</button>
                        <button onClick={handleReject}>Complete</button>
                      </div>
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>SI. No.</th>
              <th>Job title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Requests;
