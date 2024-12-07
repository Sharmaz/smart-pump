import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import { UserContext } from '../User';
import config from '../config';

function ProfileForm({ user, setShowModal }) {
  const { baseUrl } = config;
  const {
    age,
    eyeColor,
    company,
    email,
    phone,
    address,
  } = user.user;

  const { token } = user;

  const [updatedAge, setUpdatedAge] = useState(age);
  const [updatedEyeColor, setUpdatedEyeColor] = useState(eyeColor);
  const [updatedCompany, setUpdatedCompany] = useState(company);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedPhone, setUpdatedPhone] = useState(phone);
  const [updatedAddress, setUpdatedAddress] = useState(address);
  const { setUser } = useContext(UserContext);

  const url = `${baseUrl}/api/v1/users/${user.user._id}`;

  const changes = {
    age: updatedAge,
    eyeColor: updatedEyeColor,
    company: updatedCompany,
    email: updatedEmail,
    phone: updatedPhone,
    address: updatedAddress,
  };
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(changes),
  };

  const {
    loading,
    error,
    fetchData,
  } = useFetch(url, options, { immediate: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData(options);
    setUser({
      ...user,
      ...{
        user: {
          ...user.user,
          ...changes,
        },
      },
    });
    setShowModal(false);
  };

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="absolute top-0 left-0">
      <div
        className="absolute top-0 left-0 bg-slate-950 w-screen h-screen opacity-50"
        onClick={() => setShowModal(false)}
        aria-hidden="true"
      />
      <div className="flex justify-center items-center w-screen h-screen">
        <form
          className="flex flex-col justify-center items-center bg-white p-8 rounded-lg z-10 text-md w-[90%] md:w-[500px] "
          onSubmit={handleSubmit}
        >
          <label
            className="flex flex-col justify-center weight-bold my-2 w-full"
            htmlFor="age"
          >
            Age
            <input
              type="number"
              name="age"
              id="age"
              className="border-2 border-slate-300 rounded-lg p-1 my-1 md:p-2 md:my-2 text-slate-500"
              value={updatedAge}
              onChange={(e) => setUpdatedAge(e.target.value)}
            />
          </label>
          <label
            className="flex flex-col justify-center weight-bold my-2 w-full"
            htmlFor="eyeColor"
          >
            Eye Color
            <input
              type="text"
              name="eyeColor"
              id="eyeColor"
              className="border-2 border-slate-300 rounded-lg p-1 my-1 md:p-2 md:my-2 text-slate-500"
              value={updatedEyeColor}
              onChange={(e) => setUpdatedEyeColor(e.target.value)}
            />
          </label>
          <label
            className="flex flex-col justify-center weight-bold my-2 w-full"
            htmlFor="company"
          >
            Company
            <input
              type="text"
              name="company"
              id="company"
              className="border-2 border-slate-300 rounded-lg p-1 my-1 md:p-2 md:my-2 text-slate-500"
              value={updatedCompany}
              onChange={(e) => setUpdatedCompany(e.target.value)}
            />
          </label>
          <label
            className="flex flex-col justify-center weight-bold my-2 w-full"
            htmlFor="email"
          >
            Email
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 border-slate-300 rounded-lg p-1 my-1 md:p-2 md:my-2 text-slate-500"
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
            />
          </label>
          <label
            className="flex flex-col justify-center weight-bold my-2 w-full"
            htmlFor="phone"
          >
            Phone
            <input
              type="tel"
              name="phone"
              id="phone"
              className="border-2 border-slate-300 rounded-lg p-1 my-1 md:p-2 md:my-2 text-slate-500"
              value={updatedPhone}
              onChange={(e) => setUpdatedPhone(e.target.value)}
            />
          </label>
          <label
            className="flex flex-col justify-center weight-bold my-2 w-full"
            htmlFor="address"
          >
            Address
            <input
              type="text"
              name="address"
              id="address"
              className="border-2 border-slate-300 rounded-lg p-1 my-1 md:p-2 md:my-2 text-slate-500"
              value={updatedAddress}
              onChange={(e) => setUpdatedAddress(e.target.value)}
            />
          </label>
          <button
            className="bg-blue-400 text-xl text-white px-4 py-2 mt-4 rounded-lg w-full weight-bold"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

ProfileForm.propTypes = {
  user: PropTypes.object.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default ProfileForm;
