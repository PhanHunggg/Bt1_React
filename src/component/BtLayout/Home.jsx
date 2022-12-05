import React, { Component } from "react";
import Banner from "./Banner";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}
