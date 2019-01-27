import React from "react";
import Header from "./Header";
import Cover from "./Cover";
import Description from "./Description";
import Trial from "./Trial";
import Footer from "./Footer";
import Layout from "./Layout";
const App = () => {
  return (
    <Layout>
      <Header />
      <Cover />
      <Description />
      <Trial />
      <Footer />
    </Layout>
  );
};

export default App;
