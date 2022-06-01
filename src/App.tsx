import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from 'layouts'
import Landing from 'pages/Landing'
import { Dropdown,DropdownItems } from 'components/dropdown'


const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/'>
            <div style={{width : '250px', marginLeft : "200px", marginTop : '100px'}}>
              <Dropdown text={`Active Delegates`}>
                <DropdownItems text={`Past Delegates 1`}>Past Delegates 1</DropdownItems>
                <DropdownItems text={`Past Delegates 2`}>Past Delegates 2</DropdownItems>
              </Dropdown>
            </div>
          </Route>
        </Layout>
      </Switch>
    </Router>
  )
}

export default App