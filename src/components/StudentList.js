// client/src/components/StudentList.js
import React from 'react';
import { deleteStudent } from '../api';

function StudentList({ students, onDelete }) {
  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      onDelete(id); // Remove the student from the list
      alert('Student deleted successfully');
    } catch (error) {
      alert('Failed to delete student. Please try again.');
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students available</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <strong>{student.name}</strong> - {student.department}, Semester: {student.semester}
              <button onClick={() => handleDelete(student.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
