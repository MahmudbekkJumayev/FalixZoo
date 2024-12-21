import React, { useState } from "react";

const SignUp = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const uzbekistanPhoneRegex = /^\+998\d{9}$/;

  const handleChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value); 
  };

  const handleBlur = () => {
    if (phoneNumber && !uzbekistanPhoneRegex.test(phoneNumber)) {
      setError("Iltimos, O'zbekiston telefon raqamini kiriting.");
    } else {
      setError(""); 
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 relative dark:bg-gray-100 dark:border-white">
        <button
          onClick={onClose}
          className="absolute text-[15px] p-[4px] rounded-full flex justify-center items-center top-2 right-2 text-white bg-gray-400"
        >
          X
        </button>
        <form className="space-y-6" action="#">
          <div>
            <h5 className="text-xl font-medium text-gray-900">
              Telefon raqamini kiriting
            </h5>
            <p>Tasdiqlash kodi SMS orqali yuboramiz</p>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Telefon raqami
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+998 ___-__-__"
              className={`bg-gray-50 border ${
                error ? "border-red-500" : "border-gray-300"
              } text-gray-950 text-[17px] font-medium rounded-lg focus:ring-green-500 focus:border-green-200 block w-full p-2.5 outline-none dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-700`}
              required
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={!phoneNumber || !!error}
            className={`w-full text-white ${
              phoneNumber && !error
                ? "bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                : "bg-gray-400 cursor-not-allowed"
            } font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}
          >
            Kodni olish
          </button>
          <div className="text-sm font-medium text-gray-800 dark:text-gray-300 text-center">
            <span className="text-gray-800 font-medium text-center">
              Avtorizatsiyadan o'tish orqali{" "}
              <p className="text-gray-600 font-normal">
                shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik
                bildirasiz
              </p>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
