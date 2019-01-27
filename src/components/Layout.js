import React from "react";
import "../css/Layout.css";
const Layout = props => {
  return <div className="body">{props.children}</div>;
};

export default Layout;
