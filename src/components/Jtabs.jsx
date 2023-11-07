import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { useEffect, useState } from "react";
import JtabCards from "./JtabCards";


const Jtabs = () => {
  const [jobs, setJobs] = useState([]);
  

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mahfuz2411/jsonplaceholder/main/jobs2.json"
    )
      .then((res) => res.json())
      .then((dta) => setJobs(dta));
  }, []);

  // console.log(jobs);

  // https://raw.githubusercontent.com/Mahfuz2411/jsonplaceholder/main/jobs2.json
  return (
    <Tabs className="container mx-auto py-20">
      <TabList className={`text-[10px] md:text-base lg:text-lg pb-5`}>
        <Tab>Digital Marketing</Tab>
        <Tab>Web Development</Tab>
        <Tab>Graphics Design</Tab>
      </TabList>

      <TabPanel>
        <div className="min-h-screen grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job) => {
            if (job.category === "Digital Marketing") {
              return <JtabCards key={job.id} job={job}></JtabCards>;
            }
          })}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="min-h-screen grid md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-10">
          {jobs.map((job) => {
            if (job.category === "Web Development") {
              return <JtabCards key={job.id} job={job}></JtabCards>;
            }
          })}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="min-h-screen grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job) => {
            if (job.category === "Graphics Design") {
              return <JtabCards key={job.id} job={job}></JtabCards>;
            }
          })}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Jtabs;
