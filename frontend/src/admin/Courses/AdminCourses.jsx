// import React, { useState } from "react";
// import Layout from "../Utils/Layout";
// import { useNavigate } from "react-router-dom";
// import { CourseData } from "../../context/CourseContext";
// import CourseCard from "../../components/coursecard/CourseCard";
// import "./admincourses.css";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { server } from "../../main";

// const categories = [
//   "Web Development",
//   "App Development",
//   "Game Development",
//   "Data Science",
//   "Artificial Intelligence",
// ];

// const AdminCourses = ({ user }) => {
//   const navigate = useNavigate();

//   if (user && user.role !== "admin") return navigate("/");

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [createdBy, setCreatedBy] = useState("");
//   const [duration, setDuration] = useState("");
//   const [image, setImage] = useState("");
//   const [imagePrev, setImagePrev] = useState("");
//   const [btnLoading, setBtnLoading] = useState(false);

//   const changeImageHandler = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.readAsDataURL(file);

//     reader.onloadend = () => {
//       setImagePrev(reader.result);
//       setImage(file);
//     };
//   };

//   const { courses, fetchCourses } = CourseData();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setBtnLoading(true);

//     const myForm = new FormData();

//     myForm.append("title", title);
//     myForm.append("description", description);
//     myForm.append("category", category);
//     myForm.append("price", price);
//     myForm.append("createdBy", createdBy);
//     myForm.append("duration", duration);
//     myForm.append("file", image);

//     try {
//       const { data } = await axios.post(`${server}/api/course/new`, myForm, {
//         headers: {
//           token: localStorage.getItem("token"),
//         },
//       });

//       toast.success(data.message);
//       setBtnLoading(false);
//       await fetchCourses();
//       setImage("");
//       setTitle("");
//       setDescription("");
//       setDuration("");
//       setImagePrev("");
//       setCreatedBy("");
//       setPrice("");
//       setCategory("");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <Layout>
//       <div className="admin-courses">
//         <div className="left">
//           <h1>Al Courses</h1>
//           <div className="dashboard-content">
//             {courses && courses.length > 0 ? (
//               courses.map((e) => {
//                 return <CourseCard key={e._id} course={e} />;
//               })
//             ) : (
//               <p>No Courses Yet</p>
//             )}
//           </div>
//         </div>

//         <div className="right">
//           <div className="add-course">
//             <div className="course-form">
//               <h2>Add Course</h2>
//               <form onSubmit={submitHandler}>
//                 <label htmlFor="text">Title</label>
//                 <input
//                   type="text"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   required
//                 />

//                 <label htmlFor="text">Description</label>
//                 <input
//                   type="text"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   required
//                 />

//                 <label htmlFor="text">Price</label>
//                 <input
//                   type="number"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   required
//                 />

//                 <label htmlFor="text">createdBy</label>
//                 <input
//                   type="text"
//                   value={createdBy}
//                   onChange={(e) => setCreatedBy(e.target.value)}
//                   required
//                 />

//                 <select
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                 >
//                   <option value={""}>Select Category</option>
//                   {categories.map((e) => (
//                     <option value={e} key={e}>
//                       {e}
//                     </option>
//                   ))}
//                 </select>

//                 <label htmlFor="text">Duration</label>
//                 <input
//                   type="number"
//                   value={duration}
//                   onChange={(e) => setDuration(e.target.value)}
//                   required
//                 />

//                 <input type="file" required onChange={changeImageHandler} />
//                 {imagePrev && <img src={imagePrev} alt="" width={300} />}

//                 <button
//                   type="submit"
//                   disabled={btnLoading}
//                   className="common-btn"
//                 >
//                   {btnLoading ? "Please Wait..." : "Add"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminCourses;
// import React, { useState } from "react";
// import Layout from "../Utils/Layout";
// import { useNavigate } from "react-router-dom";
// import { CourseData } from "../../context/CourseContext";
// import CourseCard from "../../components/coursecard/CourseCard";
// import "./admincourses.css";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { server } from "../../main";

// const categories = [
//   "Web Development",
//   "App Development",
//   "Game Development",
//   "Data Science",
//   "Artificial Intelligence",
// ];

// const AdminCourses = ({ user }) => {
//   const navigate = useNavigate();

//   if (user && user.role !== "admin") return navigate("/");

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [createdBy, setCreatedBy] = useState("");
//   const [duration, setDuration] = useState("");
//   const [image, setImage] = useState("");
//   const [imagePrev, setImagePrev] = useState("");
//   const [btnLoading, setBtnLoading] = useState(false);
//   const [showForm, setShowForm] = useState(false); // Toggle Form

//   const changeImageHandler = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.readAsDataURL(file);

//     reader.onloadend = () => {
//       setImagePrev(reader.result);
//       setImage(file);
//     };
//   };

//   const { courses, fetchCourses } = CourseData();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setBtnLoading(true);

//     const myForm = new FormData();
//     myForm.append("title", title);
//     myForm.append("description", description);
//     myForm.append("category", category);
//     myForm.append("price", price);
//     myForm.append("createdBy", createdBy);
//     myForm.append("duration", duration);
//     myForm.append("file", image);

//     try {
//       const { data } = await axios.post(`${server}/api/course/new`, myForm, {
//         headers: {
//           token: localStorage.getItem("token"),
//         },
//       });

//       toast.success(data.message);
//       setBtnLoading(false);
//       await fetchCourses();
//       setTitle("");
//       setDescription("");
//       setCategory("");
//       setPrice("");
//       setCreatedBy("");
//       setDuration("");
//       setImage("");
//       setImagePrev("");
//       setShowForm(false); // Hide form after submission
//     } catch (error) {
//       toast.error(error.response.data.message);
//       setBtnLoading(false);
//     }
//   };

//   return (
//     <Layout>
//       <div className="admin-courses">
//         <div className="left">
//           <h1>All Courses</h1>
//           <div className="dashboard-content">
//             {courses && courses.length > 0 ? (
//               courses.map((e) => <CourseCard key={e._id} course={e} />)
//             ) : (
//               <p>No Courses Yet</p>
//             )}
//           </div>
//         </div>

//         {/* Floating Add Button */}
//         <button className="add-course-btn" onClick={() => setShowForm(!showForm)}>+</button>

//         {/* Course Form (Appears on "+" click) */}
//         {showForm && (
//           <div className="add-course-form">
//             <h2>Add Course</h2>
//             <form onSubmit={submitHandler}>
//               <label htmlFor="text">Title</label>
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//               />

//               <label htmlFor="text">Description</label>
//               <input
//                 type="text"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//               />

//               <label htmlFor="text">Price</label>
//               <input
//                 type="number"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 required
//               />

//               <label htmlFor="text">Created By</label>
//               <input
//                 type="text"
//                 value={createdBy}
//                 onChange={(e) => setCreatedBy(e.target.value)}
//                 required
//               />

//               <label htmlFor="category">Category</label>
//               <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                 <option value="">Select Category</option>
//                 {categories.map((e) => (
//                   <option value={e} key={e}>{e}</option>
//                 ))}
//               </select>

//               <label htmlFor="text">Duration</label>
//               <input
//                 type="number"
//                 value={duration}
//                 onChange={(e) => setDuration(e.target.value)}
//                 required
//               />

//               <input type="file" required onChange={changeImageHandler} />
//               {imagePrev && <img src={imagePrev} alt="" width={300} />}

//               <button type="submit" disabled={btnLoading} className="common-btn">
//                 {btnLoading ? "Please Wait..." : "Add"}
//               </button>
//               <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
//                 Cancel
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default AdminCourses;
import React, { useState } from "react";
import Layout from "../Utils/Layout";
import { useNavigate } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";
import "./admincourses.css";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";

const categories = [
  "Web Development",
  "App Development",
  "Game Development",
  "Data Science",
  "Artificial Intelligence",
];

const levels = ["Easy", "Medium", "Hard"]; // New Level Options

const AdminCourses = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState(""); // New Level State
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Toggle Form

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const { courses, fetchCourses } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("price", price);
    myForm.append("createdBy", createdBy);
    myForm.append("duration", duration);
    myForm.append("level", level); // Append Level
    myForm.append("file", image);

    try {
      const { data } = await axios.post(`${server}/api/course/new`, myForm, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      toast.success(data.message);
      setBtnLoading(false);
      await fetchCourses();
      setTitle("");
      setDescription("");
      setCategory("");
      setPrice("");
      setCreatedBy("");
      setDuration("");
      setLevel(""); // Reset Level
      setImage("");
      setImagePrev("");
      setShowForm(false); // Hide form after submission
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };

  return (
    <Layout>
      <div className="admin-courses">
        <div className="left">
          <h1>All Courses</h1>
          <div className="dashboard-content">
            {courses && courses.length > 0 ? (
              courses.map((e) => <CourseCard key={e._id} course={e} />)
            ) : (
              <p>No Courses Yet</p>
            )}
          </div>
        </div>

        {/* Floating Add Button */}
        <button className="add-course-btn" onClick={() => setShowForm(!showForm)}>+</button>

        {/* Course Form (Appears on "+" click) */}
        {showForm && (
          <div className="add-course-form">
            <h2>Add Course</h2>
            <form onSubmit={submitHandler}>
              <label htmlFor="text">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <label htmlFor="text">Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <label htmlFor="text">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />

              <label htmlFor="text">Created By</label>
              <input
                type="text"
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
                required
              />

              <label htmlFor="category">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                {categories.map((e) => (
                  <option value={e} key={e}>{e}</option>
                ))}
              </select>

              <label htmlFor="level">Level</label>
              <select value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="">Select Level</option>
                {levels.map((lvl) => (
                  <option value={lvl} key={lvl}>{lvl}</option>
                ))}
              </select>

              <label htmlFor="text">Duration</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              />

              <input type="file" required onChange={changeImageHandler} />
              {imagePrev && <img src={imagePrev} alt="" width={300} />}

              <button type="submit" disabled={btnLoading} className="common-btn">
                {btnLoading ? "Please Wait..." : "Add"}
              </button>
              <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminCourses;
