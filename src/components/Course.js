import React from 'react';
import querystring from 'querystring';

const Course = props => {
  const search = window.location.search;
  const params = querystring.parse(search.split('?')[1]);
  const tags = params.tags;
  const myCourses = (
    <div>
      {props.courses.map(cert => {
        return (cert.tags.includes(tags)) || tags === 'all' || !tags ? (
          <div className="item" key={cert.name}>
            <h3>
              {cert.name} @ {cert.institution} <span>{cert.date}</span>
              {cert.tags.split(',').map(tag => {
                return (
                  <span key={tag} className="label label-primary label-course">
                    {tag}
                  </span>
                );
              })}
            </h3>
            <p>{cert.description}</p>
          </div>
        ) : (
          ''
        );
      })}
    </div>
  );
  return (
    <div className="title">
      <i className="fa fa-trophy" />
      <h2>Courses</h2>
      {myCourses}
    </div>
  );
};

export default Course;
