import React from "react";
import "./Home.css";

const courses = [
  {
    duration: "1 Month",
    title: "Python training",
    description:
      "Launch your data science or web development career with Python, the versatile programming language.",
    location: ["Hyderabad", "Vijayawada"],
  },
  {
    duration: "6 Months",
    title: "Data science training",
    description:
      "Advance your analytics career by gaining data science skills to extract strategic insights.",
    location: ["Hyderabad", "Vijayawada"],
  },
  {
    duration: "100 Days",
    title: "Full-stack Python course",
    description:
      "Become a full-stack Python developer and kickstart your web and app development career.",
    location: ["Hyderabad", "Vijayawada"],
  },
  {
    duration: "1 Month",
    title: "Java training",
    description:
      "Strengthen your backend development career by mastering object-oriented Java.",
    location: ["Hyderabad", "Vijayawada"],
  },
  {
    duration: "6 Months",
    title: "Machine Learning training",
    description:
      "Advance your career in AI by mastering machine learning models and algorithms.",
    location: ["Hyderabad", "Vijayawada"],
  },
  {
    duration: "100 Days",
    title: "Full-stack Java course",
    description:
      "Launch your career as a full-stack developer by gaining in-demand Java skills spanning front and backend.",
    location: ["Hyderabad", "Vijayawada"],
  },
];

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome to CodeGnan</h1>

        <p>
          CodeGnan is a leading IT training institute focused on building strong
          programming and technical skills for students and professionals.
        </p>

        <p>
          We provide industry-oriented courses in Web Development, Python, Java,
          Data Science, and Full Stack Development with expert trainers.
        </p>

        <p>
          Our goal is to help students gain practical knowledge, hands-on
          experience, and placement-ready skills.
        </p>

        <hr />
        <h2>Our Courses</h2>
      
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <span>Duration: {course.duration}</span>
              <h4>{course.title}</h4>
              <p>{course.description}</p>
              <p>
                <strong>Available in: </strong>
                {course.location.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
