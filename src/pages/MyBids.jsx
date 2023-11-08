import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const MyBids = () => {
  const [myBids, setMyBids] = useState([]);
  const { user } = useContext(AuthContext);

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
  }, [user, myBids]);


  const handleComplete = (id) => {
    fetch(`http://localhost:5000/bids/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "completed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Succes",
            text: "Succesfull",
            icon: "success",
            confirmButtonText: "Ok",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
          confirmButtonText: "Ok",
        });
      });
  }

  let count = 0;
  return (
    <div className="container mx-auto overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>SI. No.</th>
            <th>Job title</th>
            <th>Email</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myBids.map((bid) => {
            count += 1;
            return (
              <tr className={bid.status==="completed"?"bg-green-100":bid.status==="canceled"?"bg-red-100":"bg-slate-100"} key={bid._id}>
                <td>{count}</td>
                <th>{bid.bid_tittle}</th>
                <td>{bid.buyeremail}</td>
                <td>{bid.bid_deadline}</td>
                <td>{bid.status}</td>
                <td>{bid.status==='in progress'?
                  <button className="btn btn-success" onClick={() => handleComplete(bid._id)}>Complete</button>:
                  <></>
                }</td>
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
  );
};

export default MyBids;
