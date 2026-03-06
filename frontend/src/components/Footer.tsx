import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="guac-container">
        <div className="footer-inner">
          <span className="footer-brand">Consumr.dk</span>
          <span className="footer-divider">•</span>
          <span>© 2026</span>
          <span className="footer-divider">•</span>
          <span>All rights reserved</span>
          <span className="footer-divider">•</span>
          <a href="/privacy" className="footer-link">Privacy</a>
          <span className="footer-divider">•</span>
          <a href="/terms" className="footer-link">Terms</a>
          <span className="footer-divider">•</span>
          <a href="/cookies" className="footer-link">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
