import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import { LoaderContext } from "../contexts/LoaderProvider";

const hasDatePassed = (targetDate) => {
  const currentDate = new Date();
  const parsedTargetDate = new Date(targetDate);
  return parsedTargetDate < currentDate;
}

const AddJobs = () => {
  const { isLoadingData, setIsLoadingData } = useContext(LoaderContext);
  const {user} = useContext(AuthContext);

  setIsLoadingData(false);
  const handleAddJob = (event) => {

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
      fetch("http://localhost:5000/jobs", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newJob),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            form.reset();
            Swal.fire({
              title: "Succes",
              text: "Job added succesfully",
              icon: "success",
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
      <h1 className="text-3xl font-extrabold text-center">ADD A NEW JOB</h1>
      <form onSubmit={handleAddJob} action="">
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
                placeholder="Job Tittle"
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
                className="input input-bordered join-item w-full"
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
                className="input input-bordered join-item w-full"
                placeholder="Deadline"
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
                type="number"
                name="min_price"
                className="input input-bordered join-item w-full"
                placeholder="Minimum Price"
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Maximum Price</span>
            </label>
            <div className="join">
              <input
                type="number"
                name="max_price"
                className="input input-bordered join-item w-full"
                placeholder="Maximum Price"
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
                className="input input-bordered join-item w-full"
                placeholder="Description"
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
              value="Add Job"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
