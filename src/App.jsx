import './App.css';
import BankingScaleHero from './components/BankingScaleHero';
import CaseStudiesCarousel from './components/CaseStudiesCarousel';
import Layout from './components/layout/Layout';
import ProductTeaser from './components/ProductTeaser';

function App() {
  return (
    <>
      <Layout>
        <ProductTeaser />
        <BankingScaleHero />
        <CaseStudiesCarousel />
      </Layout>
    </>
  );
}

export default App;
