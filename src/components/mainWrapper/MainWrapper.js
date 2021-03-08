import React, { Component } from "react";
import Header from "../header";
import { connect } from "react-redux";
// import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background: ${({ theme }) => (theme ? "#E4E4E4" : "#383838")};
  color: ${({ theme }) => (theme ? "#383838" : "#E4E4E4")};
}

nav {
  background: ${({ theme }) => (theme ? "white" : "black")};
  color: ${({ theme }) => (theme ? "black" : "white")};

}

  `;

class MainWrapper extends Component {
  render() {
    const { darkMode } = this.props;
    return (
      <>
        <GlobalStyle theme={darkMode} />
        <Header theme={darkMode} />
        <div style={{ marginTop: "50px" }}>{this.props.children}</div>
      </>
    );
  }
}

const mapStateToProps = ({ landingReducers }) => {
  const { darkMode } = landingReducers;
  return {
    darkMode,
  };
};

export default connect(mapStateToProps, {})(MainWrapper);
