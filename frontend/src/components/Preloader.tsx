import React from "react";
import '../app/style.css';
import '../app/guacamoleboy-framework.css';
import '../app/guacamoleboy-wow.css';

export default function Preloader() {
  return (
    <div className="preloader">
      <img 
        src="/logo/preloader-2.png" 
        alt="Preloader Logo" 
        className="consumr-logo-preloader" 
      />
    </div>
  );
}