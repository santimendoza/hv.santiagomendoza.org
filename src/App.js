import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Course from './components/Course';
// import Skills from './components/Skills';

class App extends Component {
  render() {
    const personEnglish = {
      avatar:
        'https://es.gravatar.com/userimage/19167007/631baacc80a5219a3ad17eee332cbe4e.jpg?size=700',
      name: 'Santiago Mendoza',
      profession: 'Software Engineer',
      bio:
        'Software Engineer at ISF de Colombia. Christian. Passionate about God, Digital Marketing and personal finances.',
      address: 'Cartagena, Colombia.',
      email: 'contacto@santiagomendoza.org',
      social: [
        { name: 'facebook', url: 'https://facebook.com/SantiagoMendozaOficial' },
        { name: 'twitter', url: 'https://twitter.com/sanmen1593' },
        { name: 'github', url: 'https://github.com/smendozaisf' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/santiagomendoza/' }
      ],
      experience: [
        {
          jobTitle: 'Software Engineer',
          company: 'Condor Labs',
          startDate: 'Jan 2017',
          endDate: 'Present',
          jobDescription: `Software Development using:
          Node.js, React.js, Oracle, MongoDB, ElasticSearch, Git, Github.
          Following Scrum framework`
        },
        {
          jobTitle: 'Tech Leader',
          company: 'Universidad Tecnológica de Bolívar',
          startDate: 'Jul 2015',
          endDate: 'Dec 2016',
          jobDescription: `Linux SysAdm. Web-apps development using JavaScript, HTML5, CSS3, JavaScript, PHP, and Frameworks like Laravel and AngularJS.
          LMS Moodle Support and administration.`
        },
        {
          jobTitle: 'Systems Engineering Practitioner',
          company: 'Intertug',
          startDate: 'Dec 2014',
          endDate: 'Jun 2015',
          jobDescription: `A Tracking Web-app development. Scripts development for remote Raspberries administration and maintenance.`
        },
        {
          jobTitle: 'Teacher',
          company: 'Interlat',
          startDate: 'Apr 2016',
          endDate: 'Nov 2016',
          jobDescription: `Docente del módulo y curso especializado
          "SEO: Posicionamiento en buscadores" del Diplomado en Marketing Digital de Interlat en convenio con la Universidad Pontificia Bolivariana.`
        }
      ],
      education: [
        {
          degree: 'Minor, Cloud Computing Infrastructure',
          institution: 'Universidad Tecnológica de Bolívar',
          startDate: '2014',
          endDate: '2014',
          description: `Server Administration. Virtualization. Networking.`
        },
        {
          degree: 'Systems Engineer',
          institution: 'Universidad Tecnológica de Bolívar',
          startDate: 'Feb 2011',
          endDate: 'Oct 2015',
          description: `Algorithm Monitor 2P-2014.
          Student Representative to the Curricular Committee of Systems Engineering 2014 - 2015`
        }
      ],
      courses: [
        {
          name: 'Learn and Understand NodeJS',
          institution: 'Udemy',
          date: 'Jan 2017',
          tags: 'javascript, nodejs, backend, fullstack',
          description:
            'Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more.'
        },
        {
          name: 'ES6 for Everyone',
          institution: 'WesBos',
          date: 'Aug 2017',
          tags: 'javascript, frontend, backend, fullstack',
          description: 'Modern JavaScript'
        },
        {
          name: 'Modern React with Redux',
          institution: 'Udemy',
          date: 'Jan 2017',
          tags: 'javascript, react, redux, frontend, fullstack',
          description:
            'Master the fundamentals of React and Redux with this tutorial as you develop apps supported by NPM, Webpack, and ES6'
        },
        {
          name: 'M101JS: MongoDB for Node.js Developers',
          institution: 'MongoDB University',
          date: 'May 2017',
          tags: 'mongodb, javascript, nodejs, backend, fullstack',
          description:
            'Learn everything you need to know to get started building a MongoDB-based app.'
        },
        {
          name: 'Fundamentos en la gestion de proyectos',
          institution: 'Platzi',
          date: 'Mar 2018',
          tags: 'project-management',
          description:
            'Understand how to manage successful projects following the PMI methodology'
        },
        {
          name: 'Finanzas Personales',
          institution: 'Platzi',
          date: 'Mar 2018',
          tags: 'finances',
          description:
            ''
        },
        {
          name: 'Liderazgo Empresarial',
          institution: 'TAB University',
          date: 'Aug 2017',
          tags: 'leadership',
          description:
            'Know the personality type and bring the whole team through the change curve.'
        },
        {
          name: 'Writing for the web',
          institution: 'Open2Study',
          date: 'Sep 2017',
          tags: 'blogging, digital marketing, seo',
          description:
            'Explore how writing style, web design and structure can grab the attention of and engage online readers.'
        },
        {
          name: 'LFS101x.2 Introduction to Linux',
          institution: 'EdX',
          date: 'Feb 2015',
          tags: 'linux, sysadm',
          description: ''
        },
        {
          name: 'Inbound Certified',
          institution: 'HubSpot',
          date: 'Mar 2017 - May 2019',
          tags: 'digital marketing',
          description: 'Inbound Marketing Certification'
        },
        {
          name: 'Carrera de Administración de Servidores y DevOps',
          institution: 'Platzi',
          date: 'Mar 2016 - Mar 2017',
          tags: 'sysadm, devops',
          description: ''
        },
        {
          name: 'Curso básico de Marketing Digital',
          institution: 'IAB Spain',
          date: 'Jul 2014',
          tags: 'digital marketing',
          description: ''
        },
        {
          name: 'Academia de Obreros',
          institution: 'Iglesia Cristiana Rios De Vida',
          date: 'Apr 2014',
          tags: 'christian',
          description: ''
        },
        {
          name: 'Academia Avanzada',
          institution: 'Iglesia Cristiana Rios De Vida',
          date: 'Nov 2015',
          tags: 'christian',
          description: ''
        },
        {
          name: 'FrontEnd Developer',
          institution: 'Platzi',
          date: 'Jan 2015',
          tags: 'javascript, frontend, fullstack',
          description: ''
        },
        {
          name: 'Backend Developer',
          institution: 'Platzi',
          date: 'Jan 2016',
          tags: 'backend, fullstack, php',
          description: ''
        },
        {
          name: 'Diploma in Management in Cloud Technologies for Companies',
          institution: 'Unipymes',
          date: 'Apr 2015',
          tags: 'sysadm, devops',
          description: '30 hours'
        }
      ]
      // skills: [
      //   { name: 'HTML5', percentage: '95%' },
      //   { name: 'CSS', percentage: '90%' },
      //   { name: 'JavaScript', percentage: '75%' },
      //   { name: 'PHP', percentage: '50%' }
      // ]
    };

    return (
      <header>
        <div className="wrapper">
          <div className="sidebar">
            <About
              avatar={personEnglish.avatar}
              name={personEnglish.name}
              profession={personEnglish.profession}
              bio={personEnglish.bio}
              address={personEnglish.address}
              social={personEnglish.social}
              email={personEnglish.email}
            />
          </div>

          <div className="content-wrapper">
            <div className="content">
              <Experience experience={personEnglish.experience} />
              <Education education={personEnglish.education} />
              <Course courses={personEnglish.courses} />
              {/*<Skills skills={personEnglish.skills} />*/}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
