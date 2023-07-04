import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { isLoggedIn } from './services/auth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Upload from './pages/Upload';
import Files from './pages/Files';
import File from './pages/File';

function App() {
  const [loaded, setLoaded] = useState(false);
  // mock loading effect
  useEffect(() => {
    if (!window.sessionStorage.getItem('isLoaded')) {
      const timer = setTimeout(() => {
        window.sessionStorage.setItem('isLoaded', 'true');
        setLoaded(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
    return setLoaded(true);
  }, []);

  const PublicOnlyRoute = ({
    component: Component,
    ...rest
  }: Record<string, any>) => (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  const PrivateRoute = ({
    component: Component,
    ...rest
  }: Record<string, any>) => (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <PublicOnlyRoute path="/login" component={Login} />
        <PrivateRoute exact path="/" compoent={Files} />
        <Route exact path="/404" component={NotFound} />
        <PrivateRoute path="/upload" component={Upload} />
        <PrivateRoute path=":/id" component={File} />
      </Switch>
      <Footer />
      <Loader loaded={loaded} />
    </BrowserRouter>
  );
}

export default App;
