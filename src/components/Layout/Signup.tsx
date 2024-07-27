import { FC, useCallback, useState } from "react";
import { generateRequest } from "../../services";
import { useNavigate } from "react-router-dom";

export const Signup: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confPassword, setConfPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const onSignUp = useCallback(async () => {
    try {
      setLoading(true);
      await generateRequest({
        path: "auth/sign-up",
        method: "POST",
        body: {
          email,
          password,
        },
      });
      navigate("auth/login");
    } catch (error) {
      //show toast error
    } finally {
      setLoading(false);
    }
  }, [email, password]);
  return <></>;
};
