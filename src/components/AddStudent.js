import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
function AddStudent() {
  const [name, setName] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [id, setId] = useState("");

  const [add, setAdd] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      return;
    }
    // alert("Student added successfully")
  };

  const studentCollectionRef = collection(db, "students");
  const addStudent = async () => {
    await addDoc(studentCollectionRef, {
      Name: name,
      CGPA: cgpa,
      StudentId: id,
    });
  };

  return (
    <div>
      <button
        onClick={() => setAdd(true)}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded m-2"
      >
        Add New Student
      </button>
      {add === true && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="block text-gray-700 text-sm  mb-2 p-2 border-2 border-black ml-1"
          ></input>
          <input
            type="text"
            placeholder="Enter your CGPA"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            class="block text-gray-700 text-sm  mb-2 p-2 border-2 border-black ml-1"
          ></input>
          <input
            type="text"
            placeholder="Enter your Student ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            class="block text-gray-700 text-sm  mb-2 p-2 border-2 border-black ml-1"
          ></input>
          <button
            type="submit"
            onClick={addStudent}
            className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded text-sm ml-14"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
}

export default AddStudent;
