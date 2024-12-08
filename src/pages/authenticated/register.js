import "../../styles/register.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { registerUser } from "../../services/apiservices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      if (response.status) {
        navigate("/")
      } else {
        toast.error()
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="register-body p-1">
      <div className="bg-white max-w-[450px] px-2 py-5 rounded-md flex flex-col gap-4 w-full items-center">
        <img src={logo} alt="Logo" className="w-[45%] h-[45%] rounded-lg" />
        <h4 className="font-semibold text-[18px] text-center">
          Sign up your account
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="text-[#858585] text-[12px] mb-1"><strong>Name</strong></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-[#b3b3b3] text-[#6e6e6e] bg-white py-[.375rem] px-[1rem] border-[1px] rounded-[0.5rem] focus:outline-none leading-[1.4px]"
            />
          </div>
          <div className="mb-3">
            <label className="text-[#858585] text-[12px] mb-1"><strong>Email Address</strong></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-[#b3b3b3] text-[#6e6e6e] bg-white py-[.375rem] px-[1rem] border-[1px] rounded-[0.5rem] focus:outline-none leading-[1.4px]"
            />
          </div>
          <div className="mb-3">
            <label className="text-[#858585] text-[12px] mb-1"><strong>Phone Number</strong></label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-[#b3b3b3] text-[#6e6e6e] bg-white py-[.375rem] px-[1rem] border-[1px] rounded-[0.5rem] focus:outline-none leading-[1.4px]"
            />
          </div>
          <div className="mb-3">
            <label className="text-[#858585] text-[12px] mb-1"><strong>Password</strong></label>
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
              <strong>Sign Me up</strong>
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="font-medium text-[14px]">
            Already have an account?{" "}
            <a href={"/"}>
              <span className="text-[#fc8421]">Sign in</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
