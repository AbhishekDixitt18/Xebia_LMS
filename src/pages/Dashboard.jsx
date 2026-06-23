import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  Search, 
  Bell, 
  ChevronRight, 
  Play, 
  CheckCircle, 
  Award, 
  Flame, 
  TrendingUp, 
  Sliders, 
  Compass, 
  LogOut,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import Logo from '../components/Logo.jsx';

const paths = [
  { title: "Frontend Professional", courses: "8 Courses", hours: "48 Hrs", xp: "1,200 XP", progress: 65 },
  { title: "Cloud Architect Path", courses: "6 Courses", hours: "36 Hrs", xp: "900 XP", progress: 20 },
  { title: "DevOps Engineering", courses: "10 Courses", hours: "55 Hrs", xp: "1,500 XP", progress: 0 }
];

export default function Dashboard({ 
  courses, 
  handleSimulateProgress 
}) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('All');
  const [activeNotification, setActiveNotification] = useState(true);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Listen to navigation state for deep course selections (e.g. from featured courses grid)
  useEffect(() => {
    if (location.state && location.state.courseId) {
      const match = courses.find(c => c.id === location.state.courseId);
      if (match) {
        setSelectedCourse(match);
        setActiveTab('courses');
      }
    }
  }, [location.state, courses]);

  // Sync selectedCourse stats back to current list state if modified
  const currentSelected = selectedCourse ? courses.find(c => c.id === selectedCourse.id) : null;
  const activeCourseData = currentSelected || selectedCourse;

  // Stats calculation
  const totalCourses = courses.length;
  const inProgressCourses = courses.filter(c => c.progress > 0 && c.progress < 100).length;
  const completedCourses = courses.filter(c => c.progress === 100).length;

  // Filtered courses
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = levelFilter === 'All' || course.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-blueish-grey text-black flex flex-col overflow-hidden w-full">
      {/* Top Banner Alert */}
      {activeNotification && (
        <div className="bg-gradient-to-r from-tranquil-velvet-dark via-tranquil-velvet to-bright-velvet text-white px-4 py-2 text-sm text-center font-medium relative flex items-center justify-center gap-2 shadow-sm shrink-0">
          <span>🚀 Welcome to the student portal! You are currently exploring active sandbox routes.</span>
          <button 
            onClick={() => setActiveNotification(false)}
            className="absolute right-4 hover:opacity-80 transition p-1 rounded-full hover:bg-white/10"
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Workspace Frame */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-tranquil-velvet-dark flex flex-col justify-between hidden md:flex shrink-0 shadow-lg text-white">
          <div className="p-6">
            <div 
              onClick={() => navigate('/')}
              className="flex items-center gap-3 mb-8 bg-white p-3.5 rounded-xl shadow-md justify-center cursor-pointer hover:opacity-95 transition select-none"
              title="Back to Landing Page"
            >
              <Logo className="h-10" />
            </div>

            <nav className="space-y-1">
              <button 
                onClick={() => { setActiveTab('dashboard'); setSelectedCourse(null); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition duration-200 cursor-pointer ${activeTab === 'dashboard' ? 'bg-white/10 text-white border-l-4 border-cta-orange' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
              >
                <Layers className="h-5 w-5" />
                <span>Dashboard</span>
              </button>

              <button 
                onClick={() => { setActiveTab('courses'); setSelectedCourse(null); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition duration-200 cursor-pointer ${activeTab === 'courses' ? 'bg-white/10 text-white border-l-4 border-cta-orange' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
              >
                <BookOpen className="h-5 w-5" />
                <span>All Courses</span>
                <span className="ml-auto bg-tranquil-velvet text-white/90 text-xs px-2 py-0.5 rounded-full">{courses.length}</span>
              </button>

              <button 
                onClick={() => { setActiveTab('paths'); setSelectedCourse(null); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition duration-200 cursor-pointer ${activeTab === 'paths' ? 'bg-white/10 text-white border-l-4 border-cta-orange' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
              >
                <Compass className="h-5 w-5" />
                <span>Learning Paths</span>
              </button>

              <button 
                onClick={() => { setActiveTab('achievements'); setSelectedCourse(null); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition duration-200 cursor-pointer ${activeTab === 'achievements' ? 'bg-white/10 text-white border-l-4 border-cta-orange' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
              >
                <Trophy className="h-5 w-5" />
                <span>Certificates</span>
              </button>
            </nav>
          </div>

          {/* User Logout & Info */}
          <div className="p-6 border-t border-white/10 bg-black/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-white/20 border-2 border-cta-orange flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Jane Doe</h4>
                <p className="text-xs text-white/60">Software Architect</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 hover:text-white text-white/70 text-xs font-semibold rounded-lg border border-white/10 transition duration-200 cursor-pointer"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Exit Portal</span>
            </button>
          </div>
        </aside>

        {/* Main Portal Viewport */}
        <main className="flex-1 flex flex-col overflow-y-auto bg-blueish-grey">
          {/* Header */}
          <header className="h-16 border-b border-medium-grey px-8 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center gap-4 w-full max-w-md">
              <Search className="h-5 w-5 text-dark-grey shrink-0" />
              <input 
                type="text" 
                placeholder="Search enrolled modules, details..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm text-black placeholder-dark-grey/60 focus:outline-none w-full font-medium"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-dark-grey hover:text-black transition rounded-lg hover:bg-blueish-grey cursor-pointer">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-cta-orange rounded-full"></span>
              </button>
              
              <div className="h-8 w-px bg-medium-grey"></div>

              {/* Streak badge */}
              <div className="flex items-center gap-1.5 bg-cta-orange/10 border border-cta-orange/30 text-cta-orange text-xs px-2.5 py-1 rounded-full font-bold select-none">
                <Flame className="h-4 w-4 fill-cta-orange" />
                <span>5 Day Streak</span>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <div className="flex-1 p-8 max-w-7xl w-full mx-auto space-y-8">
            
            {/* TAB: STUDENT PORTAL DASHBOARD */}
            {activeTab === 'dashboard' && !activeCourseData && (
              <>
                {/* Greeting card */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-tranquil-velvet-dark via-tranquil-velvet to-bright-velvet p-8 border border-white/10 shadow-lg text-white">
                  <div className="absolute right-0 bottom-0 top-0 opacity-15 w-1/3 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white via-white/5 to-transparent pointer-events-none"></div>
                  <div className="relative z-10 max-w-2xl">
                    <span className="text-cta-orange text-xs font-bold uppercase tracking-wider font-semibold">Jane's Workspace</span>
                    <h2 className="text-3xl font-extrabold text-white mt-1 mb-2">Student Dashboard</h2>
                    <p className="text-white/85 text-xs leading-relaxed mb-4">
                      Track your enrolled pathways and simulate complete lessons using the sandbox controller to see certifications update live.
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-6 rounded-xl border border-medium-grey shadow-sm relative overflow-hidden group hover:border-tranquil-velvet/50 transition duration-200">
                    <div className="absolute right-4 top-4 text-medium-grey group-hover:text-tranquil-velvet/10 transition duration-200">
                      <BookOpen className="h-10 w-10" />
                    </div>
                    <span className="text-xs font-bold text-dark-grey uppercase">Active Courses</span>
                    <p className="text-3xl font-extrabold text-black mt-2">{inProgressCourses}</p>
                    <p className="text-xs text-tranquil-velvet mt-2 flex items-center gap-1 font-medium">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span>{totalCourses} total enrolled</span>
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-medium-grey shadow-sm relative overflow-hidden group hover:border-emerald/50 transition duration-200">
                    <div className="absolute right-4 top-4 text-medium-grey group-hover:text-emerald/10 transition duration-200">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <span className="text-xs font-bold text-dark-grey uppercase">Completed</span>
                    <p className="text-3xl font-extrabold text-black mt-2">{completedCourses}</p>
                    <p className="text-xs text-emerald mt-2 font-semibold">Ready for certifications</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-medium-grey shadow-sm relative overflow-hidden group hover:border-cta-orange/50 transition duration-200">
                    <div className="absolute right-4 top-4 text-medium-grey group-hover:text-cta-orange/10 transition duration-200">
                      <Clock className="h-10 w-10" />
                    </div>
                    <span className="text-xs font-bold text-dark-grey uppercase">Hours Learned</span>
                    <p className="text-3xl font-extrabold text-black mt-2">24.5h</p>
                    <p className="text-xs text-cta-orange mt-2 font-semibold">Target reached: 92%</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-medium-grey shadow-sm relative overflow-hidden group hover:border-bright-velvet/50 transition duration-200">
                    <div className="absolute right-4 top-4 text-medium-grey group-hover:text-bright-velvet/10 transition duration-200">
                      <Trophy className="h-10 w-10" />
                    </div>
                    <span className="text-xs font-bold text-dark-grey uppercase">XP Gained</span>
                    <p className="text-3xl font-extrabold text-black mt-2">2,450</p>
                    <p className="text-xs text-tranquil-velvet mt-2 flex items-center gap-0.5 font-semibold">
                      <Award className="h-3.5 w-3.5" />
                      <span>Level 4 Professional</span>
                    </p>
                  </div>
                </div>

                {/* Progress lists */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-black">Continue Learning</h3>
                        <p className="text-xs text-dark-grey mt-0.5">Resume your recent courses</p>
                      </div>
                      <button onClick={() => setActiveTab('courses')} className="text-xs font-bold text-tranquil-velvet hover:text-bright-velvet transition cursor-pointer">
                        View all courses
                      </button>
                    </div>

                    <div className="grid gap-4">
                      {courses.filter(c => c.progress > 0).map(course => (
                        <div 
                          key={course.id}
                          className="bg-white rounded-xl border border-medium-grey p-5 hover:shadow-md transition flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between"
                        >
                          <div className="flex gap-4 items-center">
                            <div className="h-16 w-16 rounded-xl overflow-hidden shrink-0 border border-medium-grey">
                              <img src={course.image} className="h-full w-full object-cover" alt="" />
                            </div>
                            <div>
                              <span className="text-[10px] text-tranquil-velvet font-bold uppercase tracking-wider bg-tranquil-velvet/5 border border-tranquil-velvet/10 px-2 py-0.5 rounded shadow-sm">
                                {course.category}
                              </span>
                              <h4 className="text-base font-bold text-black mt-1 hover:text-tranquil-velvet transition cursor-pointer" onClick={() => setSelectedCourse(course)}>
                                {course.title}
                              </h4>
                              <p className="text-xs text-dark-grey mt-0.5">Instructor: {course.instructor}</p>
                            </div>
                          </div>

                          <div className="w-full sm:w-48 space-y-2 shrink-0">
                            <div className="flex justify-between text-xs font-bold text-black">
                              <span>Progress</span>
                              <span className="text-bright-velvet">{course.progress}%</span>
                            </div>
                            <div className="h-2 w-full bg-light-grey rounded-full overflow-hidden">
                              <div className={`h-full rounded-full transition-all duration-500 ${course.progress === 100 ? 'bg-emerald' : 'bg-gradient-to-r from-tranquil-velvet to-bright-velvet'}`} style={{ width: `${course.progress}%` }}></div>
                            </div>
                          </div>

                          <div className="flex gap-2 self-stretch sm:self-center shrink-0">
                            <button 
                              onClick={() => handleSimulateProgress(course.id)}
                              className="px-3 py-2 bg-blueish-grey hover:bg-medium-grey/30 border border-medium-grey text-black rounded-lg text-xs font-semibold transition duration-150 inline-flex items-center gap-1.5 cursor-pointer"
                            >
                              <CheckCircle className="h-3.5 w-3.5 text-emerald" />
                              <span>Done +1</span>
                            </button>
                            <button 
                              onClick={() => setSelectedCourse(course)}
                              className="p-2 bg-cta-orange hover:bg-[#E05600] text-white rounded-lg transition cursor-pointer"
                            >
                              <Play className="h-4 w-4 fill-white text-white" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-black">Pathways Tracker</h3>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-medium-grey shadow-sm space-y-6">
                      {paths.map((path, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="text-sm font-bold text-black">{path.title}</h4>
                            </div>
                              <span className="text-xs font-bold text-bright-velvet">{path.progress}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-blueish-grey rounded-full overflow-hidden">
                            <div className="h-full bg-tranquil-velvet rounded-full transition-all duration-300" style={{ width: `${path.progress}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* TAB: STUDENT COURSE CATALOGUE */}
            {activeTab === 'courses' && !activeCourseData && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-black">All Enrolled Courses</h3>
                    <p className="text-xs text-dark-grey mt-0.5">Explore active roadmap modules</p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold text-dark-grey flex items-center gap-1.5 animate-none select-none">
                      <Sliders className="h-3.5 w-3.5" />
                      <span>Level:</span>
                    </span>
                    {['All', 'Beginner', 'Intermediate', 'Advanced'].map(lvl => (
                      <button 
                        key={lvl}
                        onClick={() => setLevelFilter(lvl)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${levelFilter === lvl ? 'bg-tranquil-velvet text-white' : 'bg-white text-dark-grey border border-medium-grey'}`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredCourses.map(course => (
                    <div 
                      key={course.id}
                      className="bg-white border border-medium-grey rounded-2xl overflow-hidden hover:shadow-md transition flex flex-col justify-between group"
                    >
                      <div>
                        <div className="h-44 w-full relative overflow-hidden bg-blueish-grey border-b border-medium-grey">
                          <img src={course.image} className="h-full w-full object-cover" alt="" />
                          <div className="absolute top-3 left-3 flex gap-1">
                            <span className="text-[9px] bg-white/90 text-tranquil-velvet border border-tranquil-velvet/20 px-2 py-0.5 rounded font-bold uppercase">
                              {course.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 space-y-4">
                          <h4 onClick={() => setSelectedCourse(course)} className="text-base font-bold text-black hover:text-tranquil-velvet cursor-pointer line-clamp-2">
                            {course.title}
                          </h4>
                          <p className="text-xs text-dark-grey">Instructor: {course.instructor}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-dark-grey">{course.completedLessons}/{course.lessons} Modules</span>
                              <span className="text-black font-bold">{course.progress}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-light-grey rounded-full overflow-hidden">
                              <div className={`h-full rounded-full ${course.progress === 100 ? 'bg-emerald' : 'bg-gradient-to-r from-tranquil-velvet to-bright-velvet'}`} style={{ width: `${course.progress}%` }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 pt-0 border-t border-blueish-grey flex justify-between items-center mt-4">
                        <span className="text-xs text-dark-grey font-medium flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-dark-grey/60" />
                          <span>{course.duration}</span>
                        </span>
                        <button 
                          onClick={() => setSelectedCourse(course)}
                          className="px-4 py-2 bg-white hover:bg-cta-orange hover:text-white border border-medium-grey hover:border-transparent text-cta-orange text-xs font-bold rounded-lg transition duration-200 flex items-center gap-1.5 shadow-sm cursor-pointer"
                        >
                          <span>{course.progress > 0 ? "Resume" : "Start"}</span>
                          <ChevronRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: STUDENT PATHS */}
            {activeTab === 'paths' && !activeCourseData && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-black">Career Learning Paths</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {paths.map((path, idx) => (
                    <div key={idx} className="bg-white border border-medium-grey rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-sm animate-none">
                      <div className="space-y-4">
                        <div className="h-12 w-12 bg-tranquil-velvet/10 border border-tranquil-velvet/20 text-tranquil-velvet rounded-xl flex items-center justify-center shrink-0">
                          <Compass className="h-6 w-6" />
                        </div>
                        <h4 className="text-lg font-bold text-black">{path.title}</h4>
                      </div>
                      <div className="space-y-4 pt-4 border-t border-blueish-grey">
                        <div className="flex justify-between text-xs text-dark-grey">
                          <span>Path Progress</span>
                          <span className="text-bright-velvet font-bold">{path.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-blueish-grey rounded-full overflow-hidden">
                          <div className="h-full bg-tranquil-velvet rounded-full" style={{ width: `${path.progress}%` }}></div>
                        </div>
                        <button className="w-full py-2.5 bg-blueish-grey hover:bg-cta-orange hover:text-white border border-medium-grey hover:border-transparent text-cta-orange text-xs font-bold rounded-xl transition cursor-pointer">
                          Continue
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: STUDENT CERTIFICATIONS */}
            {activeTab === 'achievements' && !activeCourseData && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-black">My Certifications</h3>
                </div>
                <div className="bg-white rounded-2xl border border-medium-grey p-8 flex items-center justify-between gap-6 shadow-sm select-none">
                  <div className="flex items-center gap-5">
                    <div className="h-16 w-16 bg-cta-orange/10 border border-cta-orange/30 rounded-2xl flex items-center justify-center text-cta-orange">
                      <Award className="h-9 w-9" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-black">Earn Verified Badges</h4>
                      <p className="text-xs text-dark-grey mt-1">Complete courses to unlock industry-standard digital credentials.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STUDENT COURSE DETAIL VIEW */}
            {activeCourseData && (
              <div className="space-y-6 animate-none">
                <button onClick={() => setSelectedCourse(null)} className="text-xs font-bold text-dark-grey hover:text-black flex items-center gap-1.5 cursor-pointer border border-transparent">
                  ← Back to Dashboard
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white border border-medium-grey rounded-2xl overflow-hidden shadow-sm">
                      <div className="h-64 w-full relative">
                        <img src={activeCourseData.image} className="h-full w-full object-cover" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h2 className="text-2xl font-extrabold text-white">{activeCourseData.title}</h2>
                          <p className="text-white/85 text-xs font-medium">Instructor: {activeCourseData.instructor}</p>
                        </div>
                      </div>
                      <div className="p-6 space-y-6">
                        <div className="flex gap-6 text-xs border-b border-blueish-grey pb-5">
                          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-bright-velvet" /> {activeCourseData.duration}</span>
                          <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-bright-velvet" /> {activeCourseData.lessons} Modules</span>
                        </div>
                        <div className="bg-blueish-grey border border-medium-grey rounded-xl p-4 flex justify-between items-center font-bold">
                          <div className="text-xs">Simulator Controls</div>
                          <button 
                            onClick={() => handleSimulateProgress(activeCourseData.id)}
                            disabled={activeCourseData.progress === 100}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition duration-200 cursor-pointer ${activeCourseData.progress === 100 ? 'bg-light-grey text-dark-grey/50 border border-medium-grey cursor-not-allowed' : 'bg-cta-orange hover:bg-[#E05600] text-white shadow-sm shadow-cta-orange/15'}`}
                          >
                            {activeCourseData.progress === 100 ? 'Completed' : 'Simulate Complete Lesson'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-medium-grey rounded-2xl p-6 space-y-4 shadow-sm h-fit">
                    <h4 className="text-base font-bold text-black font-semibold">Progress Indicator</h4>
                    <div className="flex justify-between text-xs text-dark-grey">
                      <span>{activeCourseData.completedLessons} / {activeCourseData.lessons} Modules</span>
                      <span className="text-bright-velvet font-bold">{activeCourseData.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-blueish-grey rounded-full overflow-hidden">
                      <div className={`h-full transition-all duration-300 ${activeCourseData.progress === 100 ? 'bg-emerald' : 'bg-gradient-to-r from-tranquil-velvet to-bright-velvet'}`} style={{ width: `${activeCourseData.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Portal Footer */}
          <footer className="mt-auto border-t border-medium-grey py-6 px-8 bg-white text-center text-xs text-dark-grey w-full shadow-inner shrink-0">
            <p>© {new Date().getFullYear()} Xebia Academy. All rights reserved. Powered by Vite + React + Tailwind CSS.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
