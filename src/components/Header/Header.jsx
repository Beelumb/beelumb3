import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header" className="d-flex align-items-center">
      <div className="d-flex container-fluid container-lg position-relative">
        <a href="" className="me-auto align-self-center logo">
          Logo
        </a>
        {/* Hamburger icon for mobile */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            marginLeft: "auto",
            color: "#6B267F",
            padding: 0,
          }}
        >
          <span className="navbar-toggler-icon">
            <svg width="22" height="22" viewBox="0 0 30 30">
              <rect width="22" height="3" rx="1.5" fill="#6B267F" />
              <rect y="9.5" width="22" height="3" rx="1.5" fill="#6B267F" />
              <rect y="19" width="22" height="3" rx="1.5" fill="#6B267F" />
            </svg>
          </span>
        </button>
        {/* Desktop nav */}
        <nav className="d-none d-lg-flex align-items-center">
          <ul className="d-flex">
            <li>
              <Link to="Seo">SEO</Link>
            </li>
            <li>
              <Link to="Sem">SEM</Link>
            </li>
            <li>
              <Link to="WebDesign">Web Design</Link>
            </li>
          </ul>
        </nav>
        {/* Mobile nav */}
        {menuOpen && (
          <>
            {/* Overlay background */}
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "#fff",
                opacity: 1,
                zIndex: 999,
              }}
              onClick={() => setMenuOpen(false)}
            />
            <nav
              className="mobile-nav d-lg-none position-absolute w-100"
              style={{
                top: "100%",
                left: 0,
                background: "#fff",
                borderRadius: "0 0 20px 20px",
                zIndex: 1000,
              }}
            >
              <ul
                className="d-flex flex-column text-center m-0 p-3"
                style={{ gap: "1rem" }}
              >
                <li>
                  <Link to="Seo" onClick={() => setMenuOpen(false)}>
                    SEO
                  </Link>
                </li>
                <li>
                  <Link to="Sem" onClick={() => setMenuOpen(false)}>
                    SEM
                  </Link>
                </li>
                <li>
                  <Link to="WebDesign" onClick={() => setMenuOpen(false)}>
                    Web Design
                  </Link>
                </li>
                <li>
                  <button
                    className="contactButton mt-2"
                    style={{ width: "100%" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </>
        )}
        {/* Desktop contact button */}
        <button className="contactButton align-self-center d-none d-lg-block">
          Contact
        </button>
      </div>
    </header>
  );
}
