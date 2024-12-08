import "../../styles/login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { loginUser } from "../../services/apiservices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      if (response.status) {
        navigate("/index");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      // console.error("Error:", error);
      // alert("Something went wrong. Please try again.");
      toast.error(error.message);
    }
  };
  return (
    <div className="login-body p-1">
      <div className="bg-white max-w-[450px] px-2 py-5 rounded-md flex flex-col gap-4 w-full items-center">
        <img src={logo} alt="" className="w-[45%] h-[45%] rounded-lg" />
        <div className="block">
          <h4 className="font-bold text-[18px] text-center">
            Create an Account
          </h4>
          <div className="flex justify-center items-center gap-2 ">
            <hr className="flex-grow border-t  border-[#d6d6d6]" />
            <a href="/register" className="">
              <p className="text-[14px] hover:text-[#0000FF] text-[#a5a5a5] font-semibold ">
                Sign Up
              </p>
            </a>
            <hr className="flex-grow border-t border-[#d6d6d6]" />
          </div>
          {/* login form */}
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="text-[#858585] text-[12px] mb-1">
                <strong>Email Address</strong>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-[#b3b3b3] text-[#6e6e6e] bg-white py-[.375rem] px-[1rem] border-[1px] rounded-[0.5rem] focus:outline-none leading-[1.4px]"
              />
            </div>
            <div className="mb-3">
              <label className="text-[#858585] text-[12px] mb-1">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-[#b3b3b3] text-[#6e6e6e] bg-white py-[.375rem] px-[1rem] border-[1px] rounded-[0.5rem] focus:outline-none leading-[1.4px]"
              />
            </div>
            <div className="mb-3">
              <button className="w-full h-auto p-4 text-white text-[12px] leading-[1.5px] rounded-[0.5rem] bg-[#fc8019] hover:bg-[#df6703]">
                <strong>Sign Me in</strong>
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="font-medium text-[14px]">
              {" "}
              Don't have an account{" "}
              <a href={"/register"}>
                <span className="text-[#fc8421]"> Sign up </span>
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
