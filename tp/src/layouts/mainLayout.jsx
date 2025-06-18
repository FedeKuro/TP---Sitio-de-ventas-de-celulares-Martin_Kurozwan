import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
