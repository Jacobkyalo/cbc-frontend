import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import child from "../assets/child.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="py-20">
        <div className="grid sm:grid-cols-2">
          <div>
            <h1 className="mb-10 text-3xl font-bold">
              Embark on a transformative learning journey with our e-learning
              platform.
            </h1>
            <p className="text-text-blue text-3xl font-black">
              Excellence Our Choice
            </p>
          </div>
          <div>
            <img src={child} alt="child" className="h-96 w-full" />
          </div>
        </div>
      </section>
      <section className="flex justify-center py-20">
        <Link
          to="signin"
          className="bg-btn-color rounded-full px-8 py-4 text-xl font-black"
        >
          Get started
        </Link>
      </section>
    </>
  );
}
