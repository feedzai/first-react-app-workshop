import React from "react";
import { TinderCards, SwipeButtons } from "../../components";
import PageTemplate from "../PageTemplate";

function HomePage() {
  return (
    <PageTemplate>
      <TinderCards />
      <SwipeButtons />
    </PageTemplate>
  );
}

export default HomePage;
