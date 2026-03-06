import Link from "next/link";
import '../app/style.css';
import '../app/guacamoleboy-framework.css';
import '../app/guacamoleboy-wow.css';

export default function Header() {
  return (
    <header className="header-stack">

      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-track">
          <img src="/logo/danish-flag.png" alt="DK Flag" className="announcement-bar-flag" />
          <span>Consumr er i pre-release beta testing | Siden er IKKE live endnu</span>
          <img src="/logo/danish-flag.png" alt="DK Flag" className="announcement-bar-flag" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar-consumr">
        <div className="guac-container guac-d-flex guac-align-center guac-justify-between">

          {/* Brand */}
          <Link href="/" className="navbar-brand-consumr guac-d-flex guac-align-center">
            <img src="/logo/logo-256-white.png" className="navbar-logo-sizing" alt="Logo" />
            <span>Consumr.dk</span>
          </Link>

          {/* Mobile nav buttons (visual only) */}
          <button className="navbar-toggle" aria-label="Åbn menu">
            <i className="fa fa-bars"></i>
          </button>
          <button className="navbar-close" aria-label="Luk menu">
            <i className="fa fa-close"></i>
          </button>

          {/* Links */}
          <ul className="guac-d-flex guac-align-center guac-gap-3 nav-links">
            <li className="dropdown">
              <button className="dropdown-toggle">
                Top listen <i className="fa fa-chevron-down"></i>
              </button>
              <ul className="dropdown-menu">
                <li><Link href="/leaderboard/top100">Top 100 listen</Link></li>
                <li><Link href="/leaderboard/best-rated">Bedst ratede</Link></li>
                <li><Link href="/leaderboard/users">Bruger leaderboard</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <button className="dropdown-toggle">
                Feedback <i className="fa fa-chevron-down"></i>
              </button>
              <ul className="dropdown-menu">
                <li><Link href="https://discord.gg/HH4s6Pvu" target="_blank">Discord</Link></li>
                <li><Link href="/contact">Kontakt</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="/category"><button>Kategorier</button></Link>
            </li>
            <li className="dropdown">
              <Link href="/company-info"><button>Til virksomheder</button></Link>
            </li>
          </ul>

          {/* Actions (visual only) */}
          <div className="guac-d-flex guac-gap-2">
            <Link href="/login">
              <button className="guac-btn consumr-logind-btn">Log ind</button>
            </Link>
            <Link href="/register">
              <button className="guac-btn consumr-opret-btn">Opret Bruger</button>
            </Link>
          </div>

        </div>
      </nav>

    </header>
  );
}