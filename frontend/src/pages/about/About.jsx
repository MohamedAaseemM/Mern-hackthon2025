// // import React from "react";
// // import "./about.css";

// // const About = () => {
// //   return (
// //     <div className="about">
// //       <div className="about-content">
// //         <h2>About Us</h2>
// //         <p>
// //           We are dedicated to providing high quality online courses to help
// //           individuals learn and grow in their desired fields. Our experienced
// //           instruction ensure that each course is tailored for effective learning
// //           and practical application.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default About;
// // import React, { useState, useEffect } from "react";
// // import "./about.css";

// // const textToType = "We are dedicated to providing high-quality online courses to help individuals learn and grow in their desired fields.Our experienced instruction ensure that each course is tailored for effective learning and practical application.Whether you're a student, professional, or educator, our platform ensures an optimized learning journey for all. Join us in shaping the future of education with technology!";

// // const About = () => {
// //   const [typedText, setTypedText] = useState("");
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     if (index < textToType.length) {
// //       const timeout = setTimeout(() => {
// //         setTypedText((prev) => prev + textToType[index]);
// //         setIndex(index + 1);
// //       }, 51);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [index]);

// //   return (
// //     <div className="about">
// //       <div className="about-content">
// //         <h2>About Us</h2>
// //         <p>{typedText}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default About;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./about.css";
// import { server } from "../../main"; // Adjust import path if needed
// import toast from "react-hot-toast";

// const textToType =
//   "We are dedicated to providing high-quality online courses to help individuals learn and grow in their desired fields. Our experienced instructors ensure that each course is tailored for effective learning and practical application. Whether you're a student, professional, or educator, our platform ensures an optimized learning journey for all. Join us in shaping the future of education with technology!";

// const About = () => {
//   const [typedText, setTypedText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [query, setQuery] = useState(""); // Query input state
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (index < textToType.length) {
//       const timeout = setTimeout(() => {
//         setTypedText((prev) => prev + textToType[index]);
//         setIndex(index + 1);
//       }, 51);
//       return () => clearTimeout(timeout);
//     }
//   }, [index]);

//   const submitQuery = async () => {
//     if (!query.trim()) {
//       toast.error("Query message cannot be empty!");
//       return;
//     }

//     setLoading(true);
//     try {
//       const { data } = await axios.post(`${server}/api/query`, { message: query }, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       toast.success(data.message);
//       setQuery(""); // Clear input after success
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to send query");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="about">
//       <div className="about-content">
//        <center><h2>About Us</h2></center> 
//         <p style="text align:center">{typedText}</p>

//         {/* 📌 Query Box */}
//         <div className="query-box">
//           <h3>Have Questions? Ask Us!</h3>
//           <textarea
//             placeholder="Enter your query here..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="query-input"
//           ></textarea>
//           <button onClick={submitQuery} disabled={loading} className="query-submit">
//             {loading ? "Sending..." : "Submit Query"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./about.css";
import { server } from "../../main"; // Adjust import path if needed
import toast from "react-hot-toast";

const textToType =
  "We are dedicated to providing high-quality online courses to help individuals learn and grow in their desired fields. Our experienced instructors ensure that each course is tailored for effective learning and practical application. Whether you're a student, professional, or educator, our platform ensures an optimized learning journey for all. Join us in shaping the future of education with technology!";

const About = () => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState(""); // Query input state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (index < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + textToType[index]);
        setIndex(index + 1);
      }, 51);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const submitQuery = async () => {
    if (!query.trim()) {
      toast.error("Query message cannot be empty!");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/query`, { message: query }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success(data.message);
      setQuery(""); // Clear input after success
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send query");
    }
    setLoading(false);
  };

  return (
    <div className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>{typedText}</p>
      </div>

      {/* 📌 Query Box at the Bottom */}
      <div className="query-box">
        <h3>Have Questions? Ask Us!</h3>
        <textarea
          placeholder="Enter your query here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="query-input"
        ></textarea>
        <button onClick={submitQuery} disabled={loading} className="query-submit">
          {loading ? "Sending..." : "Submit Query"}
        </button>
      </div>
    </div>
  );
};

export default About;
