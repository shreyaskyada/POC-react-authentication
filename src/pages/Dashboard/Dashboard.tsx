import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const Dashboard = () => {
  const navigate = useNavigate();
  const { signout } = useAuth();

  const onClickHandler = () => {
    signout(() => {
      navigate("/login");
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={onClickHandler}>Log out</button>
    </div>
  );
};

export default Dashboard;
