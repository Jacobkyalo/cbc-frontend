import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-8 py-4">
      <div>
        <Logo />
      </div>
      <nav>
        <ul className="flex flex-wrap items-center gap-8">
          <li>
            <Link to="/" className="bg-text-bg px-6 py-3 text-lg font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/signin"
              className="bg-text-bg px-6 py-3 text-lg font-bold"
            >
              Signin
            </Link>
          </li>
          <li>
            <Link to="/" className="bg-text-bg px-6 py-3 text-lg font-bold">
              SignOut
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
