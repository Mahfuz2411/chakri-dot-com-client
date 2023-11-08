import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import { LoaderContext } from "../contexts/LoaderProvider";

const Requests = () => {
  const [req, setReq] = useState([]);
  const { user } = useContext(AuthContext);
  const { isLoadingData, setIsLoadingData } = useContext(LoaderContext);
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
  }, [user, req, isLoadingData]);

  const handleClick = (id, text) => {
    fetch(`http://localhost:5000/bids/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: text }),
    })
      .then((res) => res.json())
      .then((data) => {
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
  };

  let count = 0;
  return (
    req && (
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
                  <tr
                    className={
                      bid.status === "completed"
                        ? "bg-green-100"
                        : bid.status === "in progress"
                        ? "bg-orange-100"
                        : bid.status === "canceled"
                        ? "bg-red-100"
                        : "bg-slate-100"
                    }
                    key={bid._id}
                  >
                    <td>{count}</td>
                    <th>{bid.bid_tittle}</th>
                    <td>{bid.useremail}</td>
                    <td>{bid.bid_deadline}</td>
                    <td>{bid.bid_amount}</td>
                    <td>{bid.status}</td>
                    <td>
                      {bid.status === "pending" ? (
                        <div className="flex gap-5">
                          <button
                            className="btn btn-success"
                            onClick={() => handleClick(bid._id, "in progress")}
                          >
                            Accept
                          </button>
                          <button
                            className="btn btn-error"
                            onClick={() => handleClick(bid._id, "canceled")}
                          >
                            Reject
                          </button>
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
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    )
  );
};

export default Requests;
