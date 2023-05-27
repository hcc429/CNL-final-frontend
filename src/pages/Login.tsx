import { Controls, PlayState, Tween } from "react-gsap";
import main from "../assets/main.png";
import LoginForm from "../forms/LoginForm";

export default function Login(): JSX.Element {
  return (
    <div className="flex flex-col  items-center xl:flex-row-reverse  justify-center w-9/12 mx-auto mt-20 gap-5">
      <LoginForm />
      <Tween from={{ scale: 1.5 }} to={{ scale: 1 }} duration={0.75}>
        <div className="flex items-center bg-contain">
          <img src={main}></img>
        </div>
      </Tween>

    </div>
  );
}
