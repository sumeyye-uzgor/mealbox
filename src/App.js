
import data from './db/menuData'
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import StyledNavbar from './components/StyledNavbar.component';
import ToastNotify from './components/ToastNotify.component';

// import './App.css'
import routes from './router/index';
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setMainMenus, setOtherMenus } from './redux/actions';

function App() {
  // const menus = data.menus
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setMainMenus(data.menus[0]))
    dispatch(setOtherMenus(data.menus.filter(item => item.key !== 'main')))
  })
  // console.log(menus)
  return (
    <Container fluid className="m-0">
      <StyledNavbar />
      <ToastNotify />
      <Row className="justify-content-center align-items-center m-0 p-0">
        < Switch >
          {
            routes.map(
              route => (
                <Route path={route.path} component={route.component} exact={route.exact} key={route.id} />
              )
            )
          }
        </Switch >
      </Row >
    </Container >

  );
}

export default App;
