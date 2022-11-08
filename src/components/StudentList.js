import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import UpdateStudent from "./UpdateStudent";
function StudentList() {
  const [students, setStudents] = useState([]);
  const studentCollectionRef = collection(db, "students");
  const getStudents = async () => {
    const data = await getDocs(studentCollectionRef);

    setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getStudents();
  }, []);

  useEffect(() => {}, []);

  const deleteStudent = async (id) => {
    const docRef = doc(db, "students", id);
    await deleteDoc(docRef);
  };

  return (
    <div>
      <h1 className="text-3xl text-center m-4 bg-lime-500">ABC University Graduated StudentsList</h1>

      <div className="flex">
        <table>
          <tr>
            <th className=" p-4 ">Name</th>
            <th className=" p-4 ">CGPA</th>
            <th className=" p-4 ">ID</th>
          </tr>

          {students.map((student) => {
            return (
              <tr key={student.id}>
                <td className=" p-4 "> {student.Name}</td>
                <td className=" p-4 ">{student.CGPA}</td>
                <td className=" p-4 ">{student.StudentId}</td>
                <button
                  onClick={() => deleteStudent(student.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded m-1  mt-5 text-sm"
                >
                  Delete
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-1 mt-5 text-sm">
                  Update
                </button>
              </tr>
            );
          })}
        </table>
      </div>

      <button
        onClick={() => getStudents()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2  m-2 rounded"
      >
        Refresh List
      </button>
    </div>
  );
}

export default StudentList;
