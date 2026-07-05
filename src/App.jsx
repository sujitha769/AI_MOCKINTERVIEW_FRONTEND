import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

import DashboardLayout from "./components/layout/DashboardLayout";

import StartInterviewPage from "./pages/interview/StartInterviewPage";
import UploadResumePage from "./pages/interview/UploadResumePage";
import InterviewPage from "./pages/interview/InterviewPage";
import ReportPage from "./pages/report/ReportPage";

import HistoryPage from "./pages/dashboard/HistoryPage";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<StartInterviewPage />} />

        <Route path="mock" element={<StartInterviewPage />} />

        <Route path="history" element={<HistoryPage />} />

        <Route
          path="upload-resume/:interviewId"
          element={<UploadResumePage />}
        />

        <Route path="interview/:interviewId" element={<InterviewPage />} />

        <Route path="report/:interviewId" element={<ReportPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;