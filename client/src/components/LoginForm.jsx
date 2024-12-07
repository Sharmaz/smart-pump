import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import useFetch from '../hooks/useFetch';
import { UserContext } from '../User';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const { baseUrl } = config;

  const url = `${baseUrl}/api/v1/auth/login`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  const {
    userData,
    loading,
    error,
    fetchData,
  } = useFetch(url, options, { immediate: false });

  useEffect(() => {
    if (userData.user) {
      setUser(userData);
      const id = userData.user._id;
      navigate(`/users/${id}`, { replace: true });
    }
  }, [userData]);

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData(options);
  };
  return (
    <div>
      <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
        <label
          className="flex flex-col justify-center weight-bold text-xl my-2"
          htmlFor="email"
        >
          Email
          <input
            className="border-2 border-slate-300 rounded-lg p-2 my-2 text-slate-500"
            type="email"
            name="email"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label
          className="flex flex-col justify-center weight-bold text-xl my-2"
          htmlFor="password"
        >
          Password
          <input
            className="border-2 border-slate-300 rounded-lg p-2 my-2 text-slate-500"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button
          className="bg-blue-400 text-xl text-white px-4 py-2 mt-4 rounded-lg w-full weight-bold"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
