import React, { Component } from "react";
import Layout from "./Layout";
import { createLoginUrl } from "@utils/auth";

export default class RedirectToLogin extends Component {
  componentDidMount() {
    setTimeout(function () {
      window.location.replace(createLoginUrl(window.location.pathname));
    }, 2000);
  }

  render() {
    return (
      <Layout>
        <div className="w-screen h-screen flex flex-col items-center justify-center text-white text-center bg-basebg-200">
          <p> Jaegar Resto is checking your credentials </p>
          <p>Please wait...</p>
        </div>
      </Layout>
    );
  }
}
