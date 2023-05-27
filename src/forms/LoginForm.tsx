import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import { login } from "../utils/log";
import { useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Controls, PlayState, Tween } from "react-gsap";
export default function LoginForm(): JSX.Element {
  const navigate = useNavigate();
  const acc = useRef<HTMLInputElement | null>();
  const pwd = useRef<HTMLInputElement | null>();
  return (
    <div className="flex flex-col border p-10 w-100 rounded-2xl text-center">
      <form
        onSubmit={() => {
          // const token = await login();
          // if (token) {
          // 	Cookies.set("token", token, { expires: 7, path: "" });
          // 	navigate("/");
          // }
          document.cookie = "token=123";
          navigate("/");
          window.location.reload();
        }}
      >
        <Title className="fadein-left">Welcome Back</Title>
        <Title className="text-xl mb-10 fadein-right">
          Pleace enter your details
        </Title>
        <Input ref={acc} required title={"Account"} />
        <Input ref={pwd} required title={"Password"} />
        <Button type="submit">sign in</Button>
        <div className="mt-4">
          Haven't have password? <a href="/register">Sign up</a>
        </div>
      </form>
    </div>
  );
}
