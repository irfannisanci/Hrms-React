import {useState,useEffect} from 'react'
import EducationService from '../services/EducationService'
import {Table } from "semantic-ui-react";
export default function EducationList() {
    const [educations, setEducations] = useState([])
    useEffect(() => {
       let educationService= new EducationService()
       educationService.getEducation().then((result)=>setEducations(result.data.data))
    }, [])
    return (
        <div>
            <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Eğitim</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body vertical>
          {educations.map((education) => (
            <Table.Row key={education.resumeId}>
              <Table.Cell>{education.schoolName}</Table.Cell>
              <Table.Cell>{education.schoolDepartment}</Table.Cell>
              <Table.Cell>{education.startedDate}</Table.Cell>
              <Table.Cell>{education.endedDate}</Table.Cell>
              <Table.Cell>{education.createdDate}</Table.Cell>
              <Table.Cell>{education.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
