import {BrowserRouter, Switch, Route, Router} from "react-router-dom";
import UserDetails from "./UserDetails";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import {LOGIN_PAGE, REGISTRATION_PAGE, USER_DETAILS, USER_LIST} from "../utils/consts";
import UserList from "./UserList";
import history from "../utils/history";
import Header from "./Header";



function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path={LOGIN_PAGE} exact component={LoginPage} />
            <Route path={USER_DETAILS} exact component={UserDetails} />
            <Route path={USER_LIST} exact component={UserList} />
            <Route path={REGISTRATION_PAGE} exact component={RegistrationPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
