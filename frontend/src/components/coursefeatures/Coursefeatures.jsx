import React from "react";
import "./coursefeatures.css";

const CourseFeatures = () => {
  return (
    <section className="course-features">
      <div className="container">
        <h2 className="title">Key Features of Our Courses</h2>
        <p className="subtitle">Explore the benefits of learning with us</p>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Expert Instructors</h3>
            <p>Learn from industry-leading professionals with years of experience.</p>
          </div>
          <div className="feature-item">
            <h3>Interactive Learning</h3>
            <p>Engage in hands-on projects, quizzes, and live sessions.</p>
          </div>
          <div className="feature-item">
            <h3>Flexible Schedules</h3>
            <p>Access courses anytime, anywhere, and learn at your own pace.</p>
          </div>
          <div className="feature-item">
            <h3>Certification</h3>
            <p>Earn industry-recognized certificates to boost your career.</p>
          </div>
          <div className="feature-item">
            <h3>Career Guidance</h3>
            <p>Get mentorship and support to excel in your professional journey.</p>
          </div>
          <div className="feature-item">
            <h3>Community Support</h3>
            <p>Join a vibrant learning community and collaborate with peers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
