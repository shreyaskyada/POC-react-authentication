import { ChangeEvent, FormEvent, useState } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { signin } = useAuth();

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signin(userName, () => {
      navigate("/", { replace: true });
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="username"
        value={userName}
        placeholder="Username"
        required
        onChange={onInputChangeHandler}
      />
      <br />
      <br />
      <button>Login</button>
    </form>
  );
};

export default Login;
