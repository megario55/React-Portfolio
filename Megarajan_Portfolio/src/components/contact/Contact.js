import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import toast, { Toaster } from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
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
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <Toaster /> {/* Toast container */}
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                  <input
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className="contactInput"
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
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
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="contactInput"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input
                  name="subject"
                  value={formValues.subject}
                  onChange={handleChange}
                  className="contactInput"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
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
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
