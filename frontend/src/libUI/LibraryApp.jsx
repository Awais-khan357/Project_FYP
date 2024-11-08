import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutLinks from "./components/AboutLinks/AboutLinks";
import CollectionLinks from "./components/CollectionLinks/CollectionLinks";
import ServicesLink from "./components/Services/ServicesLink";
import ReasearchLinks from "./components/Research/ReasearchLinks";
import FormsLink from "./components/Forms/FormsLink";
import SectionLinks from "./components/SectionLinks/SectionLinks";
import Guidelines from "./components/GuideLineLinks/Guidelines";
import VirtualTour from "./components/VirtualTour";
import Facilities from "./components/Facilities";
import Events from "./components/Events";
import Museum from "./components/Museum";
import HecCorner from "./components/HecCorner";

function LibraryApp() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/aboutLink" element={<AboutLinks />} />
      <Route path="/collectionLink" element={<CollectionLinks />} />
      <Route path="/servicesLink" element={<ServicesLink />} />
      <Route path="/facility" element={<Facilities />} />
      <Route path="/researchLink" element={<ReasearchLinks />} />
      <Route path="/librarySection" element={<SectionLinks />} />
      <Route path="/formLink" element={<FormsLink />} />
      <Route path="/guideLine" element={<Guidelines />} />
      <Route path="/events" element={<Events />} />
      <Route path="/museum" element={<Museum />} />
      <Route path="/heccorner" element={<HecCorner />} />
      <Route path="/virtualTour" element={<VirtualTour />} />
    </Routes>
  );
}

export default LibraryApp;
