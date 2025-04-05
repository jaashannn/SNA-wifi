import React, { useState } from 'react';
import axios from 'axios';
import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading('Sending your message...');

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData
      );

      if (response.data.success) {
        toast.success('✅ Message sent successfully!', { id: toastId });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('❌ Failed to send message.', { id: toastId });
      }
    } catch (error) {
      console.error('Form error:', error);
      toast.error('An error occurred. Please try again.', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <span>1-800-SNA</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span>support@sna.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                <span>Firozpur</span>
              </div>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6 border-2 border-blue-200 rounded-xl bg-gray-50 shadow-lg"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 bg-white transition-all duration-200"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 bg-white transition-all duration-200"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 bg-white transition-all duration-200"
                  required
                  disabled={loading}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 rounded-md font-semibold shadow-md transition-all duration-200 ${
                  loading
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
