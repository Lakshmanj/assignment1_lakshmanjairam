import React, { useState, useEffect } from 'react';
import { getStudents, getCourses } from './api';
import AddStudent from './components/AddStudent';
import AddCourse from './components/AddCourse';
import StudentList from './components/StudentList';
import CourseList from './components/CourseList';

function App() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getStudents();
        setStudents(response);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();

    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        setCourses(response);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const handleAddStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const handleAddCourse = (newCourse) => {
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  };

  return (
    <div>
      <h2>Student and Course Management</h2>
      <AddStudent onAdd={handleAddStudent} />
      <AddCourse onAdd={handleAddCourse} />
      <StudentList students={students} />
      <CourseList courses={courses} />
    </div>
  );
}

export default App;
