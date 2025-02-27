// import React from "react";
// import "./courses.css";
// import { CourseData } from "../../context/CourseContext";
// import CourseCard from "../../components/coursecard/CourseCard";

// const Courses = () => {
//   const { courses } = CourseData();

//   console.log(courses);
//   return (
//     <div className="courses">
//       <h2>Available Courses</h2>

//       <div className="course-container">
//         {courses && courses.length > 0 ? (
//           courses.map((e) => <CourseCard key={e._id} course={e} />)
//         ) : (
//           <p>No Courses Yet!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Courses;
// import React, { useState } from "react";
// import "./courses.css";
// import { CourseData } from "../../context/CourseContext";
// import CourseCard from "../../components/coursecard/CourseCard";

// const Courses = () => {
//   const { courses } = CourseData();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");

//   const filteredCourses = courses.filter((course) => {
//     return (
//       course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (minPrice === "" || course.price >= Number(minPrice)) &&
//       (maxPrice === "" || course.price <= Number(maxPrice))
//     );
//   });

//   return (
//     <div className="courses">
//       <h2>Available Courses</h2>

//       {/* Search & Filter Section */}
//       <div className="filter-box">
//         <input
//           type="text"
//           placeholder="Search Course"
//           className="search-bar"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Min Price"
//           className="price-input"
//           value={minPrice}
//           onChange={(e) => setMinPrice(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Max Price"
//           className="price-input"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(e.target.value)}
//         />
//       </div>

//       {/* Course Display Section */}
//       <div className="course-container">
//         {filteredCourses.length > 0 ? (
//           filteredCourses.map((e) => <CourseCard key={e._id} course={e} />)
//         ) : (
//           <p>No Courses Found!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Courses;

import React, { useState } from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const levels = ["Easy", "Medium", "Hard"]; // Difficulty Levels

const Courses = () => {
  const { courses } = CourseData();
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [levelSearch, setLevelSearch] = useState("");

  const filteredCourses = courses.filter((course) => {
    const courseLevel = course.level ? course.level.toLowerCase() : "";
    const searchLevel = levelSearch.toLowerCase();

    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (minPrice === "" || course.price >= Number(minPrice)) &&
      (maxPrice === "" || course.price <= Number(maxPrice)) &&
      (levelFilter === "" || course.level === levelFilter) &&
      (levelSearch === "" || courseLevel.includes(searchLevel))
    );
  });

  return (
    <div className="courses">
      <center><h2>Available Courses</h2></center>

      {/* 🔹 Left (Filters) | Right (Courses) */}
      <div className="courses-container">
        
        {/* 🔍 Left-Side Search & Filters */}
        <div className="filter-box">
          <input
            type="text"
            placeholder="Search Course"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="number"
            placeholder="Min Price"
            className="price-input"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="price-input"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          {/* 📌 Level Filter Dropdown */}
          <select className="level-filter" value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
            <option value="">All Levels</option>
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>{lvl}</option>
            ))}
          </select>

        
          
        </div>

        {/* 📚 Right-Side Course Display */}
        <div className="course-container">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((e) => <CourseCard key={e._id} course={e} />)
          ) : (
            <p>No Courses Found!</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Courses;
