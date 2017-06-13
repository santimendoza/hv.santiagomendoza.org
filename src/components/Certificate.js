import React from 'react';

const Course = (props) => {
  const myCourses = (
    <div>
      {props.courses.map((cert) =>
        <div className='item' key={cert.name}>
          <h3>{cert.name} @ {cert.institution} <span>{cert.date}</span></h3>
          <p>{cert.description}</p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-trophy'></i>
      <h2>Courses</h2>
      {myCourses}
    </div>
  )
};

export default Course;
