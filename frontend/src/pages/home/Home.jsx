// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./home.css";
// import Testimonials from "../../components/testimonials/Testimonials";

// const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div className="home">
//         <div className="home-content">
//           <h1>Welcome to our E-learning Platform</h1>
//           <p>Learn, Grow, Excel</p>
//           <button onClick={() => navigate("/courses")} className="common-btn">
//             Get Started
//           </button>
//         </div>
//       </div>
//       <Testimonials />
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./home.css";
// import Testimonials from "../../components/testimonials/Testimonials";
// import CourseFeatures from "../../components/coursefeatures/coursefeatures";
// import WhyChooseUs from "../../components/whychooseus/Whychooseus";
// import FAQSection from "../../components/FAQSection/FAQSection";
// const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <section className="home flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
//         <div className="home-content">
//           <h1 className="text-5xl font-bold mb-4">Welcome to our E-learning Platform</h1>
//           <p className="text-lg mb-6 max-w-2xl">Learn, Grow, Excel</p>
//           <button 
//             onClick={() => navigate("/courses")} 
//             className="common-btn px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
//           >
//             Get Started
//           </button>
//         </div>
//       </section>
//       <CourseFeatures />
//       <Testimonials />
//       <WhyChooseUs />
//       <FAQSection />
//     </div>
//   );
// };

// export default Home;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./home.css";
// import Testimonials from "../../components/testimonials/Testimonials";
// import CourseFeatures from "../../components/coursefeatures/coursefeatures";
// import WhyChooseUs from "../../components/whychooseus/Whychooseus";
// import FAQSection from "../../components/FAQSection/FAQSection";

// const Home = () => {
//   const navigate = useNavigate();
//   const text = "Welcome to our E-learning Platform"; 
//   const [displayedText, setDisplayedText] = useState(""); 
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev + text[index]);
//         setIndex(index + 1);
//       }, 100); // Speed of typing effect
//       return () => clearTimeout(timeout);
//     }
//   }, [index, text]);

//   return (
//     <div>
//       <section className="home flex flex-col items-center justify-center h-screen text-white text-center p-6">
//         <div className="home-content">
//           <h1 className="text-5xl font-bold mb-4 typing-text">{displayedText}</h1>
//           <p className="text-lg mb-6 max-w-2xl">Learn, Grow, Excel</p>
//           <button 
//             onClick={() => navigate("/courses")} 
//             className="common-btn"
//           >
//             Get Started
//           </button>
//         </div>
//       </section>
//       <CourseFeatures />
//       <Testimonials />
//       <WhyChooseUs />
//       <FAQSection />
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition"; // Import TextTransition
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import CourseFeatures from "../../components/coursefeatures/coursefeatures";
import WhyChooseUs from "../../components/whychooseus/Whychooseus";
import FAQSection from "../../components/FAQSection/FAQSection";

const Home = () => {
  const navigate = useNavigate();
  const text = "Welcome to our E-learning Platform"; 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 100); // Adjust speed here (100ms per letter)
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="home flex flex-col items-center justify-center h-screen text-white text-center p-6">
        <div className="home-content">
          <h1 className="animated-text">
            <TextTransition springConfig={presets.gentle}>
              {text.substring(0, index)}
            </TextTransition>
          </h1>
          <p className="text-lg mb-6 max-w-2xl">Learn, Grow, Excel</p>
          <button 
            onClick={() => navigate("/courses")} 
            className="common-btn"
          >
            Get Started
          </button>
        </div>
      </section>
      <CourseFeatures />
      <Testimonials />
      <WhyChooseUs />
      <FAQSection />
    </div>
  );
};

export default Home;
