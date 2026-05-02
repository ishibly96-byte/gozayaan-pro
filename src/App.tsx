import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import LandingPage from './pages/LandingPage';
import DiscoveryPage from './pages/DiscoveryPage';
import ProfilePage from './pages/ProfilePage';
import DashboardPage from './pages/DashboardPage';
import HostOnboardingPage from './pages/HostOnboardingPage';
import { AboutPage, SafetyPage, TermsPage, PrivacyPage } from './pages/StaticPages';
import ExperienceDetailsPage from './pages/ExperienceDetailsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/discover" element={<DiscoveryPage />} />
          <Route path="/agent/:id" element={<ProfilePage />} />
          <Route path="/experience/:id" element={<ExperienceDetailsPage />} />
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Route>
        {/* Dashboard and Host Onboarding have custom layouts or suppressed navbars */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/host" element={<HostOnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
