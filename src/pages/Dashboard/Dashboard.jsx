import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout.jsx';
import DashboardHome from '@/pages/Dashboard/DashboardHome.jsx';
import UsersPage from '@/pages/Users/UsersPage.jsx';
import CoursesPage from '@/pages/Courses/CoursesPage.jsx';
import AnalyticsPage from '@/pages/Analytics/AnalyticsPage.jsx';
import RevenuePage from '@/pages/Revenue/RevenuePage.jsx';
import ReportsPage from '@/pages/Reports/ReportsPage.jsx';
import SettingsPage from '@/pages/Settings/SettingsPage.jsx';
import TutorsPage from '@/pages/Tutors/TutorsPage.jsx';
import { api } from '@/services/api.js';


export default function Dashboard({ courses, handleSimulateProgress, coursesLoading }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [tutors, setTutors] = useState([]);
  const [tutorsLoading, setTutorsLoading] = useState(true);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const data = await api.getTutors();
        setTutors(data);
      } catch (err) {
        console.error("Failed to load tutors:", err);
      } finally {
        setTutorsLoading(false);
      }
    };
    fetchTutors();
  }, []);

  const handleAddTutor = async (tutorData) => {
    try {
      const updated = await api.addTutor(tutorData);
      setTutors(updated);
    } catch (err) {
      console.error("Failed to add tutor:", err);
    }
  };

  const handleDeleteTutor = async (tutorId) => {
    try {
      const updated = await api.deleteTutor(tutorId);
      setTutors(updated);
    } catch (err) {
      console.error("Failed to delete tutor:", err);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <DashboardLayout onSearchChange={handleSearchChange} searchValue={searchQuery}>
      <Routes>
        <Route path="/" element={<DashboardHome searchQuery={searchQuery} tutors={tutors} />} />
        <Route path="/users" element={<UsersPage searchQuery={searchQuery} />} />
        <Route 
          path="/courses" 
          element={
            <CoursesPage 
              courses={courses} 
              handleSimulateProgress={handleSimulateProgress} 
              searchQuery={searchQuery}
              loading={coursesLoading}
            />
          } 
        />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/revenue" element={<RevenuePage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route 
          path="/tutors" 
          element={
            <TutorsPage 
              tutors={tutors} 
              onAddTutor={handleAddTutor} 
              onDeleteTutor={handleDeleteTutor} 
              loading={tutorsLoading}
            />
          } 
        />
      </Routes>
    </DashboardLayout>
  );
}

