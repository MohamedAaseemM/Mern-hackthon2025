// import React from "react";
// import "./whychooseus.css";

// const WhyChooseUs = () => {
//   return (
//     <section className="why-choose-us">
//       <div className="container">
//         <h2 className="title">Why Choose Us?</h2>
//         <p className="subtitle">Discover the unique benefits of learning with us</p>
//         <div className="features-grid">
//           <div className="feature-item">
//             <h3>Comprehensive Curriculum</h3>
//             <p>Structured courses covering the latest industry trends and technologies.</p>
//           </div>
//           <div className="feature-item">
//             <h3>Personalized Learning</h3>
//             <p>Adaptive learning paths designed to suit individual learning styles.</p>
//           </div>
//           <div className="feature-item">
//             <h3>Hands-on Projects</h3>
//             <p>Gain practical experience with real-world projects and case studies.</p>
//           </div>
//           <div className="feature-item">
//             <h3>24/7 Support</h3>
//             <p>Get assistance anytime with our dedicated support team and mentors.</p>
//           </div>
//           <div className="feature-item">
//             <h3>Affordable Pricing</h3>
//             <p>Quality education at an affordable price with flexible payment options.</p>
//           </div>
//           <div className="feature-item">
//             <h3>Global Community</h3>
//             <p>Join a worldwide network of learners, mentors, and industry experts.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
import React, { useEffect } from "react";
import "./whychooseus.css";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(".feature-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="why-choose-us">
      <div className="container">
        <motion.h2 
          className="title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover the unique benefits of learning with us
        </motion.p>
        <div className="features-grid">
          {["Comprehensive Curriculum", "Personalized Learning", "Hands-on Projects", "24/7 Support", "Affordable Pricing", "Global Community"].map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{feature}</h3>
              <p>
                {feature === "Comprehensive Curriculum" && "Structured courses covering the latest industry trends and technologies."}
                {feature === "Personalized Learning" && "Adaptive learning paths designed to suit individual learning styles."}
                {feature === "Hands-on Projects" && "Gain practical experience with real-world projects and case studies."}
                {feature === "24/7 Support" && "Get assistance anytime with our dedicated support team and mentors."}
                {feature === "Affordable Pricing" && "Quality education at an affordable price with flexible payment options."}
                {feature === "Global Community" && "Join a worldwide network of learners, mentors, and industry experts."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
