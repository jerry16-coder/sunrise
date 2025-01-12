import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// About pages
import OverviewPage from "./pages/About/OverviewPage";
import MissionPage from "./pages/About/MissionPage";
import PrincipalMessagePage from "./pages/About/PrincipalMessagePage";
import InfrastructurePage from "./pages/About/InfrastructurePage";
import FacultyPage from "./pages/About/FacultyPage";

// Students pages
import ResultPage from "./pages/Students/ResultPage";
import FeesDetailsPage from "./pages/Students/FeesDetailsPage";
import SyllabusPage from "./pages/Students/SyllabusPage";
import TimeTablePage from "./pages/Students/TimeTablePage";
import DisciplinaryPage from "./pages/Students/DisciplinaryPage";

// Admissions pages
import ProcessPage from "./pages/Admissions/ProcessPage";
import UniformPage from "./pages/Admissions/UniformPage";

// Fees pages
import FeeStructurePage from "./pages/Fees/FeeStructurePage";
import OnlinePaymentPage from "./pages/Fees/OnlinePaymentPage"; 
import FinancialDonationPage from "./pages/Fees/Donations/FinancialDonationPage";
import TimeDonationPage from "./pages/Fees/Donations/TimeDonationPage";
import OtherDonationPage from "./pages/Fees/Donations/OtherDonationPage";

// Contact page
import ContactPage from "./pages/Contact/ContactPage";

//home page
import Home from "./pages/home/home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/overview" element={<OverviewPage />} />
        <Route path="/about/mission" element={<MissionPage />} />
        <Route path="/about/principal-message" element={<PrincipalMessagePage />} />
        <Route path="/about/infrastructure" element={<InfrastructurePage />} />
        <Route path="/about/faculty" element={<FacultyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/students/result" element={<ResultPage />} />
        <Route path="/students/fees-details" element={<FeesDetailsPage />} />
        <Route path="/students/syllabus" element={<SyllabusPage />} />
        <Route path="/students/time-table" element={<TimeTablePage />} />
        <Route path="/students/disciplinary" element={<DisciplinaryPage />} />
        <Route path="/admissions/process" element={<ProcessPage />} />
        <Route path="/admissions/uniform" element={<UniformPage />} />
        <Route path="/fees/fee-structure" element={<FeeStructurePage />} />
        <Route path="/fees/online-payment" element={<OnlinePaymentPage />} />
        <Route path="/fees/donations/financial" element={<FinancialDonationPage />} />
        <Route path="/fees/donations/time" element={<TimeDonationPage />} />
        <Route path="/fees/donations/other" element={<OtherDonationPage />} />
      </Routes>
    </Router>
  );
}

export default App;