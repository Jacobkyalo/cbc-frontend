import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <main className="bg-bg-home">
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
}
