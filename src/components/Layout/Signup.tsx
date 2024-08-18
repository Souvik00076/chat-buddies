import { FC, useCallback, useReducer, useState } from "react";
import { generateRequest } from "../../services";
import { useNavigate } from "react-router-dom";

type TState = {
  email: string;
  password: string;
  confPass: string;
};
type TAction =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_CONF"; payload: string };
function reducer(state: TState, action: TAction) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_CONF":
      return { ...state, confPass: action.payload };
    default:
      return state;
  }
}
export const Signup: FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
    confPass: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const onLogin = useCallback(async () => {
    try {
      if (loading) return;
      setLoading(true);
      await generateRequest({
        path: "auth/sign-up",
        method: "POST",
        body: {
          email: state.email,
          password: state.password,
        },
      });
      navigate("/auth/login");
    } catch (error) {
      //toast error message
    } finally {
      setLoading(false);
    }
  }, [state, navigate, loading]);

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
      <div className="flex flex-col items-start text-lg">
        <label>Confirm Password</label>
        <input
          type="password"
          className="
          bg-transparent
          px-4
          py-2
          rounded-md
          border-primary-light
          border
          "
          value={state.confPass}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "SET_CONF", payload: e.target.value });
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
        Signup
      </button>
    </div>
  );
};
