// import LoginForm from './components/LoginForm';
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.firstName}</h1>
          <img src={user.image} alt={user.username} />
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default LoginPage;
