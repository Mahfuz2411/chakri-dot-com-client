import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const hasDatePassed = (targetDate) => {
  const currentDate = new Date();
  const parsedTargetDate = new Date(targetDate);
  return parsedTargetDate < currentDate;
};

const JbidForm = ({ job }) => {
  const { user } = useContext(AuthContext);

  // console.log(user);

  const handleAddBid = (event) => {
    event.preventDefault();

    const form = event.target;

    const bid_tittle = job.job_tittle;
    const bid_amount = Number(form.price.value);
    const useremail = form.email.value;
    const buyeremail = form.bemail.value;
    const job_id = job._id;
    const bid_deadline = form.deadline.value;
    const status = "pending";

    if (!bid_amount || !bid_deadline) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields",
        confirmButtonText: "Ok",
      });
    }else if(bid_amount < job.min_price || bid_amount > job.max_price) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bid amount must be between min and max price",
        confirmButtonText: "Ok",
      });
    } else if(hasDatePassed(bid_deadline)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Deadline has passed",
        confirmButtonText: "Ok",
      })
    } else {
      const newBid = {bid_tittle, bid_amount, bid_deadline, job_id, useremail, buyeremail, status};
      console.log(newBid);
      fetch("http://localhost:5000/bids", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBid),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            form.reset();
            return Swal.fire({
              title: "Succes",
              text: "Bidding succesfull",
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
        })
        .catch(() => {
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong",
            confirmButtonText: "Ok",
          });
        });
    }
  };
  return (
    <div className="bg-[#F4F3F0] md:p-10 lg:p-24">
      <h1 className="text-3xl font-extrabold text-center">Place your Bid</h1>
      <form onSubmit={handleAddBid} action="">
        {/* Form Email and Buyer Email row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="email"
                className="input input-bordered join-item w-full"
                defaultValue={user.email}
                readOnly
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Buyer Email</span>
            </label>
            <div className="join">
              <input
                type="email"
                name="bemail"
                className="input input-bordered join-item w-full"
                defaultValue={job.email}
              />
            </div>
          </div>
        </div>
        {/* Form Price & Deadline row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="price"
                className="input input-bordered join-item w-full"
                placeholder="Price"
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <div className="join">
              <input
                type="date"
                name="deadline"
                className="input input-bordered join-item w-full"
              />
            </div>
          </div>
        </div>
        <div className="form-control w-full p-10">
          <div className="join">
            <input
              type="submit"
              name="Submit"
              className="btn btn-block btn-neutral"
              value="Bid on the project"
              disabled={user.email === job.email}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

JbidForm.propTypes = {
  job: PropTypes.object,
};

export default JbidForm;
