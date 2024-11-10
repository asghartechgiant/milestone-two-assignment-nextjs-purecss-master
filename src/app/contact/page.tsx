// pages/contact.js
"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import styles from "./Contact.module.css"; // Adjust the path if necessary

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you would typically send the data to your server or an API
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      {submitted ? (
        <div className={styles.message}>
          <p>Thank you for your message! We will get back to you soon.</p>
          <Link href="/" className={styles.link}>
            Go back to home
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
