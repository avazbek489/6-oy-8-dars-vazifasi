import { useState, useEffect } from "react";
import { jobs } from "../axios";
import "./Job.css";
function JobSearch() {
  const [jobList, setJobList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    jobs("/").then((response) => setJobList(response.data));
  }, []);

  const filtJob = jobList.filter((value) => value.title.includes(search));

  return (
    <div className="main-job">
      <div className="job-container">
        <h1 className="job-tittle">Job Search</h1>
        <input
          type="text"
          placeholder="Search jobs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="job-input"
        />
        <ul className="job-list">
          {filtJob.map((value) => (
            <li key={value.id} className="job-item">
              {value.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default JobSearch;
