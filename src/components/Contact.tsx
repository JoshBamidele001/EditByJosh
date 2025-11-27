import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/5 via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-red-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="mailto:exploits4real@gmail.com"
            className="flex items-center gap-4 bg-zinc-900/50 border-2 border-red-900/30 p-6 rounded-lg hover:border-red-500/70 transition-all group backdrop-blur-sm"
          >
            <div className="w-14 h-14 bg-red-500/10 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
              <Mail className="text-red-500" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Email</p>
              <p className="text-white font-semibold">exploits4real@gmail.com</p>
            </div>
          </a>

          <a
            href="https://wa.me/2348160179867"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-zinc-900/50 border-2 border-red-900/30 p-6 rounded-lg hover:border-red-500/70 transition-all group backdrop-blur-sm"
          >
            <div className="w-14 h-14 bg-red-500/10 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
              <MessageSquare className="text-red-500" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">WhatsApp</p>
              <p className="text-white font-semibold">+234 8160-179-867</p>
            </div>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900/50 border-2 border-red-900/30 rounded-lg px-6 py-4 text-white focus:border-red-500 focus:outline-none transition-colors backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900/50 border-2 border-red-900/30 rounded-lg px-6 py-4 text-white focus:border-red-500 focus:outline-none transition-colors backdrop-blur-sm"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-400 uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-zinc-900/50 border-2 border-red-900/30 rounded-lg px-6 py-4 text-white focus:border-red-500 focus:outline-none transition-colors backdrop-blur-sm resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-12 py-4 bg-red-500 text-black rounded-full hover:bg-red-600 transition-all duration-300 uppercase tracking-wider text-sm font-semibold shadow-lg shadow-red-500/50 flex items-center justify-center gap-3 group"
          >
            Send Message
            <Send className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </form>
      </div>

      <footer className="text-center mt-20 pt-12 border-t border-red-900/20">
        <p className="text-gray-500 text-sm">
          © 2024 EditByJosh. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
