import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, Search, ChevronDown } from 'lucide-react';
import HeaderNav from '../components/HeaderNav.jsx';
import Footer from '../components/Footer.jsx';

const faqData = [
  {
    id: 1,
    category: "general",
    question: "What is Xebia LMS?",
    answer: "Xebia LMS is a next-generation corporate Learning Management System specifically designed to accelerate development, deployment, and structural design capabilities for enterprise software engineering departments."
  },
  {
    id: 2,
    category: "general",
    question: "How do I enroll in a learning path?",
    answer: "Learning path enrollments can be authorized by your department's administrator, or you can register directly from the Learning Paths page inside the LMS platform."
  },
  {
    id: 3,
    category: "portal",
    question: "How can I simulate completing a lesson?",
    answer: "To simulate a complete lesson, navigate to the Student Portal (LMS Dashboard), select a course, and in the bottom of the Course Details page, click 'Simulate Complete Lesson'. This increases your progress bar by one module."
  },
  {
    id: 4,
    category: "portal",
    question: "Where do I download certificates?",
    answer: "Once a course progress bar reaches 100%, graduation credentials are automatically registered. You can review and download certificates in the 'Certificates' tab in the Student Portal sidebar."
  },
  {
    id: 5,
    category: "corporate",
    question: "Do you support custom event-driven labs?",
    answer: "Yes, Xebia LMS supports enterprise sandboxed lab configurations for Kubernetes node scaling, event streaming deployments with Kafka, and React component integration pipelines."
  },
  {
    id: 6,
    category: "corporate",
    question: "How do I request a dedicated client dashboard?",
    answer: "Submit a request form on our Contact Page, and one of our enterprise curriculum consultants will connect with you to review your team size and coordinate setup configurations."
  }
];

export default function FAQ() {
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [activeFaqCategory, setActiveFaqCategory] = useState('all');
  const [expandedFaqId, setExpandedFaqId] = useState(null);
  const navigate = useNavigate();

  // Filtered FAQs
  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = activeFaqCategory === 'all' || faq.category === activeFaqCategory;
    const matchesSearch = faq.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(faqSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-blueish-grey">
      <HeaderNav />
      
      <main className="max-w-4xl mx-auto px-8 py-16 w-full flex-1 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-tranquil-velvet/10 border border-tranquil-velvet/20 px-3.5 py-1.5 rounded-full text-tranquil-velvet font-bold text-xs select-none">
            <HelpCircle className="h-4 w-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl font-extrabold text-black tracking-tight">Got Questions? We’ve Got Answers</h1>
          <p className="text-dark-grey text-sm max-w-xl mx-auto">
            Search our knowledge base or select a category below to quickly resolve your doubts about modules, tracks, and certifications.
          </p>
        </div>

        {/* Search FAQ Bar */}
        <div className="bg-white border border-medium-grey p-4 rounded-2xl shadow-sm flex items-center gap-3">
          <Search className="h-5 w-5 text-dark-grey" />
          <input 
            type="text" 
            placeholder="Search FAQs (e.g. certificates, sandbox, progress)..." 
            value={faqSearchQuery}
            onChange={(e) => setFaqSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-black placeholder-dark-grey/50 focus:outline-none w-full font-medium"
          />
        </div>

        {/* Categories and List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Category selector */}
          <div className="space-y-1 md:col-span-1">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'general', label: 'General' },
              { id: 'portal', label: 'Student Portal' },
              { id: 'corporate', label: 'Enterprise' }
            ].map(cat => (
              <button 
                key={cat.id}
                onClick={() => { setActiveFaqCategory(cat.id); setExpandedFaqId(null); }}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold transition cursor-pointer ${activeFaqCategory === cat.id ? 'bg-tranquil-velvet text-white' : 'text-dark-grey hover:bg-white border border-transparent hover:border-medium-grey'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion FAQ List */}
          <div className="md:col-span-3 space-y-4">
            {filteredFaqs.map(faq => {
              const isExpanded = expandedFaqId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-white border border-medium-grey rounded-xl overflow-hidden shadow-sm transition hover:border-medium-grey/85"
                >
                  <button 
                    onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                    className="w-full px-6 py-4.5 text-left flex justify-between items-center font-bold text-sm text-black hover:text-tranquil-velvet transition cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`h-4 w-4 text-dark-grey transition-transform duration-200 ${isExpanded ? 'transform rotate-180' : ''}`} />
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-5 text-xs text-dark-grey leading-relaxed border-t border-blueish-grey pt-4 bg-blueish-grey/20">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="py-12 text-center bg-white rounded-xl border border-medium-grey shadow-sm">
                <HelpCircle className="h-10 w-10 text-medium-grey mx-auto mb-2" />
                <p className="text-xs text-dark-grey font-semibold">No answers match your query</p>
                <button onClick={() => { setFaqSearchQuery(''); setActiveFaqCategory('all'); }} className="text-xs text-tranquil-velvet hover:underline mt-2 cursor-pointer">
                  Clear Search filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
