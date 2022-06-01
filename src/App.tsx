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
            <Landing />
            <div style={{width : '250px', marginLeft : "200px"}}>
              <Dropdown text={`Active Delegates`}>
                <DropdownItems>Past Delegates</DropdownItems>
                <DropdownItems>Past Delegates</DropdownItems>
              </Dropdown>
            </div>
          </Route>
        </Layout>
      </Switch>
    </Router>
  )
}

export default App