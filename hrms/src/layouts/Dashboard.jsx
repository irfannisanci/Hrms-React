import React from "react";
import JobAdvertList from "../pages/JobAdvertList";
import EmployerList from "../pages/EmployerList";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ResumeList from "../pages/ResumeList";
import ResumeDetail from "../pages/ResumeDetail";
import JobAdvertDetails from "../pages/JobAdvertDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import EmployerDetails from "../pages/EmployerDetails";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={JobAdvertList} />
            <Route exact path="/jobadverts" component={JobAdvertList} />
            <Route path="/jobadverts/:id" component={JobAdvertDetails} />
            <Route path="/employers" component={EmployerList} />
            <Route exact path="/resumes" component={ResumeList} />
            <Route path="/resumes/:candidateId" component={ResumeDetail} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/employerDetails/:companyName" component={EmployerDetails} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
