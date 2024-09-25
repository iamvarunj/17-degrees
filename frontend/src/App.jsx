import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer, Navbar, ScrollToTop } from "./components";

import Nav from "./components/Nav/Nav";
import { Contact, DiningPage, EventsPage, HomePage, KnowUsPage, StayPage } from "./pages";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/know-us" element={<KnowUsPage />} />
        <Route path="/stay" element={<StayPage />} />
        <Route path="/dining" element={<DiningPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
