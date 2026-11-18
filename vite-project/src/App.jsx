import React from 'react';
import Header from '../src/assets/components/header/Header.jsx';
import Section from '../src/assets/components/section/section.jsx';
import Sec from '../src/assets/components/section2/sec.jsx'
import FeaturesSection from '../src/assets/components/section3/FeaturesSection.jsx'
import AccessSection from '../src/assets/components/section4/AccessSection.jsx'
import DashboardSection from '../src/assets/components/section5/DashboardSection.jsx'
import ReviewsSection from '../src/assets/components/section6/ReviewsSection.jsx'
import TeamSection from '../src/assets/components/section7/TeamSection.jsx'
import PricingSection from '../src/assets/components/section8/PricingSection.jsx'
import BlogSection from '../src/assets/components/section9/BlogSection.jsx'
import CtaSection from '../src/assets/components/section10/CtaSection.jsx'
import Footer from '../src/assets/components/footer/Footer.jsx'
import '../src/assets/mobile.scss'

function App() {
  return (
    <div>
      <Header />
      <Section />
      <Sec />
      <FeaturesSection />
      <AccessSection />
      <DashboardSection />
      <ReviewsSection />
      <TeamSection />
      <PricingSection />
      <BlogSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;