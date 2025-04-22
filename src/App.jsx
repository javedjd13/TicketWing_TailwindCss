import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
      <main>
        <Outlet />  {/* Dynamic routes will render here */}
      </main>
      <Footer />
  </>
  );
}

export default App;
