import React from 'react';
import { Mail, Phone, MapPin, Globe, Twitter, MessageCircle, Send } from 'lucide-react';

const ContactTab = () => {
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
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-teal-400 transition-colors"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-teal-400 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-teal-400 transition-colors"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-teal-400 transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
