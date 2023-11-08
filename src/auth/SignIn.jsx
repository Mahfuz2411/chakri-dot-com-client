import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import HelmetCompo from "../components/HelmetCompo";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOnChangeInp = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignInWithEmail = (e) => {
    e.preventDefault();

    signInUser(user.email, user.password)
      .then(() => {
        toast("Singin successful");
        navigate("/");
      })
      .catch(() => {
        toast("Error Occered");
      });
  };

  const handleSingInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/");
        toast("SignUp successful");
      })
      .catch(() => toast("Error occured"));
  };

  return (
    <>
    <HelmetCompo helmet={"Login"}></HelmetCompo>
    <div className="w-full max-w-sm lg:max-w-3xl mx-auto hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full px-5 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">Login now!</h1>
          <p className="py-6">
          Unlock the door to a world of possibilities!.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignInWithEmail} className="card-body">
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
                value={user.email}
                onChange={handleOnChangeInp}
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="password"
                value={user.password}
                onChange={handleOnChangeInp}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Log In</button>
              <label className="label">
                <Link to="/signup" className="label-text-alt link link-hover">
                  Create an account?
                </Link>
              </label>
            </div>
          </form>
          <p className="label-text-alt text-center">---or---</p>
          <button
            onClick={handleSingInWithGoogle}
            className="btn btn-primary mx-7 my-3"
          >
            <BsGoogle /> Sign In with Google
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;
