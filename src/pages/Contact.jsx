/* eslint-disable react/no-unescaped-entities */
// Contact.jsx
import { useState } from "react";
import styles from "./styles/Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Here's how you can reach us.</p>
      </section>

      <div className={styles.contactContainer}>
        <section className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <h3>Customer Support</h3>
            <p>24/7 assistance for your shopping needs</p>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📞</span>
              <p>1-800-FAKE-MKT</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>✉️</span>
              <p>support@fakemarket.com</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3>Business Hours</h3>
            <div className={styles.hours}>
              <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p>Saturday: 10:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3>Office Location</h3>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📍</span>
              <p>
                123 E-commerce Street
                <br />
                Digital City, DC 12345
                <br />
                United States
              </p>
            </div>
          </div>
        </section>

        <section className={styles.contactForm}>
          <h2>Send us a Message</h2>
          <form role="form" onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us more about your inquiry..."
                rows="5"
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </section>
      </div>

      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>What are your delivery times?</h3>
            <p>
              Standard delivery takes 3-5 business days. Express delivery is
              available for select locations.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>How can I track my order?</h3>
            <p>
              Once your order ships, you'll receive a tracking number via email
              to monitor your delivery.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>What&apos;s your return policy?</h3>
            <p>
              We offer a 30-day return policy for most items. Some restrictions
              apply.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Do you ship internationally?</h3>
            <p>
              Yes, we ship to over 50 countries. Shipping costs and times vary
              by location.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
