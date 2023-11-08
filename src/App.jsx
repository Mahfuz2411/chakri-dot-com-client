import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./pages/Loader";

function App() {
  return (
    <>
      <ToastContainer />
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <Loader></Loader>
      </div>
    </>
  );
}

export default App;
