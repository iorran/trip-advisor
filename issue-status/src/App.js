import React, { Component } from 'react'; 
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment } from 'semantic-ui-react'

import AppHeader from './common/AppHeader';
import IssueTable from './issue/IssueTable';

import IssueAPI from './issue/IssueAPI';

class App extends Component {

  constructor() {
    super(); 
    this.state = { status : [] };
  }

  componentDidMount() {   
    IssueAPI.getStatus()
      .then(response => response.json())
      .then(data => { 
        this.setState({ status : data });
      })
      .catch((error) => console.log('There has been a problem with your fetch operation: ' + error.message)); 
      
  }

  render() {
    return (
        <Container>
          <AppHeader /> 
          <Segment raised> 
            <IssueTable status={this.state.status} />
          </Segment>
        </Container> 
    );
  }

}

export default App;
