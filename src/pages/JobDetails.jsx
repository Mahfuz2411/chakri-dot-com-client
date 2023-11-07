import { useParams } from "react-router-dom";
import JdetailsForm from "../components/JdetailsForm";
import JbidForm from "../components/jbidForm";
import { useEffect, useState } from "react";

const JobDetails = () => {
  let { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(
      `http://localhost:5000/jobs/${id}`
    )
    .then((res) => res.json())
    .then((dta) => setJob(dta));
  }, [id]);
  
  return (
    job && <>
      <JdetailsForm job={job}></JdetailsForm>  {/* will take props */}
      <JbidForm job={job}></JbidForm>  {/* will take props */}
    </>
  );
};

export default JobDetails;