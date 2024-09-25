import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceDigitalMarketing from "./Components/ServiceDigitalMarketing";
import AboutUs from "./Components/AboutUs";
import ServiceWebsite from "./Components/ServiceWebsite";
import ServiceSaas from "./Components/ServiceSaas";
import HomePage from "./Components/HomePage";
import Sitemap from "./Components/Sitemap";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/Service/DigitalMarketing"
            element={<ServiceDigitalMarketing />}
          />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/Service/Website-Developement"
            element={<ServiceWebsite />}
          />
          <Route
            path="/Service/Software-as-a-Service"
            element={<ServiceSaas />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
