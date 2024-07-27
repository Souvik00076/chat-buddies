import { FC, useCallback, useState } from "react";
import { isValidEmail, isValidPassword } from "../../utils";
import { generateRequest } from "../../services";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const onLogin = useCallback(async () => {
    try {
      setLoading(true);
      await generateRequest({
        path: "auth/login",
        method: "POST",
        body: {
          email,
          password,
        },
      });
      navigate("/");
    } catch (error) {
      //toast error message
    } finally {
      setLoading(false);
    }
  }, [email, password]);
  return <></>;
};
