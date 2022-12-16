import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<
    React.SetStateAction<Props['people']>
  >;
}

function Form({people, setPeople}: IProps) {
  const [inputData, setInputData] = useState({name: "", age: 0, bio: ""});

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputData({...inputData, [e.target.name] : e.target.value});
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPeople([...people, inputData])
  }
  return (
    <div className="form-container w-80 h-96 mr-9 p-5 border-2 border-solid flex-col mx-auto">
      <h1 className="my-4 text-center font-bold font-si text-xs lg:text-blue-500 lg:text-lg">
        Form
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="border-2 border-solid mb-4 mx-auto w-full p-2 rounded-md focus:outline-blue-500"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Age"
          className="border-2 border-solid mb-4 mx-auto w-full p-2 rounded-md focus:outline-blue-500"
          onChange={(e) => handleChange(e)}
        />
        <textarea
          name="bio"
          id="bio"
          placeholder="Bio Description"
          className="border-2 border-solid mx-auto w-full resize-none p-2 rounded-md focus:outline-blue-500"
          onChange={(e) => handleChange(e)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block items-center justify-between mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
