import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Database, Cloud, Briefcase, User, FileText, ArrowRight, Zap, Target } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects and professional experience. Built with React with dynamic interactions, smooth animations, and gradient design.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/loveokum/portfolio',
      demo: 'https://loveokumportfolio.vercel.app/',
      color: 'from-pink-500 to-rose-500',
      image: '🌐'
    },
    {
      title: 'Job Tracker Application',
      description: 'Comprehensive job application tracking tool. Organize and manage your job search process with status tracking, application history, and detailed notes for each position.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'State Management'],
      github: 'https://github.com/loveokum/Job-Tracker',
      demo: 'https://job-tracker-app.vercel.app/',
      color: 'from-rose-500 to-pink-500',
      image: '📊'
    },
    {
      title: 'School Management System',
      description: 'Full-stack educational platform enabling user registration, course creation, and learning management. Implemented with rigorous test-driven development and comprehensive test coverage.',
      tech: ['Spring Boot', 'MySQL', 'JUnit 5', 'Mockito', 'REST API'],
      github: 'https://github.com/curiouslove/ile-iwe',
      demo: 'https://school-management-system.vercel.app/',
      color: 'from-red-500 to-pink-500',
      image: '🎓'
    },
    {
      title: 'ShopOnline eCommerce Store',
      description: 'Full-featured eCommerce platform built with Spring Boot and Spring MVC. Features product management, shopping cart functionality, and secure transaction processing.',
      tech: ['Spring Boot', 'Thymeleaf', 'MySQL', 'AssertJ', 'Maven'],
      github: 'https://github.com/curiouslove/shopOnline',
      demo: 'https://shoponline-ecommerce.vercel.app/',
      color: 'from-pink-600 to-red-500',
      image: '🛍️'
    }
  ];

  const skills = [
    {
      category: 'Languages',
      items: ['Java', 'Python', 'JavaScript', 'TypeScript'],
      icon: Code2,
      color: 'from-pink-500 to-rose-500'
    },
    {
      category: 'Frontend',
      items: ['React', 'HTML/CSS', 'Bootstrap', 'Tailwind CSS'],
      icon: Code2,
      color: 'from-rose-500 to-red-500'
    },
    {
      category: 'Backend',
      items: ['Spring Boot', 'Django', 'Flask', 'FastAPI', 'Node.js'],
      icon: Code2,
      color: 'from-red-500 to-pink-500'
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'Hibernate ORM', 'Django ORM'],
      icon: Database,
      color: 'from-pink-500 to-fuchsia-500'
    },
    {
      category: 'DevOps & Cloud',
      items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'CI/CD'],
      icon: Cloud,
      color: 'from-fuchsia-500 to-purple-500'
    },
    {
      category: 'Tools & Testing',
      items: ['Git', 'Jira', 'Jest', 'PyTest', 'TDD', 'Postman'],
      icon: Briefcase,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const experience = [
    {
      role: 'Software Engineer',
      company: 'EGYM',
      location: 'Munich, Germany',
      period: 'Nov 2022 – Feb 2024',
      highlights: [
        'Drove full development lifecycle of customer-facing features using React with responsive design',
        'Architected and implemented scalable microservices using Docker and Kubernetes on Google Cloud Platform',
        'Implemented automated testing strategies achieving 85% code coverage',
        'Collaborated with product managers to define technical requirements and improve user experience'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Semicolon Africa',
      location: 'Lagos, Nigeria',
      period: 'May 2022 – Oct 2022',
      highlights: [
        'Enhanced data security by implementing OAuth 2.0 and JWT authentication, reducing incidents by 40%',
        'Developed and maintained RESTful APIs using Spring Boot with optimized database queries',
        'Improved API response times by 60% through caching solutions implementation',
        'Founded and grew Open Source community to 50+ active contributors'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'I-Respond',
      location: 'Lagos, Nigeria',
      period: 'Jan 2022 – May 2022',
      highlights: [
        'Developed scalable backend services using Java and Spring Boot, handling 5000+ concurrent users',
        'Implemented Agile methodologies leading to 30% faster project delivery times',
        'Created comprehensive API documentation using Swagger improving developer onboarding',
        'Integrated third-party payment systems with secure transaction processing'
      ]
    },
    {
      role: 'Software Engineer (Intern)',
      company: 'Civily',
      location: 'Lagos, Nigeria',
      period: 'Sep 2021 – Feb 2022',
      highlights: [
        'Developed web applications using Scrum Agile methodologies',
        'Conducted rigorous testing and validation ensuring government regulation compliance',
        'Implemented features with emphasis on testable and maintainable code'
      ]
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 text-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-200 to-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-pink-100 to-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Love Okum
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 font-bold text-sm ${activeSection === item ? 'text-pink-600 border-b-2 border-pink-600' : 'text-slate-600 hover:text-pink-600'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 bg-white rounded-lg shadow-lg">
              {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize px-4 py-2 hover:bg-pink-50 rounded transition-colors font-semibold text-slate-700"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-rose-500 p-1 shadow-2xl shadow-pink-300/60 hover:shadow-pink-400/80 transition-all duration-300 transform hover:scale-105">
              <img 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwwUAxUXEyMaHh0fIh0aHx4jJC0nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQICAgMDAwYDAwYMCAcIDAwYDAwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDL/wAARCACoAKgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlbaWmJmaoqOkpaanqKmqsrO0tba2uLm6wsPExcbHyMnK0tPU1dbW2Nna4uPk5ebn6Onq8vP09fb2+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z" 
                alt="Love Okum" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
            Hi, I'm <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Love Okum</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Junior Full-Stack Software Engineer with 3+ years of experience building scalable web applications. Specialized in Java, Python, JavaScript, React, Spring Boot, and cloud technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              View My Work <ArrowRight size={20} />
            </button>
            <a href="https://loveokumportfolio.vercel.app/" className="px-8 py-4 border-2 border-pink-600 text-pink-600 font-bold rounded-lg hover:bg-pink-50 transition-all duration-300">
              Download CV
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com/curiouslove" className="text-slate-600 hover:text-pink-600 transition-colors transform hover:scale-110 duration-300" title="GitHub - curiouslove">
              <Github size={36} />
            </a>
            <a href="https://github.com/loveokum" className="text-slate-600 hover:text-pink-600 transition-colors transform hover:scale-110 duration-300" title="GitHub - loveokum">
              <Github size={36} />
            </a>
            <a href="https://linkedin.com/in/love-okum-bb7084152" className="text-slate-600 hover:text-pink-600 transition-colors transform hover:scale-110 duration-300" title="LinkedIn">
              <Linkedin size={36} />
            </a>
            <a href="mailto:Loveokum427@gmail.com" className="text-slate-600 hover:text-pink-600 transition-colors transform hover:scale-110 duration-300" title="Email">
              <Mail size={36} />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-pink-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">
            About <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
                I'm a highly motivated and results-oriented Software Engineer with 3+ years of proven experience in full-stack development. My expertise spans Java, Python, JavaScript, and TypeScript, with deep knowledge of modern frameworks like Spring Boot, React, Django, and Flask.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
                Based in Munich, Germany, I specialize in designing, developing, and deploying scalable web applications with strong emphasis on clean code, testing, and performance optimization. I'm adept at implementing robust security measures and collaborating effectively within Agile/Scrum environments.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Java', 'Python', 'JavaScript', 'React', 'Spring Boot', 'Docker', 'Kubernetes', 'AWS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full text-sm border border-pink-300 font-semibold hover:shadow-md transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg p-6 hover:shadow-lg transition-all border border-pink-200 transform hover:scale-105">
                <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
                <p className="text-slate-700 font-semibold">Projects Completed</p>
              </div>
              <div className="bg-gradient-to-br from-rose-100 to-red-100 rounded-lg p-6 hover:shadow-lg transition-all border border-rose-200 transform hover:scale-105">
                <div className="text-4xl font-bold text-rose-600 mb-2">3+</div>
                <p className="text-slate-700 font-semibold">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-fuchsia-100 rounded-lg p-6 hover:shadow-lg transition-all border border-pink-200 transform hover:scale-105">
                <div className="text-4xl font-bold text-pink-600 mb-2">15+</div>
                <p className="text-slate-700 font-semibold">Technologies</p>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-100 to-pink-100 rounded-lg p-6 hover:shadow-lg transition-all border border-fuchsia-200 transform hover:scale-105">
                <div className="text-4xl font-bold text-fuchsia-600 mb-2">85%</div>
                <p className="text-slate-700 font-semibold">Code Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-pink-100 to-rose-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Technical</span> Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-pink-200 hover:border-pink-400 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skillGroup.color}`}>
                    <skillGroup.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 rounded-full text-sm border border-pink-200 hover:border-pink-400 transition-all font-semibold">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">
            Featured <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-pink-200 hover:border-pink-400 transform hover:-translate-y-2">
                <div className={`h-48 bg-gradient-to-r ${project.color} opacity-95 group-hover:opacity-100 transition-opacity relative overflow-hidden flex items-center justify-center`}>
                  <div className="text-8xl animate-bounce">{project.image}</div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full text-xs border border-pink-300 font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-pink-600 hover:text-white bg-pink-50 hover:bg-pink-600 font-bold rounded-lg py-2 transition-all duration-300 border border-pink-300 hover:border-pink-600"
                    >
                      <Github size={18} /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:shadow-lg font-bold rounded-lg py-2 transition-all duration-300"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-rose-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">
            Professional <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-pink-200 hover:border-pink-400 transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-pink-600">{exp.role}</h3>
                    <p className="text-slate-700 text-lg font-bold">{exp.company} • {exp.location}</p>
                  </div>
                  <p className="text-slate-500 text-sm mt-2 md:mt-0 font-bold bg-gradient-to-r from-pink-100 to-rose-100 px-4 py-2 rounded-full">{exp.period}</p>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <Zap className="text-pink-600 mt-1 flex-shrink-0" size={20} />
                      <span className="font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Let's <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Connect</span>
          </h2>

          <p className="text-slate-700 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            I'm always interested in hearing about new projects, opportunities, and collaborations. Whether you have a question or just want to say hello, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:Loveokum427@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail size={20} /> Send Email
            </a>
            <a
              href="https://github.com/curiouslove"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-pink-600 text-pink-600 font-bold rounded-lg hover:bg-pink-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Github size={20} /> GitHub (curiouslove)
            </a>
            <a
              href="https://github.com/loveokum"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-pink-600 text-pink-600 font-bold rounded-lg hover:bg-pink-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Github size={20} /> GitHub (loveokum)
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-pink-300">
            <p className="text-slate-600 font-semibold">© 2024 Love Okum. All rights reserved.</p>
            <p className="text-slate-500 text-sm mt-2">Based in Munich, Germany | +49 151 54968943</p>
          </div>
        </div>
      </section>
    </div>
  );
}