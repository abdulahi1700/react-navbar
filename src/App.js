import Course from "./Course";
import { courseData } from "./CourseData";
function App() {
  return (
    <div className="app">
      {courseData.map((course) => (
        <Course
          key={course.id}
          title={course.title}
          price={course.price}
          isnan={course.isnan}
        />
      ))}
    </div>
  );
}

export default App;
