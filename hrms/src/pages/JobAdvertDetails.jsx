import { React, useState, useEffect } from "react";
import JobAdvertService from "../services/JobAdvertService";
import { useParams } from "react-router-dom";
import { Card, Icon, Grid, Header, Table } from "semantic-ui-react";

export default function JobAdvertDetails() {
  const [jobAdvert, setJobAdvert] = useState({});
  let { id } = useParams();
  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getByIdAndIsActive(id).then((result) => {
      setJobAdvert(result.data.data);
    });
  }, [id]);
  return (
    <div>
      <Card fluid>
        <Card.Content header="Açıklama" />
        <Card.Content description={jobAdvert.jobDescription} />
      </Card>

      <Grid columns={2} padded="vertically">
        <Grid.Column>
          <Table basic="very" celled collapsing>
            
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Icon name="building" />
                    <Header.Content>Şirket Adı</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>{jobAdvert.employer?.companyName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                  <Icon name="mail" />
                    <Header.Content>Email</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>{jobAdvert.employer?.email}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                  <Icon name="phone" />
                    <Header.Content>Telefon</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>{jobAdvert.employer?.phoneNumber}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                  <Icon name="world" />
                    <Header.Content>Web Sitesi</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>{jobAdvert.employer?.webAddress}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>


        <Grid.Column>
        <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign="center" colSpan='2'>İş Detayı</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
        İş Pozisyonu	
        </Table.Cell>
        <Table.Cell collapsing textAlign='center'>{jobAdvert.jobTitle?.titleName}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
        Şehir
        </Table.Cell>
        <Table.Cell collapsing textAlign='center'>{jobAdvert.city?.cityName}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
        Minimum Maaş
        </Table.Cell>
        <Table.Cell collapsing textAlign='center'>{jobAdvert.minSalary}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
        Maksimum Maaş
        </Table.Cell>
        <Table.Cell collapsing textAlign='center'>{jobAdvert.maxSalary}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
        Açık Pozisyonlar
        </Table.Cell>
        <Table.Cell collapsing textAlign='center'>{jobAdvert.numberOfPosition}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
        Yayınlanma Tarihi
        </Table.Cell>
        <Table.Cell collapsing textAlign='center'>{jobAdvert.creationDate}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
        Son Başvuru Tarihi
        </Table.Cell>
        <Table.Cell collapsing textAlign='center'>{jobAdvert.closeDate}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
