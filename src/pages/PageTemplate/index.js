import React from "react";
import { Footer, Header } from "../../components";

function PageTemplate({ backButton, children }) {
  return (
    <React.Fragment>
      <Header backButton={backButton} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default PageTemplate;
