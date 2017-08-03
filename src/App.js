import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
// import Skills from './components/Skills';

class App extends Component {
  render() {

    const personEnglish = {
      avatar: 'https://es.gravatar.com/userimage/19167007/631baacc80a5219a3ad17eee332cbe4e.jpg?size=700',
      name: 'Santiago Mendoza',
      profession: 'Software Engineer',
      bio: 'Software Engineer at ISF de Colombia. Christian. Passionate about God, Digital Marketing and personal finances.',
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
          jobTitle: 'Software Engineer', company: 'ISF', startDate: 'Jan 2017', endDate: 'Present',
          jobDescription: `Desarrollo de Software utilizando el siguiente Stack:
          Node.js, React.js, Oracle, MongoDB, ElasticSearch, Git, Github.
          Siguiendo la metodología Scrum.`
        },
        {
          jobTitle: 'Tech Leader', company: 'Universidad Tecnológica de Bolívar', startDate: 'Jul 2015', endDate: 'Dec 2016',
          jobDescription: `Administración de Servidores Linux.
          Desarrollo e implementación de aplicaciones utilizando JavaScript, HTML5, CSS3, JavaScript, PHP, y Frameworks como Laravel, AngularJS.
          Administración y soporte de LMS Moodle.`
        },
        {
          jobTitle: 'Systems Engineering Practitioner', company: 'Intertug', startDate: 'Dec 2014', endDate: 'Jun 2015',
          jobDescription: `Diseño y desarrollo de aplicación web para Tracking.
          Desarrollo de scripts en Python para administración y mantenimiento de Raspberrys remotos.`
        },
        {
          jobTitle: 'Teacher', company: 'Interlat', startDate: 'Apr 2016', endDate: 'Nov 2016',
          jobDescription: `Docente del módulo y curso especializado
          "SEO: Posicionamiento en buscadores" del Diplomado en Marketing Digital de Interlat en convenio con la Universidad Pontificia Bolivariana.`
        },
      ],
      education: [
        {
          degree: 'Minor, Cloud Computing Infrastructure', institution: 'Universidad Tecnológica de Bolívar', startDate: '2014', endDate: '2014',
          description: `Server Administration. Virtualization. Networking.`
        },
        {
          degree: 'Systems Engineer', institution: 'Universidad Tecnológica de Bolívar', startDate: 'Feb 2011', endDate: 'Oct 2015',
          description: `Monitor de Algoritmos 2P-2014. Representante estudiantil ante el Comité Curricular de Ingeniería de Sistemas 2014 - 2015`
        },
      ],
      courses: [
        { name: 'Learn and Understand NodeJS', institution: 'Udemy', date: 'Jan 2017', description: 'Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more.' },
        { name: 'Modern React with Redux', institution: 'Udemy', date: 'Jan 2017', description: 'Master the fundamentals of React and Redux with this tutorial as you develop apps supported by NPM, Webpack, and ES6' },
        { name: 'M101JS: MongoDB for Node.js Developers', institution: 'MongoDB University', date: 'May 2017', description: 'Learn everything you need to know to get started building a MongoDB-based app.' },
        { name: 'Liderazgo Empresarial', institution: 'TAB University', date: 'Aug 2017', description: 'Know the personality type and bring the whole team through the change curve.' },
        { name: 'LFS101x.2 Introduction to Linux', institution: 'EdX', date: 'Feb 2015', description: '' },
        { name: 'Inbound Certified', institution: 'HubSpot', date: 'Mar 2017 - May 2019', description: 'Inbound Marketing Certification' },
        { name: 'Carrera de Administración de Servidores y DevOps', institution: 'Platzi', date: 'Mar 2016 - Mar 2017', description: '' },
        { name: 'Curso básico de Marketing Digital', institution: 'IAB Spain', date: 'Jul 2014', description: '' },
        { name: 'Academia de Obreros', institution: 'Iglesia Cristiana Rios De Vida', date: 'Apr 2014', description: '' },
        { name: 'Academia Avanzada', institution: 'Iglesia Cristiana Rios De Vida', date: 'Nov 2015', description: '' },
        { name: 'FrontEnd Developer', institution: 'Platzi', date: 'Jan 2015', description: '' },
        { name: 'Backend Developer', institution: 'Platzi', date: 'Jan 2016', description: '' },
        { name: 'Diplomado en Gerencia en Tecnologías en la Nube para Empresas', institution: 'Unipymes', date: 'Apr 2015', description: 'Intensidad de 30 horas' },

      ],
      // skills: [
      //   { name: 'HTML5', percentage: '95%' },
      //   { name: 'CSS', percentage: '90%' },
      //   { name: 'JavaScript', percentage: '75%' },
      //   { name: 'PHP', percentage: '50%' }
      // ]
    };


    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
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

          <div className='content-wrapper'>
            <div className='content'>
              <Experience experience={personEnglish.experience} />
              <Education education={personEnglish.education} />
              <Certificate courses={personEnglish.courses} />
              {/*<Skills skills={personEnglish.skills} />*/}
            </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
