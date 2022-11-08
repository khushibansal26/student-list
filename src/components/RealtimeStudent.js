import React, { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase-config";
function RealtimeStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const studentCollectionRef = collection(db, "students");
    const unsubscribe = onSnapshot(studentCollectionRef, (snapshot) => {
      setStudents(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center m-4 bg-lime-300">StudentsList</h1>

      <div className="flex">
        <table>
          <tr>
            <th className="pr-5">Name</th>
            <th>CGPA</th>
            <th>ID</th>
          </tr>

          {students.map((student) => {
            return (
              <tr key={student.id}>
                <td> {student.Name}</td>
                <td>{student.CGPA}</td>
                <td>{student.StudentId}</td>
                <button
                  onClick={() => deleteStudent(student.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded m-1 text-sm"
                >
                  Delete
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-1 text-sm">
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

export default RealtimeStudent;
