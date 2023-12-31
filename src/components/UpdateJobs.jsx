import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const hasDatePassed = (targetDate) => {
  const currentDate = new Date();
  const parsedTargetDate = new Date(targetDate);
  return parsedTargetDate < currentDate;
}

const UpdateJobs = () => {
  const {user} = useContext(AuthContext);
  const job = useLoaderData();
  const navigate = useNavigate();

  // console.log(job);

  const handleUpdateJob = (event) => {
    event.preventDefault();

    const form = event.target;

    const job_tittle = form.job_tittle.value;
    const category = form.category.value;
    const email = form.email.value;
    const deadline = form.deadline.value;
    const min_price = Number(form.min_price.value);
    const max_price = Number(form.max_price.value);
    const description = form.description.value;
    
    

    if(!job_tittle || !category || !deadline || !min_price || !max_price || !description) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields",
        confirmButtonText: "Ok",
      })
    } else if(hasDatePassed(deadline)){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Deadline has passed",
        confirmButtonText: "Ok",
      });
    } else if(min_price > max_price) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Min price cannot be greater than max price",
        confirmButtonText: "Ok",
      });
    } else{
      const newJob = {job_tittle, category, email, deadline, min_price, max_price, description};
      fetch(`https://chakri-dot-com-server.vercel.app/jobs/${job._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newJob),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.modifiedCount) {
            form.reset();
            Swal.fire({
              title: "Succes",
              text: "Job Updated succesfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
            navigate("/myjobs");
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
  };

  return (
    <div className="bg-[#F4F3F0] md:p-10 lg:p-24">
      <h1 className="text-3xl font-extrabold text-center">UPDATE JOB</h1>
      <form onSubmit={handleUpdateJob} action="">
        {/* Form Job Tittle and Category row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Job Tittle</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="job_tittle"
                className="input input-bordered join-item w-full"
                defaultValue={job.job_tittle}
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <div className="join">
              <select
                id="category"
                name="category"
                value={job.category}
                className="input input-bordered join-item w-full"
              >
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Web Development">Web Development</option>
              </select>
            </div>
          </div>
        </div>
        {/* Form Email and Deadline row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="email"
                className="input join-item w-full"
                defaultValue={user.email}
                readOnly
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
                className="input join-item w-full"
                defaultValue={job.deadline}
              />
            </div>
          </div>
        </div>
        {/* Form Price row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Minimum Price</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="min_price"
                className="input join-item w-full"
                defaultValue={job.min_price}
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Maximum Price</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="max_price"
                className="input join-item w-full"
                defaultValue={job.max_price}
              />
            </div>
          </div>
        </div>
        {/* Form Description row*/}
        <div className="md:flex">
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="description"
                className="input join-item w-full"
                defaultValue={job.description}
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
              value="Update Job"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateJobs;
