import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobAdvertService from "../services/JobAdvertService";
export default function EmployerDetails() {
  const [jobAdverts, setJobAdverts] = useState({});
  let { companyName } = useParams();
  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getByIsActiveAndEmployerCompanyName(companyName)
      .then((result) => {
        setJobAdverts(result.data.data);
      });
  }, [companyName]);
  console.log(jobAdverts);
  return (
    <div>

    </div>
  )
}
