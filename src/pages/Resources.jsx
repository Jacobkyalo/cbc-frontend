import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function Resources() {
  return (
    <>
      <header className="flex flex-wrap items-center gap-10 py-4">
        <Logo />
        <nav>
          <ul className="flex items-center gap-10">
            <li>
              <Link
                to="/resources"
                className="bg-text-bg px-6 py-3 text-lg font-bold"
              >
                Pre-Primary
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="bg-text-bg px-6 py-3 text-lg font-bold"
              >
                Primary
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="bg-text-green px-6 py-3 text-lg font-bold"
              >
                JSS
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="bg-text-bg px-6 py-3 text-lg font-bold"
              >
                Senior SS
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="grid place-items-center py-10">
        <h3 className="text-text-pink mb-2 text-xl font-bold">
          JUNIOR SEC0NDARY SCHOOL RESOURCES
        </h3>

        <ul className="flex w-full max-w-2xl flex-col gap-y-4">
          <li className="bg-text-bg-dark w-full p-1 text-center text-lg font-bold">
            Mathematics
          </li>
          <li className="bg-text-bg-dark w-full p-1 text-center text-lg font-bold">
            English
          </li>
          <li className="bg-text-bg-dark w-full p-1 text-center text-lg font-bold">
            Swahili or Kenyan Sign Language
          </li>
          <li className="bg-text-bg-dark w-full p-1 text-center text-lg font-bold">
            Integrated Science
          </li>
          <li className="bg-text-bg-dark w-full p-1 text-center text-lg font-bold">
            Social studiens
          </li>
          <li className="bg-text-bg-dark w-full p-1 text-center text-lg font-bold">
            Business Studies
          </li>
          <li className="bg-text-bg-dark w-full p-1 text-center text-lg font-bold">
            Agriculture
          </li>
          <li className="bg-text-bg-dark w-full p-1 text-center text-lg font-bold">
            Pre-Technical & Pre-Career Studies
          </li>
          <li className="bg-text-bg-dark w-full p-1 text-center text-lg font-bold">
            Religious Studies Education
          </li>
        </ul>
      </section>
    </>
  );
}
