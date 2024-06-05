import React from "react";

export default function FormInput({setgender}: {setgender:React.Dispatch<React.SetStateAction<string | undefined>>}) {
  const handlegender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setgender(e.target.value);
  };
  return (
    <div className="form-container m-5 p-8 text-center">
      <form>
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="username  w-full">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
            />
          </div>
          <div className="username w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
            />
          </div>
        </div>
        <div className="username mb-4 w-full">
          <input
            type="number"
            name="mobile-number"
            placeholder="Mobile number"
            className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
          />
        </div>
        <div className="username mb-4 w-full flex gap-3">
          <select className="p-2 border-2 rounded-lg bg-teal-500 ">
            <option className="text-white">1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input
            type="number"
            name="mobile-number"
            placeholder="Mobile number"
            className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
          />
        </div>
        <div className="username mb-4 w-full flex gap-3">
          <label className="font-bold text-sm">Are you a Napedia member?</label>
          <input
            type="radio"
            name="member"
            value="Yes"
            onChange={handlegender}
          />
          Yes
          <input
            type="radio"
            name="member"
            value="No"
            onChange={handlegender}
          />
          No
        </div>
        <div className="username mb-4 w-full flex gap-3">
          <label className="font-bold text-sm">
            What product do you prefer?
          </label>
          <input
            type="radio"
            name="member"
            value="medication"
            onChange={handlegender}
          />
          Medication
          <input
            type="radio"
            name="member"
            value="phamacy"
            onChange={handlegender}
          />
          Pharmacy
        </div>
        <div className="username mb-4 w-full flex gap-3">
          <textarea
            placeholder="write down what you want"
            className="text-xs p-5 border-2 rounded-lg bg-teal-500 placeholder-black w-[50%]"
          ></textarea>
        </div>
        <div className="w-full flex justify-start">
          <button className="text-left bg-yellow-400 py-2 px-5 text-sm font-medium rounded-sm">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
