import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBanner from "./TopBanner";

export default function Layout() {
  return (
    <>
      <TopBanner />
      <header>
        <Navbar></Navbar>
      </header>
      <main className="main-content">
        <Outlet></Outlet>
      </main>
      {/* <Footer></Footer> */}
    </>
  );
}
