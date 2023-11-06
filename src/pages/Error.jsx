import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div
      className="w-52 md:w-screen h-screen"
      style={{
        backgroundImage: `url("https://freefrontend.com/assets/img/html-funny-404-pages/GSAP-SVG-Animation-404-Error-Milk-Carton.gif")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavLink to="/">
        <button className="btn btn-primary relative">Go home</button>
      </NavLink>
    </div>
  );
};

export default Error;
