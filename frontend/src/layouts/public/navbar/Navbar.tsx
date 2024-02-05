import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0 5px",
      }}
    >
      <Link style={{ textDecoration: "none" }} to="/">
        room-to-rent
      </Link>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          listStyle: "none",
        }}
      >
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            Dashboard
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
