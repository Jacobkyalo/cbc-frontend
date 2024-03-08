import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="h-24 w-24 object-cover" />
    </Link>
  );
}
