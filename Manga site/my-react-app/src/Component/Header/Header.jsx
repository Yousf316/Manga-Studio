
import  { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src="http://192.168.1.143:5173/src/assets/Pictures/icons8-open-book-64.png" className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/">قائمة التصانيف</a>
          <a href="/">الصفحة الرئيسية</a>
          
          <button>الخروج</button>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
       
      </button>
    </header>
  );
}
