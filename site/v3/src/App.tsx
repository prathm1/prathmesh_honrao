import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, BookOpen, Database, Cloud, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Prathmesh Honrao</h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#certifications" className="text-gray-600 hover:text-gray-900 transition-colors">Certifications</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold leading-tight">
            Building bridges between<br />
            legacy and modern systems
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Senior Consultant at Deloitte specializing in mainframe modernization, 
            data engineering, and AI. I help organizations transform their legacy 
            systems into modern, cloud-native architectures.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg italic text-gray-700">
              "I like to build bridges — between code and strategy, legacy and modern, people and systems"
            </p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="#projects" 
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2"
            >
              <Database className="w-4 h-4" />
              <span>View Modernization Projects</span>
            </a>
            <a 
              href="#experience" 
              className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Experience
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">About</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                I'm a Senior Consultant at Deloitte Germany, specializing in mainframe modernization 
                and data migration strategies. With over 9 years of experience, I've led complex 
                transformations for automotive and insurance clients across Europe and Asia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My expertise spans COBOL-to-Java modernization, DB2-to-Oracle migrations, and 
                cloud-native architecture design. I've successfully delivered projects that 
                achieved up to 80% cost reduction while maintaining system reliability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently pursuing an MBA in Operations Management from IGNOU, I combine technical 
                expertise with strategic business thinking to deliver comprehensive modernization 
                roadmaps and risk frameworks.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Core Expertise</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Database className="w-4 h-4 text-blue-600" />
                    <span>Mainframe Modernization (COBOL, DB2, VSAM)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Cloud className="w-4 h-4 text-green-600" />
                    <span>Cloud Migration (AWS, Azure, Oracle)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    <span>Data Engineering & Migration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-orange-600" />
                    <span>Strategic Consulting & Risk Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Experience</h3>
          <div className="space-y-8">
            {/* Deloitte */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold">Senior Consultant</h4>
                    <span className="text-sm text-gray-500">2021 - Present</span>
                  </div>
                  <p className="text-gray-600 mb-3">Deloitte • Germany (Hybrid)</p>
                  <p className="text-gray-700 mb-4">
                    Leading mainframe modernization, data migration, and cloud strategies for enterprise clients.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Automated Mainframe (DB2/VSAM) → Oracle migration (~80% cost reduction)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>COBOL → Java modernization PoCs for automotive & insurance clients</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Phased mainframe exit strategies with detailed roadmaps & RFPs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accenture Senior */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold">Senior Application Development Specialist</h4>
                    <span className="text-sm text-gray-500">2019 - 2021</span>
                  </div>
                  <p className="text-gray-600 mb-3">Accenture • Pune, Wolfsburg</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>L3 support for core mainframe applications with ITIL standards</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>DB2 performance and availability management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Onshore lead and client coordination</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accenture Analyst */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold">Application Development Analyst</h4>
                    <span className="text-sm text-gray-500">2015 - 2019</span>
                  </div>
                  <p className="text-gray-600 mb-3">Accenture • Pune, Hyderabad</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Developed COBOL–DB2 applications for US insurance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Managed testing and production releases with minimal downtime</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-12">
            <h4 className="text-2xl font-bold mb-6">Education</h4>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-lg font-semibold">Master of Business Administration (Operations Management)</h5>
                  <span className="text-sm text-gray-500">2023 - 2025</span>
                </div>
                <p className="text-gray-600 mb-3">Indira Gandhi National Open University (IGNOU), New Delhi</p>
                <p className="text-gray-700">
                  Specialized in Operations Management, Strategic Management & Project Management. 
                  University Recognition: ANABIN H+ (German-equivalent Masters degree).
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-lg font-semibold">Bachelor of Engineering (E&TC)</h5>
                  <span className="text-sm text-gray-500">2011 - 2015</span>
                </div>
                <p className="text-gray-600 mb-3">Savitribai Phule Pune University, Pune</p>
                <p className="text-gray-700">
                  Major coursework in Digital Signal Processing, Embedded Systems, and VLSI Design. 
                  Led autonomous hovercraft project for IIT Bombay Techfest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <Database className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-lg">Global Modernization Strategy</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Developed unified modernization strategy across 9 global insurance entities, 
                creating standardized frameworks and tooling recommendations.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">2024-2025</span>
                <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <Cloud className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-lg">DB2 to Oracle Migration</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Led end-to-end data migration from mainframe DB2 to Oracle for major Dutch insurer, 
                handling 2500+ GB across 170 applications.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">2021-2023</span>
                <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-lg">Mainframe POC Germany</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Led COBOL-to-Java transformation POC for automotive manufacturer, focusing on 
                stored procedure migration and Docker-based testing.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">2025</span>
                <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <Award className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-lg">DB2 Support & Optimization</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Led mainframe L3 support and DB2 optimization for German automotive giant's 
                after-sales systems from Wolfsburg HQ.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">2017-2021</span>
                <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Cloud className="w-5 h-5 text-orange-500" />
                <h4 className="font-semibold">AWS Solutions Architect</h4>
              </div>
              <p className="text-sm text-gray-600">Amazon Web Services</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Cloud className="w-5 h-5 text-blue-500" />
                <h4 className="font-semibold">Azure Fundamentals</h4>
              </div>
              <p className="text-sm text-gray-600">Microsoft</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold">ITIL Foundations</h4>
              </div>
              <p className="text-sm text-gray-600">PeopleCert</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold">Goethe-Zertifikat B1</h4>
              </div>
              <p className="text-sm text-gray-600">Goethe-Institut e.V.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Database className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold">IBM Cloud Developer</h4>
              </div>
              <p className="text-sm text-gray-600">IBM</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold">Agile Professional</h4>
              </div>
              <p className="text-sm text-gray-600">Accenture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <p className="text-xl text-gray-600 mb-8">
            Interested in mainframe modernization, data migration, or strategic consulting?
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/honraoprathmesh/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/prathm1" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:contact@prathmesh.dev" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600">
          <p>&copy; 2024 Prathmesh Honrao. All rights reserved.</p>
          <p className="text-sm mt-2">Design inspired by <a href="https://karpathy.ai" className="text-blue-600 hover:text-blue-800">karpathy.ai</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;