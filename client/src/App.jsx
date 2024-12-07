import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './User';
import UserImage from './assets/images/user.svg';
import ProfileForm from './components/ProfileForm';

function App() {
  const { user } = useContext(UserContext);
  const [showBalance, setShowBalance] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    isActive,
    balance,
    age,
    eyeColor,
    name,
    company,
    email,
    phone,
    address,
  } = user.user;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <img src={UserImage} alt="" width={100} height={100} />
      <h1 className="text-2xl text-blue-400 text-center font-bold">{`${name.first} ${name.last}`}</h1>
      <div className="flex">
        <button
          className={`${!isActive ? 'bg-slate-600' : 'bg-blue-500'} text-xl text-white px-4 py-2 m-4 rounded-lg weight-bold`}
          disabled={!isActive}
          type="button"
          onClick={() => setShowBalance(!showBalance)}
        >
          Balance
        </button>
        <button
          className={`${!isActive ? 'bg-slate-600' : 'bg-blue-500'} text-xl text-white px-4 py-2 m-4 rounded-lg weight-bold`}
          disabled={!isActive}
          type="button"
          onClick={() => setShowModal(!showModal)}
        >
          Edit
        </button>
        <Link to="/">
          <button
            className="bg-red-500 text-xl text-white px-4 py-2 m-4 rounded-lg weight-bold"
            type="button"
          >
            Logout
          </button>
        </Link>
      </div>
      <table className="table-auto md:text-xl">
        <tbody>
          {
            showBalance
              ? (
                <tr>
                  <td>
                    <span className="text-2xl font-bold">
                      Balance
                    </span>
                  </td>
                  <td>
                    <span className="text-2xl font-bold">
                      {balance}
                    </span>
                  </td>
                </tr>
              )
              : null
          }
          <tr>
            <td>Age</td>
            <td>{age}</td>
          </tr>
          <tr>
            <td>Eye Color</td>
            <td>{eyeColor}</td>
          </tr>
          <tr>
            <td>Company</td>
            <td>{company}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{address}</td>
          </tr>
        </tbody>
      </table>
      {
        showModal
          ? (
            <ProfileForm user={user} setShowModal={setShowModal} />
          )
          : null
      }
    </div>
  );
}

export default App;
