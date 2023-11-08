import { useParams } from "react-router-dom";
import JdetailsForm from "../components/JdetailsForm";
import JbidForm from "../components/jbidForm";
import { useContext, useEffect, useState } from "react";
import { LoaderContext } from "../contexts/LoaderProvider";

const JobDetails = () => {
  let { id } = useParams();
  const [job, setJob] = useState({});
  const { isLoadingData, setIsLoadingData } = useContext(LoaderContext);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((res) => res.json())
      .then((dta) => {
        setJob(dta);
        setIsLoadingData(false);
      })
      .catch((error) => {
        console(error);
        setIsLoadingData((prev) => false);
      });
  }, [id, isLoadingData]);

  return (
    !isLoadingData &&
    job && (
      <>
        <JdetailsForm job={job}></JdetailsForm>
        <JbidForm job={job}></JbidForm>
      </>
    )
  );
};

export default JobDetails;
