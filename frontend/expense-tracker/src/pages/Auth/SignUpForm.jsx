import React, { useContext, useState } from "react";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import { UserContext } from "../../context/UserContext";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle Sign Up Form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError(""); // Clear any previous errors

    try {
      // SignUp API Call without image
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageUrl: "", // No image upload logic anymore
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center items-center"> {/* Added items-center for horizontal centering */}
        <h3 className="text-2xl font-bold text-blue-900 font-sans text-center"> {/* Added text-center */}
          Create an Account
        </h3>

        <p className="text-xs text-grey-300 mt-[5px] mb-6 text-center"> {/* Added text-center */}
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUp}>
          {/* Removed ProfilePhotoSelector */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John"
              type="text"
              className="text-white"
            />

            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@example.com"
              type="text"
              className="text-white"
            />

            <div className="col-span-2">
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 Characters"
                type="password"
                className="text-white"
              />
            </div>
          </div>

          {error && <p className="text-red-400 text-xs pb-2.5">{error}</p>}

          <div className="flex justify-center mt-6">
            <button
  type="submit"
  className="w-48 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out"
  style={{ backgroundColor: "#1f68a1" }}
>
  SIGN UP
</button>

          </div>
          
          <p className="text-[13px] text-gray-700 mt-3 text-center"> {/* Added text-center */}
            Already have an account?{" "}
            <Link className="font-medium text-[#1e3a8a] underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUpForm;
