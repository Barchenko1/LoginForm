import {BrowserRouter, Switch, Route, Router} from "react-router-dom";
import UserDetails from "./UserDetails";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import {BOOK_LIST, LOGIN_PAGE, REGISTRATION_PAGE, USER_DETAILS, USER_LIST} from "../utils/consts";
import UserList from "./UserList";
import history from "../utils/history";
import Header from "./Header";
import AuthenticatedRoute from "./AuthenticatedRoute";
import SorlBookList from "./SorlBookList";



function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path={LOGIN_PAGE} exact component={LoginPage} />
            <AuthenticatedRoute path={USER_DETAILS} exact component={UserDetails} />
            <AuthenticatedRoute path={USER_LIST} exact component={UserList} />
            <AuthenticatedRoute path={BOOK_LIST} exact component={SorlBookList} />
            <Route path={REGISTRATION_PAGE} exact component={RegistrationPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
