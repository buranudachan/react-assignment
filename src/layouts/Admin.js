
import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";

import Sidebar from "components/Sidebar/Sidebar.js";
import {
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import routes from "routes.js";

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticate: false,
      backgroundColor: "green",
      activeColor: "info",
      input: {},
      errors: {}
    };
    this.mainPanel = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);


  }
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    console.log('inputs===>' + JSON.stringify(input))
    if (!input["username"]) {
      isValid = false;
      errors["username"] = "Please enter your uername.";
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleActiveClick = (color) => {
    this.setState({ activeColor: color });
  };
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["username"] = "";
      input["password"] = "";
      this.setState({ input: input, isAuthenticate: true });

    }
  }

  render() {
    return (
      <>
        {
          this.state.isAuthenticate ?
            <div className="wrapper">
              <Sidebar
                {...this.props}
                routes={routes}
                bgColor={this.state.backgroundColor}
              />
              <div className="main-panel" ref={this.mainPanel}>
                <Switch>
                  {routes.map((prop, key) => {
                    return (
                      <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                      />
                    );
                  })}
                </Switch>
              </div>
            </div>
            :
            <div className="content">
              <Row>
                <Col md="6">
                  <div className="image">
                    <img
                      alt="..."
                      src={require("assets/img/sample.png")}
                    />
                  </div>
                </Col>
                <Col md="6">
                  <Row>
                    <Col md="12">&nbsp;</Col><Col md="12">&nbsp;</Col>
                    <Col md="12">&nbsp;</Col><Col md="12">&nbsp;</Col>
                    <Col md="12">&nbsp;</Col><Col md="12">&nbsp;</Col>

                  </Row>
                  <CardHeader>
                    <CardTitle tag="h5">Let's Get Started</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <Row>
                        <Col md="12">&nbsp;</Col>
                        <Col className="px-1" md="12">
                          <FormGroup>
                            <label>Email</label>
                            <Input
                              type="text"
                              name="username"
                              value={this.state.input.username}
                              onChange={this.handleChange}
                              class="form-control"
                              placeholder="example@gmail.com"
                              id="username" />
                            <div className="text-danger">{this.state.errors.username}</div>
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="12">
                          <FormGroup >
                            <label>
                              Password
            </label>
                            <Input
                              type="text"
                              name="password"
                              value={this.state.input.password}
                              onChange={this.handleChange}
                              class="form-control"
                              placeholder="********"
                              id="password" />
                            <div className="text-danger">{this.state.errors.password}</div>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <div className="update ml-auto mr-auto">
                          <Button
                            className="btn-round"
                            color="primary"
                            type="submit"
                            type="submit"
                          >
                            Sign In
          </Button>

                        </div>
                      </Row>
                    </Form>
                  </CardBody>

                </Col>
              </Row>
            </div>
        }
      </>
    );
  }
}

export default Dashboard;
