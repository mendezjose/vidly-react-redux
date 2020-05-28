import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import LogoutForm from "./components/logoutForm";
import RegisterForm from "./components/registerForm";
import ProtectedRoute from "./components/common/protectedRoute";
import { getUser } from "./services/authService";
import "./App.css";
import Function from "./components/function";

const store = configureStore();

class App extends Component {
  state = {};

  componentDidMount() {
    const user = getUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <Provider store={store}>
          <ToastContainer />
          <NavBar user={user} />
          <main className="container">
            <Switch>
              <Route path="/function" component={Function} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={LogoutForm} />
              <ProtectedRoute path="/movies/:id" component={MovieForm} />
              <Route
                path="/movies"
                render={(props) => <Movies {...props} user={user} />}
              />
              <Route path="/customers" component={Customers} />
              <Route path="/rentals" component={Rentals} />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/movies" />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
