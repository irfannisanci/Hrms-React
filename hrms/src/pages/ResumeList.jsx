import React, { useState, useEffect } from "react";
import ResumeService from "../services/ResumeService";
import {Table } from "semantic-ui-react";
import { Link} from "react-router-dom";
export default function ResumeList() {
  const [resumes, setResumes] = useState([]);
  useEffect(() => {
    let resumeService = new ResumeService();
    
    resumeService.getAllResume().then((result) => setResumes(result.data.data));
    
  }, []);


  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Kişisel Bilgiler</Table.HeaderCell>
          </Table.Row>
        </Table.Header> 

        <Table.Body vertical>
          {resumes.map((resume) => (
            <Table.Row key={resume.id}>
              <Table.Cell><Link to={`resumes/${resume.candidateId}`} >{resume.candidateFirstName}</Link> </Table.Cell>
              <Table.Cell>{resume.candidateLastName}</Table.Cell>
              <Table.Cell>{resume.githubLink}</Table.Cell>
              <Table.Cell>{resume.linkedinLink}</Table.Cell>
              <Table.Cell>{resume.photo}</Table.Cell>
              <Table.Cell>{resume.description}</Table.Cell>
              <Table.Cell>{resume.createdDate}</Table.Cell>
              <Table.Cell>{resume.updatedDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* <Switch>
        <Route exact path={path}>
          <h3>Please select a candidate.</h3>
        </Route>
        <Route path={`${path}/:candidateId`} component={ResumeDetail}/>
      </Switch> */}
    </div>
  );
}
