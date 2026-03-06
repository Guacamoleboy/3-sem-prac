import DynamicText from "./index/DynamicText";
import ProductSearch from './index/ProductSearch';

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="guac-container guac-text-center">
        <img src="/logo/logo-256-white.png" className="logo-small" alt="Consumr Logo" />
        <p className="guac-fw-bold">FIND ANMELDELSER FOR ALLE PRODUKTER</p>
        <h1 className="dynamic-word-visuals">
          <DynamicText words={["Smag", "Mærk", "Lyt", "Vurder"]} /> – <span>del din oplevelse.</span>
        </h1>

        {/* Search input + results */}
        <ProductSearch />

        {/* Feature Buttons */}
        <div className="integration-buttons">
          <button className="integration-btn">
            <i className="fa fa-star"></i>
            <span>Ærlige anmeldelser</span>
          </button>
          <button className="integration-btn">
            <i className="fa fa-barcode"></i>
            <span>Scanner</span>
          </button>
          <button className="integration-btn">
            <i className="fa fa-globe"></i>
            <span>Kæmpe database</span>
          </button>
          <button className="integration-btn">
            <i className="fa fa-users"></i>
            <span>Din mening gælder</span>
          </button>
        </div>
      </div>
    </section>
  );
}
