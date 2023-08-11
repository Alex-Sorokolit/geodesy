import "./App.css";
// Навігація по сайту
import { Route, Routes } from "react-router-dom";
// Сторінки
import SharedLayout from "../../pages/SharedLayout";
import HomePage from "../../pages/HomePage";
import ServicesPage from "../../pages/ServicesPage";
import PortfolioPage from "../../pages/PortfolioPage";
import ServiceDatails from "../../pages/ServiceDetails";
import PortfolioDetails from "../../pages/PortfolioDetails";
// import ContactsPage from "../../pages/ContactsPage";
import NotFound from "../../pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:id" element={<ServiceDatails />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/:id" element={<PortfolioDetails />} />
          {/* <Route path="contacts" element={<ContactsPage />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
