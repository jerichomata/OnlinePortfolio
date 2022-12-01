import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";



const App = () => {
  useEffect(() => {
    document.title = "Jericho Mata's Porfolio";
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
