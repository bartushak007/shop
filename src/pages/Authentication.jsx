import React from "react";
import Layout from "../components/layout";
import Login from "../containers/login";
import Register from "../containers/register";

export default props => (
  <Layout>
    <Layout.Header />
    {props.location.pathname.includes("login") ? (
      <Login {...props} />
    ) : (
      <Register {...props} />
    )}
  </Layout>
);
