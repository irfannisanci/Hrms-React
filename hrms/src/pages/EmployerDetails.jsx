import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Table, Menu, Icon } from "semantic-ui-react";
import JobAdvertService from "../services/JobAdvertService";
export default function EmployerDetails() {
  const [jobAdverts, setJobAdverts] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getByIsActiveTrueAndEmployerId(id)
      .then((result) => {
        setJobAdverts(result.data.data);
      });
  }, [id]);
  console.log(jobAdverts);
  return (
    <div>
        <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>ilan açılma tarihi</Table.HeaderCell>
            <Table.HeaderCell>ilan kapanma tarihi</Table.HeaderCell>
            <Table.HeaderCell>Alınacak kişi sayısı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map(jobAdvert => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell >{jobAdvert.employerCompanyName}</Table.Cell>
              <Table.Cell>{jobAdvert.jobTitleTitleName}</Table.Cell>
              <Table.Cell>{jobAdvert.creationDate}</Table.Cell>
              <Table.Cell>{jobAdvert.closeDate}</Table.Cell>
              <Table.Cell>{jobAdvert.numberOfPosition}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
