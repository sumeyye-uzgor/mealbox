
import data from './db/menuData'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import './App.css'
import routes from './router/index';
import { Switch, Route } from 'react-router-dom'

function App() {
  const menus = data.menus
  console.log(menus)
  return (
    <Container fluid className="m-0" style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Switch>
          {
            routes.map(
              route => (
                <Route path={route.path} component={route.component} exact={route.exact} key={route.id} />
              )
            )
          }
        </Switch>
      </Row>
    </Container>

  );
}

export default App;
