import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import PropTypes from 'prop-types';

const JbidForm = ({job}) => {
  const {user} = useContext(AuthContext);

  const handleAddBid = () => {
    
  }
  return (
    <div className="bg-[#F4F3F0] md:p-10 lg:p-24">
      <h1 className="text-3xl font-extrabold text-center">ADD A NEW JOB</h1>
      <form onSubmit={handleAddBid} action="">
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
              <span className="label-text">Buyer Email</span>
            </label>
            <div className="join">
              <input
                type="email"
                name="deadline"
                className="input input-bordered join-item w-full"
                defaultValue={job.email}
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
                type="text"
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

JbidForm.propTypes = {
  job: PropTypes.object
}

export default JbidForm;