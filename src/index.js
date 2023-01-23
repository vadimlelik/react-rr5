import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import About from './Pages/About';
import UsersPage from './Pages/Users';
import CustomLink from './CustomLink';
import User from './Pages/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <div>
        <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', listStyle: 'none' }} >
          <li>
            <CustomLink activeOnlyWhenExact={true} to='/' label='App' />
          </li>
          <li>
            <CustomLink activeOnlyWhenExact={true} to='/about' label='About' />
          </li>
          <li>
            <CustomLink activeOnlyWhenExact={true} to="/users" label='Users' />
          </li>
        </ul>
      </div>
      <Switch>
        <Route path={'/'} exact >
          <App />
        </Route>
        <Route path={'/about'}  >
          <About />
        </Route>
        <Route path={'/users'} exact  >
          <UsersPage />
        </Route>
        <Route path={'/users:userId?'}  >
          <User />
        </Route>

        {/* <Route path={'*'}  >
          <Redirect to='/' exact />
        </Route> */}
      </Switch>
    </React.StrictMode>
  </BrowserRouter>

);
