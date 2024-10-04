import { useState } from "react"
import { Link } from "react-router-dom"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logoImage from "../../assets/images/logo.png"
import "./index.css"

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <header>
      <nav className="container grid nav-bar">
        <Link className="nav-bar-logo" to={""}>
          <img src={logoImage} alt="Little Lemon logo" />
        </Link>
        <button
          className="nav-bar-hamburger"
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? (
            <FontAwesomeIcon icon={faXmark} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>
        <ul
          className={isNavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <li>
            <Link className={"current-location"} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/menu"}>Menu</Link>
          </li>
          <li>
            <Link to={"/bookings"}>Reservations</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
