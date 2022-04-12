import { useState, useEffect } from "react";
import StyledWrapper from "./styled";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BASE_URL from "../../app/config";
import { useRegisterMutation } from "../../app/services/contact";
import { useCheckInviteTokenValidMutation } from "../../app/services/auth";

export default function InvitePage() {
  const [secondPwd, setSecondPwd] = useState("");
  const [samePwd, setSamePwd] = useState(true);
  const [token, setToken] = useState("");
  const [valid, setValid] = useState(false);
  // const [sp] = useSearchParams();
  const navigateTo = useNavigate();
  const [
    register,
    { data, isLoading, isSuccess, isError, error },
  ] = useRegisterMutation();
  const [
    checkToken,
    { data: isValid, isLoading: checkLoading, isSuccess: checkSuccess },
  ] = useCheckInviteTokenValidMutation();
  useEffect(() => {
    // console.log(search);
    const query = new URLSearchParams(location.search);
    setToken(query.get("token"));
  }, []);
  useEffect(() => {
    if (token) {
      checkToken(token);
    }
  }, [token]);
  useEffect(() => {
    if (checkSuccess) {
      console.log({ isValid });
      setValid(isValid);
    } else {
      setValid(false);
    }
  }, [checkSuccess, isValid]);

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleReg = (evt) => {
    evt.preventDefault();
    if (!samePwd) {
      toast.error("two passwords not same");
      return;
    }
    console.log("wtf", input);
    register({
      ...input,
      magic_token: token,
      gender: 1,
    });
  };
  const handleInput = (evt) => {
    const { type } = evt.target.dataset;
    const { value } = evt.target;
    console.log(type, value);
    setInput((prev) => {
      prev[type] = value;
      return { ...prev };
    });
  };
  const handleSecondPwdInput = (evt) => {
    const { value } = evt.target;
    setSecondPwd(value);
  };
  const handlePwdCheck = () => {
    if (secondPwd) {
      setSamePwd(secondPwd == input.password);
    }
  };
  useEffect(() => {
    if (!samePwd) {
      toast.error("two passwords not same");
    }
  }, [samePwd]);

  useEffect(() => {
    if (isSuccess && data) {
      // 去登录
      toast.success("register success, login please");
      setTimeout(() => {
        navigateTo("/login");
      }, 500);
    } else if (isError) {
      console.log("register failed", error);
      switch (error.status) {
        case 412:
          toast.error("register failed: invalid token or expired");
          break;
        case 409: {
          const tips = {
            email_conflict: "email conflict",
            name_conflict: "name conflict",
          };
          toast.error(`register failed: ${tips[error.data?.reason]}`);
          break;
        }
        default:
          toast.error("register failed");
          break;
      }
    }
  }, [data, isSuccess, isError, error]);

  const { email, password, name } = input;
  if (!token) return "token not found";
  if (checkLoading) return "checking token valid";
  if (!valid) return "invite token expires or invalid";
  return (
    <StyledWrapper>
      <div className="form animate__animated animate__fadeInDown animate__faster">
        <div className="tips">
          <img
            src={`${BASE_URL}/resource/organization/logo`}
            alt="logo"
            className="logo"
          />
          <h2 className="title">Sign Up to Rustchat</h2>
          <span className="desc">Please enter your details.</span>
        </div>
        <form onSubmit={handleReg}>
          <input
            name="name"
            value={name}
            required
            placeholder="Enter your name"
            data-type="name"
            onChange={handleInput}
          />
          <input
            name="email"
            value={email}
            required
            placeholder="Enter your email"
            data-type="email"
            onChange={handleInput}
          />
          <input
            type="password"
            value={password}
            name="password"
            required
            data-type="password"
            onChange={handleInput}
            placeholder="Enter your password"
          />
          <input
            type="password"
            value={secondPwd}
            name="password"
            required
            data-type="password"
            onBlur={handlePwdCheck}
            onChange={handleSecondPwdInput}
            placeholder="Enter your password again"
          />
          <button
            disabled={isLoading || isSuccess}
            className="btn"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </StyledWrapper>
  );
}