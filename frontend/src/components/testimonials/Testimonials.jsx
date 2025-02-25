// import React from "react";
// import "./testimonials.css";

// const Testimonials = () => {
//   const testimonialsData = [
//     {
//       id: 1,
//       name: "John Doe",
//       position: "Student",
//       message:
//         "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
//       image:
//         "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       position: "Student",
//       message:
//         "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
//       image:
//         "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     },
//     {
//       id: 3,
//       name: "John Doe",
//       position: "Student",
//       message:
//         "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
//       image:
//         "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
//     },
//     {
//       id: 4,
//       name: "Jane Smith",
//       position: "Student",
//       message:
//         "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
//       image:
//         "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     },
//   ];
//   return (
//     <section className="testimonials">
//       <h2>What our students say</h2>
//       <div className="testmonials-cards">
//         {testimonialsData.map((e) => (
//           <div className="testimonial-card" key={e.id}>
//             <div className="student-image">
//               <img src={e.image} alt="" />
//             </div>
//             <p className="message">{e.message}</p>
//             <div className="info">
//               <p className="name">{e.name}</p>
//               <p className="position">{e.position}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

// import React, { useState, useEffect } from "react";
// import "./testimonials.css";

// const Testimonials = () => {
//   const testimonialsData = [
//     {
//       id: 1,
//       name: "John Doe",
//       position: "Student",
//       message:
//         "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
//       image:
//         "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       position: "Student",
//       message:
//         "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
//       image:
//         "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     }
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="testimonials">
//       <h2>What our students say</h2>
//       <div className="testimonial-card">
//         <div className="student-image">
//           <img src={testimonialsData[index].image} alt="" />
//         </div>
//         <p className="message">{testimonialsData[index].message}</p>
//         <div className="info">
//           <p className="name">{testimonialsData[index].name}</p>
//           <p className="position">{testimonialsData[index].position}</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React, { useState, useEffect } from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Pranaav L",
      position: "Student",
      message:
        " Backend Developer Set up REST API for user authentication.Managed JWT authentication & security.Connected MongoDB database for user storage.Handled password reset logic in the backend.",
      image:
      "https://media-hosting.imagekit.io//ddb054c42f1d4ded/WhatsApp%20Image%202025-02-25%20at%2012.14.49_ddc30e8d.jpg?Expires=1835073960&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qSGgyHNb~rDooK7YpWkdeAZa5NQuEkb~jLp9ZyzCL9X7fNxiycRPkwONVlCZEYS0~MK9RRPAh6j4jhFJSFnysnb9l0Zs3T24rQNloLxfZDZ36PpHJZzfvKseygQEvCOqH2FRK6Mt1CiH6xiGYMjTjtAWmi4vU~kR~~waHitc6xgwSJYBforQdnSZ~XBaalX8CxFhtICnRoGE-iJa~CuqZ6GuhXmYh9RepJlsbH3tCaStv~tfuFyXcjAC0bV54G~5KBMFL6HrTA8atQS5SXw2g1WTol4l0S6YKXs4FFnT~X~HW12oO24aeiGxMis8yEkN9wk1BXc9YJDSX~jNwB1FhQ__"
    },
    {
      id: 2,
      name: "Partheev",
      position: "Student",
      message:
        " Frontend Developer Developed user authentication pages.Implemented UI animations and styling .Used React Router for navigation between pages.Integrated Axios for API calls to the backend.",
      image:
      "https://media-hosting.imagekit.io//1cbd05526ddb4fb4/WhatsApp%20Image%202025-02-25%20at%2012.11.40_9d8b368b.jpg?Expires=1835074114&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=se5Ih-7C5Fi0VddmHg4nSgnOZmctJIK8e0bkQa8c-ytLT8or0JB3XXgGHw-Clb~do8B5R04rMxkr4DGX8yBwJEnpqFG9Yl-X0-ghlIVotNMCs-pgJrCvxokP0VAxcg0JrENzAFavbjP7qYCQZ43upTZ1hjyIJHMo2~mqYSkYnlxatCSGG~KEXCNw0hCLHMHjKVakZoycd2LgT12aLpAC1aCdy8z7aWXgTxhwxwnlWbpUb3zEWfVNqEdaiS1IwKHMzp8LgSl7X9MdEgD7FZp8utH4cZ2XvwLgyBQypBUa93b~WIicMjQEeyx2mqsGlA2qh2qQ4VCCe0R9tKJHKvn5GA__",
    },
    {
      id: 3,
      name: "Praveen Kumar Mohan",
      position: "Student",
      message:
        "Designed responsive UI components.Added smooth animations.Improved user experience with accessibility & styling.",
      image:
        "https://media-hosting.imagekit.io//4c64fb7a8c8045ee/WhatsApp%20Image%202025-02-25%20at%2012.14.49_344ec46b.jpg?Expires=1835074045&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NDaEzfjKfYqlr7wBBUYaejZdCPvXAKAA8ya3q7K2VaKpW~O0Di1xtUrog~hVlX2O2TiG9cFZATIRY3Ir0N8mwgOQnKJMGBJepo1rnIvDHeHCxpWhG3VBYbjpVZaYflJCgFj6I5BdKPJ27tB~GZIOLdYjhXk78MeFo3m5P~mmSzehBgz4xOd0Na-bZ5ema4WXmj4skmfFR1xJOsNmFwWQFgV0lWyN~MtJQ3AdrA6e5UgUrmUYqY3~m75BqQAtWeemeOBoWiwZMgSOF7RYrdw2OyVdQFncNGpyJkmzNO~BWLN8fM~BAeBH9c2qhUHX3WUCfIKdcfm77SNkvGS~OQNJXA__",
    },
    {
      id: 4,
      name: "Mohmed Aaseem",
      position: "Student",
      message:
        "Configured .env variables and handled server-side errors.Fixed dependency issues.Deployed the project on Netlify/Vercel.Tested and debugged API calls using Postman & console logs",
      image:
      "https://media-hosting.imagekit.io//ae516b182b174764/WhatsApp%20Image%202025-02-25%20at%2012.14.48_5d6f50c6.jpg?Expires=1835074085&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0LcNAO6Qh~oBhEXdaGz7YIcNPwqTEmsXAysK0ANm5KM6-V6fg2fhoh1qaiWmXmiYGQguVCex~c-EwTMktlfBYkxnVuwPdvxXSaJXWZbu2qfnsbQ6HFaVqUkA7bboYgI9d1oh7xVb9LiVKr~rwMcbp2ATw1KLAEP4bjdKkIEmhlbD7RQoND~EqjYCJT7cCLq8RRsrSUgaag0wgdkiuUbVn8UpZ1sBPnN3NFBhTLH8k2ItmpLLj8oWvQ0L2ElZIL~uRjna-X52fheW-KmHS0lXLTT-bMJBdfpRRy4T3TQUT~oRzCFs618A-qgYukgHY1Uaiy1zFmsQ0JiYvazaKl2SxQ__",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h1>FOUNDERS</h1>
      <div className="testimonial-slide">
        <div className="testimonial-card">
          <div className="student-image">
            <img src={testimonialsData[currentIndex].image} alt="" />
          </div>
          <p className="message">{testimonialsData[currentIndex].message}</p>
          <div className="info">
            <p className="name">{testimonialsData[currentIndex].name}</p>
            <p className="position">{testimonialsData[currentIndex].position}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
