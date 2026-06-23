import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Compass, CheckCircle, Trophy, ArrowRight, Star, Clock, ChevronRight, Check } from 'lucide-react';
import HeaderNav from '../components/HeaderNav.jsx';
import Footer from '../components/Footer.jsx';
import heroImg from '../assets/hero.png';

const featuredCourses = [
  {
    id: 1,
    title: "Enterprise React with Tailwind CSS",
    instructor: "Sarah Jenkins",
    category: "Frontend",
    rating: 4.9,
    reviews: 128,
    duration: "12h 45m",
    level: "Intermediate",
    description: "Build robust, state-of-the-art corporate web platforms with advanced state management and optimized rendering configurations.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    title: "Fullstack Architecture & Design Patterns",
    instructor: "Alex Rivera",
    category: "Architecture",
    rating: 4.8,
    reviews: 94,
    duration: "18h 30m",
    level: "Advanced",
    description: "Design highly maintainable distributed systems, master clean architecture, and implement production-ready software patterns.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Introduction to Cloud Native & Kubernetes",
    instructor: "Michael Chen",
    category: "DevOps",
    rating: 4.7,
    reviews: 156,
    duration: "8h 15m",
    level: "Beginner",
    description: "Deploy scalable microservices pipelines. Master configuration maps, storage management, and advanced pod distribution metrics.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=400&q=80"
  }
];

export default function Home() {
  const [activeCurriculumTab, setActiveCurriculumTab] = useState('frontend');
  const navigate = useNavigate();

  const handleGoToDashboard = (course = null) => {
    if (course) {
      navigate('/dashboard', { state: { courseId: course.id } });
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-blueish-grey overflow-x-hidden">
      <HeaderNav />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-8 md:px-16 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-bright-velvet/5 blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute left-10 bottom-10 w-96 h-96 rounded-full bg-tranquil-velvet/5 blur-3xl pointer-events-none -z-10"></div>

        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-tranquil-velvet/10 border border-tranquil-velvet/20 px-3.5 py-1.5 rounded-full text-tranquil-velvet font-bold text-xs select-none">
            <Shield className="h-4 w-4" />
            <span>Next-Generation Enterprise Learning Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[110%] font-extrabold">
            Accelerate your team’s expertise with <span className="bg-gradient-to-r from-tranquil-velvet to-bright-velvet bg-clip-text text-transparent">Xebia LMS</span>
          </h1>
          <p className="text-dark-grey text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Empower your engineers with tailored learning paths, interactive sandbox simulations, and certified corporate curriculum designed by leading software authorities.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <button 
              onClick={() => handleGoToDashboard()}
              className="px-6 py-3.5 bg-cta-orange hover:bg-[#E05600] text-white font-bold rounded-xl text-sm shadow-lg shadow-cta-orange/20 transition duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Start Enrolling Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a 
              href="#curriculum"
              className="px-6 py-3.5 bg-white hover:bg-light-grey/20 text-black border border-medium-grey font-bold rounded-xl text-sm transition duration-150 text-center"
            >
              Explore Curriculum
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center">
          <div className="w-full max-w-md relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-tranquil-velvet to-bright-velvet rounded-2xl transform rotate-3 scale-[1.02] opacity-15 pointer-events-none"></div>
            <div className="bg-white border border-medium-grey p-4 rounded-2xl shadow-xl relative overflow-hidden">
              <img src={heroImg} className="w-full h-auto object-cover rounded-xl" alt="LMS Hero Visual" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white border-y border-medium-grey">
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full space-y-12">
          <div className="text-center space-y-3">
            <span className="text-cta-orange text-xs font-bold uppercase tracking-widest font-semibold">Designed for Innovation</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight font-extrabold">Standardized Core Pillars</h2>
            <p className="text-dark-grey text-sm max-w-lg mx-auto leading-relaxed">
              Enterprise-scale development modules structured to maximize practical capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-medium-grey bg-blueish-grey hover:border-tranquil-velvet/30 hover:shadow-lg transition duration-300 space-y-4 group">
              <div className="h-12 w-12 rounded-xl bg-tranquil-velvet/10 flex items-center justify-center text-tranquil-velvet group-hover:bg-tranquil-velvet group-hover:text-white transition duration-300">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-black font-semibold">Structured Career roadmaps</h3>
              <p className="text-dark-grey text-xs leading-relaxed">
                Transition junior staff into seasoned tech-leads with customized pathways tailored to company stacks.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-medium-grey bg-blueish-grey hover:border-emerald/30 hover:shadow-lg transition duration-300 space-y-4 group">
              <div className="h-12 w-12 rounded-xl bg-emerald/10 flex items-center justify-center text-emerald group-hover:bg-emerald group-hover:text-white transition duration-300">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-black font-semibold">Interactive Sandbox Labs</h3>
              <p className="text-dark-grey text-xs leading-relaxed">
                Practice microservice management and frontend compilation inside sandboxed configurations with zero local setups.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-medium-grey bg-blueish-grey hover:border-cta-orange/30 hover:shadow-lg transition duration-300 space-y-4 group">
              <div className="h-12 w-12 rounded-xl bg-cta-orange/10 flex items-center justify-center text-cta-orange group-hover:bg-cta-orange group-hover:text-white transition duration-300">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-black font-semibold">Industry Certified Credentials</h3>
              <p className="text-dark-grey text-xs leading-relaxed">
                Earn enterprise badges and qualified LinkedIn certifications verified by principal software engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Pathway Tabs Section */}
      <section id="curriculum" className="py-20 max-w-7xl mx-auto px-8 md:px-16 w-full space-y-12">
        <div className="text-center space-y-3">
          <span className="text-tranquil-velvet text-xs font-bold uppercase tracking-widest font-semibold">LMS Syllabus</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight font-extrabold">Structured Curriculums</h2>
          <p className="text-dark-grey text-sm max-w-lg mx-auto">
            Explore specialized tracks organized by role and technical complexity.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center border-b border-medium-grey">
          <div className="flex gap-2 -mb-px">
            {[
              { id: 'frontend', label: 'Frontend Development' },
              { id: 'devops', label: 'DevOps & Infrastructure' },
              { id: 'architecture', label: 'Systems Architecture' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveCurriculumTab(tab.id)}
                className={`px-6 py-4.5 text-sm font-bold border-b-2 transition cursor-pointer ${activeCurriculumTab === tab.id ? 'border-tranquil-velvet text-tranquil-velvet font-bold' : 'border-transparent text-dark-grey hover:text-black'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Details */}
        <div className="bg-white border border-medium-grey rounded-2xl p-8 md:p-10 shadow-sm">
          {activeCurriculumTab === 'frontend' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <span className="text-xs bg-tranquil-velvet/10 text-tranquil-velvet border border-tranquil-velvet/20 px-2.5 py-1 rounded-full font-bold uppercase">Frontend Path</span>
                <h3 className="text-2xl font-bold text-black font-semibold">Modern Frontend Architectures</h3>
                <p className="text-dark-grey text-sm leading-relaxed">
                  Equip developers with deep React frameworks expertise, scalable design system rules, Tailwind CSS optimization, and modular micro-frontend components.
                </p>
                <ul className="space-y-3 text-xs text-dark-grey font-medium">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald" />
                    <span>Tailwind CSS configuration models and custom themes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald" />
                    <span>Advanced state management models (Zustand/Redux)</span>
                  </li>
                </ul>
                <button 
                  onClick={() => handleGoToDashboard()}
                  className="px-5 py-2.5 bg-cta-orange hover:bg-[#E05600] text-white text-xs font-bold rounded-xl transition duration-150 shadow-md shadow-cta-orange/15 cursor-pointer"
                >
                  Explore Courses
                </button>
              </div>
              <div>
                <div className="bg-blueish-grey border border-medium-grey p-6 rounded-2xl space-y-4">
                  <h4 className="text-sm font-bold text-black font-semibold">Syllabus Overview</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-medium-grey rounded-xl flex justify-between items-center text-xs">
                      <span className="font-semibold text-black">1. JSX Core & React State Engine</span>
                      <span className="text-tranquil-velvet font-bold">12 Lessons</span>
                    </div>
                    <div className="p-3 bg-white border border-medium-grey rounded-xl flex justify-between items-center text-xs">
                      <span className="font-semibold text-black">2. Tailwind CSS Styling & Variables</span>
                      <span className="text-tranquil-velvet font-bold">8 Lessons</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCurriculumTab === 'devops' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <span className="text-xs bg-emerald/10 text-emerald border border-emerald/20 px-2.5 py-1 rounded-full font-bold uppercase">DevOps & Cloud</span>
                <h3 className="text-2xl font-bold text-black font-semibold">Cloud Native & Infrastructure at Scale</h3>
                <p className="text-dark-grey text-sm leading-relaxed">
                  Deploy highly resilient systems using Kubernetes clusters, Docker image registries, CI/CD automated orchestration pipelines, and advanced microservice distributions.
                </p>
                <ul className="space-y-3 text-xs text-dark-grey font-medium">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald" />
                    <span>Kubernetes Pod orchestration and ingress controllers</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald" />
                    <span>Dockerizing Node.js microservices and building caches</span>
                  </li>
                </ul>
                <button 
                  onClick={() => handleGoToDashboard()}
                  className="px-5 py-2.5 bg-cta-orange hover:bg-[#E05600] text-white text-xs font-bold rounded-xl transition duration-150 shadow-md shadow-cta-orange/15 cursor-pointer"
                >
                  Explore Courses
                </button>
              </div>
              <div>
                <div className="bg-blueish-grey border border-medium-grey p-6 rounded-2xl space-y-4">
                  <h4 className="text-sm font-bold text-black font-semibold">Syllabus Overview</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-medium-grey rounded-xl flex justify-between items-center text-xs">
                      <span className="font-semibold text-black">1. Dockerizing Microservices</span>
                      <span className="text-tranquil-velvet font-bold">10 Lessons</span>
                    </div>
                    <div className="p-3 bg-white border border-medium-grey rounded-xl flex justify-between items-center text-xs">
                      <span className="font-semibold text-black">2. Kubernetes Configuration Maps & Secrets</span>
                      <span className="text-tranquil-velvet font-bold">15 Lessons</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCurriculumTab === 'architecture' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <span className="text-xs bg-bright-velvet/10 text-bright-velvet border border-bright-velvet/20 px-2.5 py-1 rounded-full font-bold uppercase">Architecture Path</span>
                <h3 className="text-2xl font-bold text-black font-semibold">Systems Architecture & Patterns</h3>
                <p className="text-dark-grey text-sm leading-relaxed">
                  Study the theory and practice of enterprise-grade architectures: Clean code practices, distributed event streaming (Kafka), domain-driven design, and database replication patterns.
                </p>
                <ul className="space-y-3 text-xs text-dark-grey font-medium">
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald" />
                    <span>Domain-Driven Design (DDD) fundamentals</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-emerald" />
                    <span>Event Streaming patterns with Apache Kafka</span>
                  </li>
                </ul>
                <button 
                  onClick={() => handleGoToDashboard()}
                  className="px-5 py-2.5 bg-cta-orange hover:bg-[#E05600] text-white text-xs font-bold rounded-xl transition duration-150 shadow-md shadow-cta-orange/15 cursor-pointer"
                >
                  Explore Courses
                </button>
              </div>
              <div>
                <div className="bg-blueish-grey border border-medium-grey p-6 rounded-2xl space-y-4">
                  <h4 className="text-sm font-bold text-black font-semibold">Syllabus Overview</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-medium-grey rounded-xl flex justify-between items-center text-xs">
                      <span className="font-semibold text-black">1. Clean Architecture Frameworks</span>
                      <span className="text-tranquil-velvet font-bold">14 Lessons</span>
                    </div>
                    <div className="p-3 bg-white border border-medium-grey rounded-xl flex justify-between items-center text-xs">
                      <span className="font-semibold text-black">2. Event-Driven Systems Design</span>
                      <span className="text-tranquil-velvet font-bold">18 Lessons</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-tranquil-velvet-dark py-12 text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-extrabold text-white">50k+</p>
            <p className="text-xs text-white/75 mt-1 font-semibold uppercase tracking-wider">Engineers Certified</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-white">250+</p>
            <p className="text-xs text-white/75 mt-1 font-semibold uppercase tracking-wider">Enterprise Clients</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-white">95%</p>
            <p className="text-xs text-white/75 mt-1 font-semibold uppercase tracking-wider">Completion Velocity</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-white">4.8</p>
            <p className="text-xs text-white/75 mt-1 font-semibold uppercase tracking-wider">Instructor Rating</p>
          </div>
        </div>
      </section>

      {/* Featured Courses Showcase Grid */}
      <section id="courses" className="py-20 bg-white border-b border-medium-grey">
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-3">
              <span className="text-cta-orange text-xs font-bold uppercase tracking-widest font-semibold">Active Curriculum</span>
              <h2 className="text-3xl font-extrabold text-black tracking-tight font-extrabold">Featured Engineering Modules</h2>
            </div>
            <button 
              onClick={() => handleGoToDashboard()}
              className="text-sm font-bold text-tranquil-velvet hover:text-bright-velvet transition flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>Browse all courses</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <div 
                key={course.id}
                className="bg-blueish-grey border border-medium-grey rounded-2xl overflow-hidden hover:shadow-lg hover:border-tranquil-velvet/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 relative overflow-hidden bg-white border-b border-medium-grey">
                    <img 
                      src={course.image} 
                      className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-300" 
                      alt="" 
                    />
                    <div className="absolute top-3 left-3 flex gap-1">
                      <span className="text-[9px] bg-white/90 text-tranquil-velvet border border-tranquil-velvet/20 px-2 py-0.5 rounded font-bold uppercase">
                        {course.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <span>{course.rating}</span>
                      <span className="text-dark-grey font-medium">({course.reviews} reviews)</span>
                    </div>
                    <h3 className="text-base font-bold text-black hover:text-tranquil-velvet transition line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-dark-grey text-xs leading-relaxed line-clamp-3">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-medium-grey/40 flex justify-between items-center mt-4">
                  <span className="text-xs text-dark-grey font-medium flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-dark-grey/65" />
                    <span>{course.duration}</span>
                  </span>
                  <button 
                    onClick={() => handleGoToDashboard(course)}
                    className="px-4 py-2 bg-cta-orange hover:bg-[#E05600] text-white text-xs font-bold rounded-lg transition duration-200 cursor-pointer"
                  >
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-20 max-w-7xl mx-auto px-8 md:px-16 w-full space-y-12">
        <div className="text-center space-y-3">
          <span className="text-tranquil-velvet text-xs font-bold uppercase tracking-widest font-semibold">User Impact</span>
          <h2 className="text-3xl font-extrabold text-black tracking-tight font-extrabold">What Engineers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-medium-grey p-8 rounded-2xl shadow-sm space-y-4">
            <div className="flex gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-dark-grey text-xs italic leading-relaxed">
              "The frontend pathways were incredibly comprehensive. Building the scaling design systems inside the practical labs helped us standardise our React UI code."
            </p>
            <div className="flex gap-3 items-center">
              <div className="h-10 w-10 bg-tranquil-velvet/15 rounded-full flex items-center justify-center text-tranquil-velvet font-bold text-xs">
                ML
              </div>
              <div>
                <h4 className="text-xs font-bold text-black">Marcus Long</h4>
                <p className="text-[10px] text-dark-grey">Senior React Engineer, TechCorp</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-medium-grey p-8 rounded-2xl shadow-sm space-y-4">
            <div className="flex gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-dark-grey text-xs italic leading-relaxed">
              "Mastering Kubernetes deployment configurations via Xebia’s DevOps sandbox removed the deployment bottlenecks in our releases."
            </p>
            <div className="flex gap-3 items-center">
              <div className="h-10 w-10 bg-emerald/15 rounded-full flex items-center justify-center text-emerald font-bold text-xs">
                KA
              </div>
              <div>
                <h4 className="text-xs font-bold text-black">Karla Abbott</h4>
                <p className="text-[10px] text-dark-grey">Lead DevOps Engineer, CloudSystem</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-medium-grey p-8 rounded-2xl shadow-sm space-y-4">
            <div className="flex gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-dark-grey text-xs italic leading-relaxed">
              "A truly premium learning system. The event-driven systems syllabus was highly engaging. Completing my microservices badge verified my qualifications."
            </p>
            <div className="flex gap-3 items-center">
              <div className="h-10 w-10 bg-cta-orange/15 rounded-full flex items-center justify-center text-cta-orange font-bold text-xs">
                TR
              </div>
              <div>
                <h4 className="text-xs font-bold text-black">Toby Reynolds</h4>
                <p className="text-[10px] text-dark-grey">Solutions Architect, ApexData</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
