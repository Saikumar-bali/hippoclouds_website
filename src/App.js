import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/home/navbar';
import theme from './theme';
import { ThemeProvider } from '@mui/material';
import ErpNextPage from './components/erpnext/ErpNextPage';
import HomePage from './components/home/HomePage';
import FlowTechPage from './components/flowtech/FlowTechPage';
import HippoHRMPage from './components/hippohrm/HippoHRMPage';
import HippoCRMPage from './components/hippocrm/HippoCRMPage';
import HippoTripZonePage from './components/hippotripzone/HippoTripZonePage';
import HippoMintPage from './components/hippomint/HippoMintPage';
import HippoBuildXMaterialPage from './components/hippobuildx-material/HippoBuildXMaterialPage';
import HippoBuildXTransportPage from './components/hippobuildx-transport/HippoBuildXTransportPage';
import HippoBuildXAssetPage from './components/hippobuildx-asset/HippoBuildXAssetPage';
import AppDevSupportPage from './components/appdevsupport/AppDevSupportPage';
import ItOpsSupportPage from './components/itopssupport/ItOpsSupportPage';
import TrainingsProjectsPage from './components/trainingsprojects/TrainingsProjectsPage';
import InternshipsPage from './components/internships/InternshipsPage';
import ConsultancyPage from './components/consultancy/ConsultancyPage';
import BPOPage from './components/bpo/BPOPage';
import DigitalMarketingPage from './components/digitalmarketing/DigitalMarketingPage';
import InfraSupportPage from './components/infrasupport/InfraSupportPage';
import StaffAugmentationPage from './components/staffaugmentation/StaffAugmentationPage';
import PartnershipPage from './components/partnership/PartnershipPage';
import AboutUsPage from './components/about/AboutUsPage';
// import ThreePage from './components/three/ThreePage';
import Footer from './components/layout/Footer';
import ContactForm from './components/contact/contact';
import ScrollToTop from './components/layout/ScrollToTop';
import Chatbot from './components/chatbot/Chatbot';
import LiveChatButton from './components/livechat/LiveChatButton';
import { useState } from 'react';


function App() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);
  

  const handleOpenChatbot = () => {
    setShowChatbot(true);
    setShowLiveChat(false);
  };

  const handleCloseChatbot = () => {
    setShowChatbot(false);
  };

  const handleOpenLiveChat = () => {
    setShowLiveChat(true);
    setShowChatbot(false);
  };

  const handleCloseLiveChat = () => {
    setShowLiveChat(false);
  };

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/erpnext" element={<ErpNextPage />} />
            <Route path="/flowtech" element={<FlowTechPage />} />
            <Route path="/hippohrm" element={<HippoHRMPage />} />
            <Route path="/hippocrm" element={<HippoCRMPage />} />
            <Route path="/hippotripzone" element={<HippoTripZonePage />} />
            <Route path="/hippomint" element={<HippoMintPage />} />
            <Route path="/hippobuildx-material" element={<HippoBuildXMaterialPage />} />
            <Route path="/hippobuildx-transport" element={<HippoBuildXTransportPage />} />
            <Route path="/hippobuildx-asset" element={<HippoBuildXAssetPage />} />
            <Route path="/appdevsupport" element={<AppDevSupportPage />} />
            <Route path="/itopssupport" element={<ItOpsSupportPage />} />
            <Route path="/trainingsprojects" element={<TrainingsProjectsPage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/consultancy" element={<ConsultancyPage />} />
            <Route path="/bpo" element={<BPOPage />} />
            <Route path="/digitalmarketing" element={<DigitalMarketingPage />} />
            <Route path="/infrasupport" element={<InfraSupportPage />} />
            <Route path="/staffaugmentation" element={<StaffAugmentationPage />} />
            <Route path="/partnership" element={<PartnershipPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactForm />} />
            {/* <Route path="/three" element={<ThreePage />} /> */}
          </Routes>
          <Footer />
          <Chatbot open={showChatbot} onOpen={handleOpenChatbot} onClose={handleCloseChatbot} />
          <LiveChatButton open={showLiveChat} onOpen={handleOpenLiveChat} onClose={handleCloseLiveChat} isChatbotOpen={showChatbot} />
        </ThemeProvider>
      </Router>
    </div>
  );
}



export default App;

