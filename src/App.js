import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import NotFound from "./components/NotFound/NotFound";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Instructors from "../src/components/Instructors/Instructors/Instructors";
import SignUp from "./components/Authentication/SignUp";
import AuthProvider from "./contexts/AuthProvider";
import Enrollment from "./components/Enrollment/Enrollment";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

//App component and Router implementation
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/serviceDetails/:id">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/instructor">
              <Instructors></Instructors>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/enroll">
              <Enrollment></Enrollment>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
