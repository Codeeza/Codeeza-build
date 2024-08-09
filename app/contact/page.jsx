import React, { useState } from 'react';
import styles from './contact.module.css';

const Contact = () => {
  const initialFormData = {
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {
      firstName: formData.firstName ? '' : 'First Name is required',
      email: /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Email is not valid',
      company: formData.company ? '' : 'Company Name is required',
      message: formData.message ? '' : 'Message is required',
    };

    setErrors(tempErrors);
    return Object.values(tempErrors).every((error) => !error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      alert('Form submitted');
      setFormData(initialFormData);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.centeredHeading}>Contact Us</h1>
      <div className="btn text-white bg-red-500 ">Send us a message</div>
      <div className={styles.paragraph}>
        {/* Your other contact details here */}
      </div>

      <h2 className={styles.centeredHeading}>Send Us A Message</h2>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label className={styles.paragraphSmallSpacing}>First Name *</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={`${styles.paragraphMediumSpacing} ${errors.firstName ? styles.error : ''}`}
        />
        {errors.firstName && <p className={styles.errorMessage}>{errors.firstName}</p>}

        <label className={styles.paragraphSmallSpacing}>Surname</label>
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          className={styles.paragraphMediumSpacing}
        />

        <label className={styles.paragraphSmallSpacing}>Email Address *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.paragraphMediumSpacing} ${errors.email ? styles.error : ''}`}
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}

        <label className={styles.paragraphSmallSpacing}>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={styles.paragraphMediumSpacing}
        />

        <label className={styles.paragraphSmallSpacing}>Company *</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={`${styles.paragraphMediumSpacing} ${errors.company ? styles.error : ''}`}
          placeholder="E.g. Captivity Promotions"
        />
        {errors.company && <p className={styles.errorMessage}>{errors.company}</p>}

        <label className={styles.paragraphSmallSpacing}>Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${styles.paragraphLargeSpacing} ${errors.message ? styles.error : ''}`}
          placeholder="Enter your message..."
        ></textarea>
        {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}

        <button type="submit" className={styles.paragraphMediumSpacing}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
