import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function Signin() {
  return (
    <>
      <div className="grid place-items-center pt-10">
        <Logo />
      </div>
      <section className="grid place-items-center gap-8 py-20 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <form className="bg-text-bg w-full px-4 py-8">
            <h3 className="mb-2 text-center text-xl font-bold">
              STUDENT LOGIN
            </h3>
            <hr />
            <div className="my-4">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-text-bg-dark mt-2 w-full px-4 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-text-bg-dark mt-2 w-full px-4 py-2"
                required
              />
            </div>
            <Link to="/signin">
              <span className="block text-end font-bold">Reset password?</span>
            </Link>
            <Link to="/resources">
              <button
                type="submit"
                className="bg-text-bg-dark mt-4 w-full py-2 font-bold"
              >
                LOGIN
              </button>
            </Link>
          </form>
        </div>
        <div>
          <form className="bg-text-bg w-full px-4 py-8">
            <h3 className="mb-2 text-center text-xl font-bold">TUTOR LOGIN</h3>
            <hr />
            <div className="my-4">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-text-bg-dark mt-2 w-full px-4 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-text-bg-dark mt-2 w-full px-4 py-2"
                required
              />
            </div>
            <Link to="/signin">
              <span className="block text-end font-bold">Reset password?</span>
            </Link>
            <Link to="/resources">
              <button
                type="submit"
                className="bg-text-bg-dark mt-4 w-full py-2 font-bold"
              >
                LOGIN
              </button>
            </Link>
          </form>
        </div>
        <div>
          <form className="bg-text-bg w-full px-4 py-8">
            <h3 className="mb-2 text-center text-xl font-bold">PARENT LOGIN</h3>
            <hr />
            <div className="my-4">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-text-bg-dark mt-2 w-full px-4 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-text-bg-dark mt-2 w-full px-4 py-2"
                required
              />
            </div>
            <Link to="/signin">
              <span className="block text-end font-bold">Reset password?</span>
            </Link>
            <Link to="/resources">
              <button
                type="submit"
                className="bg-text-bg-dark mt-4 w-full py-2 font-bold"
              >
                LOGIN
              </button>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}
