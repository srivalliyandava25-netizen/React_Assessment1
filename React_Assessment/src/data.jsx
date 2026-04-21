import React from "react";

function Data() {
  const isAvailable = true;

  const user = {
    name: "Sameera",
    role: "Full-stack Engineer",
    bio: "Specializing in React, Node, and cloud architecture",
  };

  const jobs = [
    { id: 101, title: "DevOps Developer", company: "Microsoft", salary: "10k" },
    { id: 102, title: "Frontend Developer", company: "Google", salary: "18k" },
    { id: 103, title: "Backend Developer", company: "Wipro", salary: "20k" },
    { id: 104, title: "Fullstack Developer", company: "Amazon", salary: "25k" },
  ];

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.role}</h2>
      <p>{user.bio}</p>

      <p>Status: {isAvailable ? "Available" : "Not Available"}</p>

      <h3>Jobs:</h3>
      {jobs.map((job) => (
        <div key={job.id}>
          <h4>{job.title}</h4>
          <p>{job.company}</p>
          <p>{job.salary}</p>
        </div>
      ))}
    </div>
  );
}

export default Data;
