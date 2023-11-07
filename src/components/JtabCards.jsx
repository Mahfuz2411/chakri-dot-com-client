import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const JtabCards = ({ job }) => {
  const navigate = useNavigate();
  
  // console.log(id);
  return (
    <>
      <div className="card min-w-96 max- w-full bg-neutral text-neutral-content">
        <div className="card-body">
          <h2 className="card-title">{job.job_tittle}</h2>
          <p>{job.description.length>50?job.description.slice(0,51)+"...":job.description}</p>
          <div className="flex">
            <p>Min. Price: ${job.min_price}</p>
            <p>Max. Price: ${job.max_price}</p>
          </div>
          <p>Deadline: <span className="badge">{job.deadline}</span></p>
          <div className="card-actions w-full">
            <button onClick={() => navigate(`/jobs/${job._id}`)} className="btn w-full">
              Bid Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

JtabCards.propTypes = {
  job: PropTypes.object,
};

export default JtabCards;
