import {BrowserRouter, Switch, Route} from "react-router-dom";
import UserDetails from "./UserDetails";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import {LOGIN_PAGE, REGISTRATION_PAGE, USER_DETAILS} from "../utils/consts";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={LOGIN_PAGE} exact component={LoginPage} />
          <Route path={USER_DETAILS} exact component={UserDetails} />
          <Route path={REGISTRATION_PAGE} exact component={RegistrationPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
