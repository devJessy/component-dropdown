import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from 'layouts'
import Landing from 'pages/Landing'
import { Dropdown } from 'components/dropdown'


const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/'>
            <Landing />
            <div style={{width : '250px', marginLeft : "200px"}}>
              <Dropdown text={`Active Delegates`}>
                <div style={{marginTop : '10px', padding: '5px', width : '100%', textAlign : 'center'}} >Past Delegates</div>
                <div style={{marginTop : '10px', padding: '5px', width : '100%', textAlign : 'center'}}>Past Delegates</div>
              </Dropdown>
            </div>
          </Route>
        </Layout>
      </Switch>
    </Router>
  )
}

export default App