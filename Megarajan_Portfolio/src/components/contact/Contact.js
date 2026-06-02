import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import toast, { Toaster } from 'react-hot-toast';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const { darkMode } = useTheme();
  const [formValues, setFormValues] = useState({
    name: '',
    phoneNo: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check
    if (!formValues.name || !formValues.phoneNo || !formValues.email || !formValues.subject || !formValues.message) {
      return toast.error("Please fill all fields", {
        position: 'top-center'
      });
    }

    setLoading(true);

    const payload = { ...formValues };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxUFGXbbs-1FOwI5cxnNpMSdWKcJYqvfZttpNMI89Cmv6wXwpGZOcSVAhTJkDnhHwOG/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setFormValues({
        name: '',
        phoneNo: '',
        email: '',
        subject: '',
        message: ''
      });

      toast.success("Your message has been sent!", {
        position: 'top-center'
      });
    } catch (err) {
      toast.error("Failed to send message. Try again.", {
        position: 'top-center'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`w-full py-20 border-b-[1px] ${
      darkMode ? 'border-b-black' : 'border-b-lightBorder'
    }`}>
      <Toaster /> {/* Toast container */}
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className={`w-full lgl:w-[60%] h-full py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg transition-all duration-300 ${
            darkMode
              ? 'bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne'
              : 'bg-white shadow-lightShadow border border-lightBorder'
          }`}>
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className={`text-sm uppercase tracking-wide ${darkMode ? 'text-gray-400' : 'text-lightMuted'}`}>Your name</p>
                  <input
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className="contactInput"
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className={`text-sm uppercase tracking-wide ${darkMode ? 'text-gray-400' : 'text-lightMuted'}`}>Phone Number</p>
                  <input
                    name="phoneNo"
                    value={formValues.phoneNo}
                    onChange={handleChange}
                    className="contactInput"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className={`text-sm uppercase tracking-wide ${darkMode ? 'text-gray-400' : 'text-lightMuted'}`}>Email</p>
                <input
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="contactInput"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className={`text-sm uppercase tracking-wide ${darkMode ? 'text-gray-400' : 'text-lightMuted'}`}>Subject</p>
                <input
                  name="subject"
                  value={formValues.subject}
                  onChange={handleChange}
                  className="contactInput"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className={`text-sm uppercase tracking-wide ${darkMode ? 'text-gray-400' : 'text-lightMuted'}`}>Message</p>
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  className="contactTextArea"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <motion.button
                  type="submit"
                  className={`w-full h-12 rounded-lg text-base tracking-wider uppercase duration-300 border-[1px] flex items-center justify-center gap-2 ${
                    darkMode
                      ? 'bg-[#141518] text-gray-400 hover:text-white hover:border-designColor border-transparent'
                      : 'bg-lightBg text-lightBody hover:text-designColor hover:border-designColor border-lightBorder'
                  }`}
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-designColor border-t-transparent"></span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
