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
          jobTitle: 'Teacher', company: 'Interlat', startDate: 'Apr 2016', endDate: 'Nov 2016',
          jobDescription: `Docente del módulo y curso especializado
          "SEO: Posicionamiento en buscadores" del Diplomado en Marketing Digital de Interlat en convenio con la Universidad Pontificia Bolivariana.`
        },
        {
          jobTitle: 'Systems Engineering Practitioner', company: 'Intertug', startDate: 'Dec 2014', endDate: 'Jun 2015',
          jobDescription: `Diseño y desarrollo de aplicación web para Tracking.
          Desarrollo de scripts en Python para administración y mantenimiento de Raspberrys remotos.`
        },
      ],
      education: [
        {
          degree: 'Minor, Cloud Computing Infrastructure', institution: 'Universidad Tecnológica de Bolívar', startDate: '2014', endDate: '2014',
          description: ` Monitor de Algoritmos 2P-2014. Representante estudiantil ante el Comité Curricular de Ingeniería de Sistemas 2014 - 2015`
        },
        {
          degree: 'Systems Engineer', institution: 'Universidad Tecnológica de Bolívar', startDate: 'Feb 2011', endDate: 'Oct 2015',
          description: ``
        },
      ],
      courses: [
        { name: 'FrontEnd Developer', institution: 'Platzi', date: 'Jan 2015', description: 'Aenean commodo ligula eget dolor. Aenean massa.' },
        { name: 'Backend Developer', institution: 'Platzi', date: 'Jan 2016', description: 'Aenean commodo ligula eget dolor. Aenean massa.' }
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
              social={personEnglish.social} />
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
