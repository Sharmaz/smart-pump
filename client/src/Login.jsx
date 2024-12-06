import LogoImage from './assets/images/logo.png';
import LoginForm from './components/LoginForm';

function Login() {
  return (
    <div className="flex flex-col mt-20 md:mt-0 md:justify-center items-center h-screen bg-white ">
      <img src={LogoImage} alt="Smart Pump Logo" width={150} height={150} />
      <LoginForm />
    </div>
  );
}

export default Login;
