import { initialCourses, initialTutors, initialUsers } from '@/data/mockData.js';

// Helper to simulate network latency
const delay = (ms = 400) => new Promise(resolve => setTimeout(resolve, ms));

// LocalStorage database helpers
const getStorageItem = (key, fallback) => {
  const data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return fallback;
  }
};

const setStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const api = {
  // Courses API
  async getCourses() {
    await delay();
    return getStorageItem('lms_courses', initialCourses);
  },

  async updateCourseProgress(courseId) {
    await delay();
    const courses = getStorageItem('lms_courses', initialCourses);
    const updated = courses.map(course => {
      if (course.id === courseId) {
        const nextCompleted = Math.min(course.lessons, course.completedLessons + 1);
        const nextProgress = Math.round((nextCompleted / course.lessons) * 100);
        return {
          ...course,
          completedLessons: nextCompleted,
          progress: nextProgress
        };
      }
      return course;
    });
    setStorageItem('lms_courses', updated);
    return updated;
  },

  // Tutors API
  async getTutors() {
    await delay();
    return getStorageItem('lms_tutors', initialTutors);
  },

  async addTutor(tutorData) {
    await delay();
    const tutors = getStorageItem('lms_tutors', initialTutors);
    const newTutor = {
      id: `T-${200 + tutors.length + 1}`,
      rating: 4.8,
      status: 'Online',
      ...tutorData,
      courses: parseInt(tutorData.courses || 0, 10),
      hours: parseInt(tutorData.hours || 0, 10)
    };
    const updated = [...tutors, newTutor];
    setStorageItem('lms_tutors', updated);
    return updated;
  },

  async deleteTutor(tutorId) {
    await delay();
    const tutors = getStorageItem('lms_tutors', initialTutors);
    const updated = tutors.filter(t => t.id !== tutorId);
    setStorageItem('lms_tutors', updated);
    return updated;
  },

  // Users API
  async getUsers() {
    await delay();
    return getStorageItem('lms_users', initialUsers);
  },

  async deleteUser(userId) {
    await delay();
    const users = getStorageItem('lms_users', initialUsers);
    const updated = users.filter(u => u.id !== userId);
    setStorageItem('lms_users', updated);
    return updated;
  },

  async deleteUsersBulk(userIds) {
    await delay();
    const users = getStorageItem('lms_users', initialUsers);
    const updated = users.filter(u => !userIds.includes(u.id));
    setStorageItem('lms_users', updated);
    return updated;
  }
};
