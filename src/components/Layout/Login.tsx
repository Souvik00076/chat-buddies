import { FC, useCallback, useReducer, useState } from "react";
import { generateRequest } from "../../services";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks";
import { TUser } from "../../@types";

type TState = {
  email: string;
  password: string;
};
type TAction =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string };
function reducer(state: TState, action: TAction) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
}
export const Login: FC = () => {
  const setUser = useUser().setUser;
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const onLogin = useCallback(async () => {
    try {
      if (loading) return;
      setLoading(true);
      const data = await generateRequest<TUser & { [key: string]: string }>({
        path: "auth/login",
        method: "POST",
        body: {
          email: state.email,
          password: state.password,
        },
      });
      if (!data) {
        return;
      }
      setUser(data);
      localStorage.setItem("x-access-token", data.x_access_token);
      localStorage.setItem("refreshToken", data.refreshToken);
      navigate("/");
    } catch (error) {
      //toast error message
    } finally {
      setLoading(false);
    }
  }, [state, navigate, loading, setUser]);

  return (
    <div
      className="bg-white-smoke 
      rounded-xl 
      w-[60%] 
      h-[80%]
      px-8
      py-8
      flex
      flex-col
      gap-y-4
      items-center
      justify-center
      "
    >
      <div className="flex flex-col items-start text-lg">
        <label>Email</label>
        <input
          type="email"
          placeholder="hello@gmail.com"
          className="
          bg-transparent
          px-4
          py-2
          rounded-md
          border-primary-light
          border
          "
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "SET_PASSWORD", payload: e.target.value });
          }}
        />
      </div>
      <div className="flex flex-col items-start text-lg">
        <label>Password</label>
        <input
          type="password"
          placeholder="1232343"
          className="
          bg-transparent
          px-4
          py-2
          rounded-md
          border-primary-light
          border
          "
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "SET_EMAIL", payload: e.target.value });
          }}
        />
      </div>
      <button
        className="
        bg-primary-light
        px-6 
        py-2 
        rounded-md 
        text-white-smoke"
        onClick={onLogin}
      >
        Login
      </button>

      <span>
        Don't have an account ?{" "}
        <a
          className=" cursor-pointer text-primary-light font-bold"
          href="/auth/sign-up"
        >
          Sign Up
        </a>
      </span>
    </div>
  );
};
