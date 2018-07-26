import React, { Component } from 'react';
import { Table , Label } from 'semantic-ui-react'

class IssueTable extends Component {

  render(){
    return (
      <Table striped>
        <Table.Header>
          <Table.Row> 
            <Table.HeaderCell>Issue Number</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Created At</Table.HeaderCell>
            <Table.HeaderCell>Updated At</Table.HeaderCell>
            <Table.HeaderCell>Labels</Table.HeaderCell> 
            <Table.HeaderCell>State</Table.HeaderCell> 
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            this.props.status.map( row => 
              <Table.Row key={row.id}> 
                <Table.Cell>{row.number}</Table.Cell>
                <Table.Cell>{row.title}</Table.Cell>
                <Table.Cell>
                  {
                    new Intl.DateTimeFormat('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric',
                      hour12: false,
                      timeZone: 'UTC'
                    }).format(new Date(row.created_at))
                  }
                </Table.Cell>
                <Table.Cell>
                  {
                    new Intl.DateTimeFormat('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric',
                      hour12: false,
                      timeZone: 'UTC'
                    }).format(new Date(row.updated_at))
                  }
                </Table.Cell>
                <Table.Cell>
                {
                  row.labels.map( (label, i, arr) => 
                    <Label key={label.id}>
                      {label.name}
                    </Label>
                  )
                }
                </Table.Cell>
                <Table.Cell>{row.state}</Table.Cell>
              </Table.Row>  
            )
          }
          
        </Table.Body> 
      </Table>
    );
  }
}

export default IssueTable;