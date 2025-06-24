import React from 'react';
import { Mail, Phone, MapPin, Globe, Twitter, MessageCircle, Send } from 'lucide-react';

const ContactTab = () => {
  // Form state
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);
  const [errors, setErrors] = React.useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setErrors({});
    setSubmitStatus(null);
    
    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  // Update form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="text-teal-400" size={24} />
        <h2 className="text-2xl font-bold">Get In Touch</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-700 rounded-lg">
                <Mail className="text-teal-400" size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">lisa.wang@company.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-700 rounded-lg">
                <Phone className="text-teal-400" size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-700 rounded-lg">
                <MapPin className="text-teal-400" size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">Los Angeles, CA</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-700 rounded-lg">
                <Globe className="text-teal-400" size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Website</p>
                <p className="text-white">lisawang.marketing</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-700">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Follow Me</h4>
            <div className="flex gap-3">
              <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                <Twitter size={18} className="text-teal-400" />
              </button>
              <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                <Globe size={18} className="text-teal-400" />
              </button>
              <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                <Mail size={18} className="text-teal-400" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 bg-slate-700 border ${errors.name ? 'border-red-500' : 'border-slate-600'} rounded-lg focus:outline-none focus:border-teal-400 transition-colors`}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 bg-slate-700 border ${errors.email ? 'border-red-500' : 'border-slate-600'} rounded-lg focus:outline-none focus:border-teal-400 transition-colors`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-3 py-2 bg-slate-700 border ${errors.subject ? 'border-red-500' : 'border-slate-600'} rounded-lg focus:outline-none focus:border-teal-400 transition-colors`}
                placeholder="What's this about?"
              />
              {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-3 py-2 bg-slate-700 border ${errors.message ? 'border-red-500' : 'border-slate-600'} rounded-lg focus:outline-none focus:border-teal-400 transition-colors resize-none`}
                placeholder="Your message here..."
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-500/10 text-green-500 rounded-lg">
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-500/10 text-red-500 rounded-lg">
                Failed to send message. Please try again.
              </div>
            )}
            
            <button 
              type="submit"
              disabled={submitting}
              className={`w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <Send size={16} />
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
