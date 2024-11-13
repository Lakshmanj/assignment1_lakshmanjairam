import React, { useEffect, useState } from 'react';
import { getStudents, getCourses } from './api';
import StudentList from './components/StudentList';
import CourseList from './components/CourseList';
import AddStudent from './components/AddStudent';
import AddCourse from './components/AddCourse';

function App() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentResponse = await getStudents();
        setStudents(studentResponse.data);
        const courseResponse = await getCourses();
        setCourses(courseResponse.data);
      } catch (error) {
        setError('Failed to fetch data');
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Student-Course Application</h1>
      {error && <p>{error}</p>}
      <StudentList students={students} />
      <CourseList courses={courses} />
      <AddStudent onAdd={(newStudent) => setStudents((prevStudents) => [...prevStudents, newStudent])} />
      <AddCourse onAdd={(newCourse) => setCourses((prevCourses) => [...prevCourses, newCourse])} />
    </div>
  );
}

export default App;
