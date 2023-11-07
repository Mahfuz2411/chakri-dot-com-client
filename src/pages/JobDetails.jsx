import JdetailsForm from "../components/JdetailsForm";
import JbidForm from "../components/jbidForm";

const JobDetails = () => {

  const job = {
    job_tittle: "Digital", 
    category: "Digital Marketing", 
    email: "funding@gmail.com", 
    deadline: Date.now(), 
    min_price: 0,  
    max_price: 10, 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptatem."
  };
  // console.log(job);
  
  return (
    <>
      <JdetailsForm job={job}></JdetailsForm>  {/* will take props */}
      <JbidForm job={job}></JbidForm>  {/* will take props */}
    </>
  );
};

export default JobDetails;