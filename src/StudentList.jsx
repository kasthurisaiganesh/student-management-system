function StudentList({ students, deleteStudent }) {
  return (
    <table>

      <thead>
        <tr>
          <th>Roll Number</th>
          <th>Name</th>
          <th>Marks</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.roll}>
            <td>{student.roll}</td>
            <td>{student.name}</td>
            <td>{student.marks}</td>

            <td>
              <button
                onClick={() => deleteStudent(student.roll)}
              >
                Delete
              </button>
            </td>

          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default StudentList;