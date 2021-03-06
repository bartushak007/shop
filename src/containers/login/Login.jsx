import React, { Component } from "react";
import { connect } from "react-redux";

import { loginRequest, fildsSelector, userSelector } from "../../reducers/user";

import LoginForm from "../../components/forms/login-form";

class Login extends Component {
  constructor() {
    super();
    this.state = { login: "mYyyyyyyy", password: "yyyyyyyyy" };
  }

  resetForm = () => this.setState({ login: "", password: "" });

  onSetField = ({ target }) => this.setState({ [target.name]: target.value });

  onSubmit = e => {
    e.preventDefault();
    const { login, password } = this.state;
    const { loginRequest } = this.props;

    loginRequest({ login, password });

    // this.resetForm();
  };

  render() {
    const { userFields, user, history } = this.props;
    const { login, password } = this.state;

    userFields.name && history.push("/");

    return (
      <LoginForm
        {...{
          onSubmit: this.onSubmit,
          onSetField: this.onSetField,
          login,
          password,
          user
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  userFields: fildsSelector(state),
  user: userSelector(state)
});
const mapDispatchToProps = {
  loginRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
