import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import PropTypes from 'prop-types';

const JbidForm = ({job}) => {
  const {user} = useContext(AuthContext);

  const handleAddBid = () => {
    
  }
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
                name="deadline"
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
                placeholder="Deadline"
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