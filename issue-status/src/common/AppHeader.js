import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const AppHeader = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='github' circular />
      <Header.Content>Issue Table</Header.Content>
    </Header>
   </div>
)

export default AppHeader
