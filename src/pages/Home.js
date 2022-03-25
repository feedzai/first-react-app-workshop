import React from "react";
import { CardsList } from "../components";
import PageTemplate from "./PageTemplate";

function HomePage() {
  return (
    <PageTemplate backButton={undefined}>
      <CardsList />
    </PageTemplate>
  );
}

export default HomePage;
