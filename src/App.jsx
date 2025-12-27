import './App.css';
import BankingScaleHero from './components/BankingScaleHero';
import CaseStudiesCarousel from './components/CaseStudiesCarousel';
import IntegrationCarousel from './components/IntegrationCarousel';
import Layout from './components/layout/Layout';
import ProductTeaser from './components/ProductTeaser';

function App() {
  return (
    <>
      <Layout>
        <ProductTeaser />
        <BankingScaleHero />
        <CaseStudiesCarousel />
        <IntegrationCarousel />
      </Layout>
    </>
  );
}

export default App;
