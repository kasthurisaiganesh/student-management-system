import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (roll) => {
    const updatedStudents = students.filter(
      (student) => student.roll !== roll
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <StudentForm addStudent={addStudent} />

      {students.length > 0 ? (
        <StudentList students={students} deleteStudent={deleteStudent} />
      ) : (
        <p>No Student Records Available</p>
      )}
    </div>
  );
}

export default App;