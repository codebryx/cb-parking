// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AvailableParkingSection from "./components/AvailableParkingSection";
import Banner from "./components/Banner";
import ChooseParkinSection from "./components/ChooseParkinSection";
import DownloadParkinSection from "./components/DownloadParkinSection";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import BookingHeader from "./components/BookingHeader";
import BookingBanner from "./components/BookingBanner";
import BookingParkingServices from "./components/BookingParkingServices";
import HourMonthSection from "./components/HourMonthSection";
import ParkingChargesCard from "./components/ParkingChargesCard";
import ParkingChargesSection from "./components/ParkingChargesSection";
import ParkingmadeEasySection from "./components/ParkingmadeEasySection";
import SatisfiedCustomersSection from "./components/SatisfiedCustomersSection";
import ServingSection from "./components/ServingSection";
import BookingParkingMadeEasySec from "./components/BookingParkingMadeEasySec";
import BookingAirportParkingSection from "./components/BookingAirportParkingSection";
import RentParkingSpaceSec from "./components/RentParkingSpaceSec";
import BookingPricingTable from "./components/BookingPricingTable";
import CustomersReview from "./components/CustomersReview";
import BookingParkingUpdates from "./components/BookingParkingUpdates";
import BookingTrustedPartners from "./components/BookingTrustedPartners";
import BookingFooter from "./components/BookingFooter";
import ParkingHeader from "./components/ParkingHeader";
import ParkingBanner from "./components/ParkingBanner";
import ParkingTypes from "./components/ParkingTypes";
import ParkingEasySec from "./components/ParkingEasySec";
import ParkingRent from "./components/ParkingRent";
import ParkingDriveway from "./components/ParkingDriveway";
import HappyCustomers from "./components/HappyCustomers";
import TrustedClients from "./components/TrustedClients";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Header />
                <div className="z-1">
                  <Banner />
                </div>
                <div className="h-44 relative w-87 m-auto mr-0">
                  <div className="absolute z-2 w-full bottom-14">
                    <HourMonthSection />
                  </div>
                </div>
                <ParkingmadeEasySection />
                <ChooseParkinSection />
                <ServingSection />
                <AvailableParkingSection />
                <SatisfiedCustomersSection />
                <ParkingChargesSection />
                <DownloadParkinSection />
                <FooterSection />
              </>
            }
          />
          <Route
            path="/booking"
            element={
              <>
                <BookingHeader />
                <BookingBanner />
                <BookingParkingServices />
                <BookingAirportParkingSection />
                <RentParkingSpaceSec />
                <BookingPricingTable />
                <CustomersReview />
                <BookingParkingUpdates />
                <BookingTrustedPartners />
                <BookingFooter />
              </>
            }
          />
          <Route path="/parking" element={
            <>
            <ParkingHeader/>
            <ParkingBanner/>
            <ParkingTypes/>
            <ParkingEasySec/>
            <ParkingRent/>
            <ParkingDriveway/>
            <HappyCustomers/>
            <TrustedClients/>
            <BookingPricingTable/>
            <BookingFooter/>
            </>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
