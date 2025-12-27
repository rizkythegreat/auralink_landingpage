import './App.css';
import BankingScaleHero from './components/BankingScaleHero';
import CaseStudiesCarousel from './components/CaseStudiesCarousel';
import FaqSection from './components/FaqSection';
import IntegrationCarousel from './components/IntegrationCarousel';
import Layout from './components/layout/Layout';
import PricingSection from './components/PricingSection';
import ProductTeaser from './components/ProductTeaser';

function App() {
  return (
    <>
      <Layout>
        <ProductTeaser />
        <BankingScaleHero />
        <CaseStudiesCarousel />
        <IntegrationCarousel />
        <PricingSection />
        <FaqSection />
      </Layout>
    </>
  );
}

export default App;
