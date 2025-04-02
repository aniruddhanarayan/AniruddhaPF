'use client';

import { Mail, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 opacity-0 animate-on-scroll">
          Let&apos;s Build the Future
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto opacity-0 animate-on-scroll">
          Interested in defense tech, AI systems, or potential collaboration? Let&apos;s connect.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12 opacity-0 animate-on-scroll">
          <a
            href="mailto:aniruddhanarayan36@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/aniruddha-narayan-8b06a1257"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mt-12 opacity-0 animate-on-scroll">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <input type="hidden" name="access_key" value="bad41d1a-7c2e-484b-a260-a314bde23d9a" />
            <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-left">Send a Message</h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-left">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent text-gray-900 dark:text-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-left">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent text-gray-900 dark:text-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-left">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                <span>{formStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              </button>

              {formStatus === 'success' && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200 text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200 text-sm">
                  Oops! Something went wrong. Please try again or email directly.
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="pt-12 border-t border-gray-200 dark:border-gray-700 mt-12">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Education</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Bachelor of Engineering in Computer Science
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dr. D.Y. Patil Institute of Engineering, Management and Research, Pune
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              July 2022 - January 2026
            </p>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p className="mb-2">Building technology that bears the risks humans shouldn&apos;t.</p>
            <p>&copy; {new Date().getFullYear()} Aniruddha Narayan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
