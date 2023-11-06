import PropTypes from 'prop-types';

const JdetailsForm = ({Props_will_given_leter}) => {

  const job = {
    job_tittle: "Digital", 
    category: "Digital Marketing", 
    email: "funding@gmail.com", 
    deadline: Date.now(), 
    min_price: 0,  
    max_price: 10, 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptatem."
  };
  console.log(job);

  return (
    <div className="bg-[#F4F3F0] md:p-10 lg:p-24">
      <h1 className="text-3xl font-extrabold text-center">JOB DETAILS</h1>
      <form action="">
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
                className="input join-item w-full"
                defaultValue={job.job_tittle}
                readOnly
              />
            </div>
          </div>
          <div className="form-control w-full p-10">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <div className="join">
              <input
                type="text"
                name="job_tittle"
                className="input join-item w-full"
                defaultValue={job.category}
                readOnly
              />
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
                defaultValue={job.email}
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
                readOnly
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
                readOnly
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
                readOnly
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
                readOnly
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JdetailsForm;
