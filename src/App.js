// import logo from "./logo.svg";
import "./App.css";
import AvailableParkingSection from "./components/AvailableParkingSection";
import Banner from "./components/Banner";
import ChooseParkinSection from "./components/ChooseParkinSection";
import Header from "./components/Header";
import HourMonthSection from "./components/HourMonthSection";
import ParkingChargesCard from "./components/ParkingChargesCard";
import ParkingChargesSection from "./components/ParkingChargesSection";
import ParkingmadeEasySection from "./components/ParkingmadeEasySection";
import SatisfiedCustomersSection from "./components/SatisfiedCustomersSection";
import ServingSection from "./components/ServingSection";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
      <div className="relative">
        <ParkingChargesSection />
        <div className="absolute right-80 top-24">
          <ParkingChargesCard />
        </div>
      </div>
    </div>
  );
}

export default App;
