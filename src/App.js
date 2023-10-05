import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import DashboardEvents from "./pages/DashboardEvents";
import PetBlessingsSeeMore from "./pages/PetBlessingsSeeMore";
import Schedule from "./pages/Schedule";
import Vaccination2 from "./pages/Vaccination2";
import AddEvents from "./pages/AddEvents";
import RemoveEvents from "./pages/RemoveEvents";
import Vaccination1 from "./pages/Vaccination1";
import Vaccination from "./pages/Vaccination";
import Judging1 from "./pages/Judging1";
import Members from "./pages/Members";
import DashboardParticipants from "./pages/DashboardParticipants";
import Judging from "./pages/Judging";
import RegistrationForMembers from "./pages/RegistrationForMembers";
import FunMatchSeeMore from "./pages/FunMatchSeeMore";
import ParadeSeeMore from "./pages/ParadeSeeMore";
import FashionShowSeeMore from "./pages/FashionShowSeeMore";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-events":
        title = "";
        metaDescription = "";
        break;
      case "/pet-blessingssee-more":
        title = "";
        metaDescription = "";
        break;
      case "/schedule":
        title = "";
        metaDescription = "";
        break;
      case "/vaccination":
        title = "";
        metaDescription = "";
        break;
      case "/add-events":
        title = "";
        metaDescription = "";
        break;
      case "/remove-events":
        title = "";
        metaDescription = "";
        break;
      case "/vaccination1":
        title = "";
        metaDescription = "";
        break;
      case "/vaccination2":
        title = "";
        metaDescription = "";
        break;
      case "/judging":
        title = "";
        metaDescription = "";
        break;
      case "/members":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-participants":
        title = "";
        metaDescription = "";
        break;
      case "/judging1":
        title = "";
        metaDescription = "";
        break;
      case "/registration-for-members":
        title = "";
        metaDescription = "";
        break;
      case "/fun-matchsee-more":
        title = "";
        metaDescription = "";
        break;
      case "/paradesee-more":
        title = "";
        metaDescription = "";
        break;
      case "/fashion-showsee-more":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard-events" element={<DashboardEvents />} />
      <Route path="/pet-blessingssee-more" element={<PetBlessingsSeeMore />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/vaccination" element={<Vaccination2 />} />
      <Route path="/add-events" element={<AddEvents />} />
      <Route path="/remove-events" element={<RemoveEvents />} />
      <Route path="/vaccination1" element={<Vaccination1 />} />
      <Route path="/vaccination2" element={<Vaccination />} />
      <Route path="/judging" element={<Judging1 />} />
      <Route path="/members" element={<Members />} />
      <Route
        path="/dashboard-participants"
        element={<DashboardParticipants />}
      />
      <Route path="/judging1" element={<Judging />} />
      <Route
        path="/registration-for-members"
        element={<RegistrationForMembers />}
      />
      <Route path="/fun-matchsee-more" element={<FunMatchSeeMore />} />
      <Route path="/paradesee-more" element={<ParadeSeeMore />} />
      <Route path="/fashion-showsee-more" element={<FashionShowSeeMore />} />
    </Routes>
  );
}
export default App;
