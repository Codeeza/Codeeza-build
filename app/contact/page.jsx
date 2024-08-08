import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.centeredHeading}>Contact Us</h1>
      <div className='btn text-white'>Send us a message</div>
      <div className={styles.paragraph}>
        <h2 className={styles.headwear}>CAPE TOWN</h2>
        <p>HEAD OFFICE</p>
        <p>Prestige Park</p>
        <p>412 Voortrekker Rd</p>
        <p>Maitland, 7405</p>
        <p>Cape Town</p>
        <p>Email</p>
        <p>Tel: +27 21-510 3868</p>
      </div>

      <div className={styles.paragraph}>
        <h2 className={styles.headwear}>JOHANNESBURG</h2>
        <p>BRANCH</p>
        <p>6 Village Crescent</p>
        <p>Linbro Village</p>
        <p>Linbro Business Park</p>
        <p>Johannesburg</p>
        <p>Email</p>
        <p>Tel: +27 11-608 3014</p>
      </div>

      <div className={styles.paragraph}>
        <h2 className={styles.headwear}>DISTRIBUTORS</h2>
        <h3 className={styles.collection}>PORT ELIZABETH</h3>
        <p>DISTRIBUTOR</p>
        <p>The Cap Company</p>
        <p>57 Bendor Drive</p>
        <p>Beverley Grove</p>
        <p>Port Elizabeth</p>
        <p>6070</p>
        <p>Charmaine</p>
        <p>Email</p>
        <p>Cell: +27 84 848 4726</p>
      </div>

      <div className={styles.paragraph}>
        <h3 className={styles.collection}>EAST LONDON</h3>
        <p>DISTRIBUTOR</p>
        <p>Garth Westphal Agencies CC</p>
        <p>5 Manchester Park</p>
        <p>Manchester Road</p>
        <p>Chiselhurst</p>
        <p>East London</p>
        <p>Garth Westphal</p>
        <p>Email</p>
        <p>Tel: 043 726 9952 / 043 721 3036</p>
        <p>Cell: 083 986 7537</p>
        <p>Fax: 086 562 2987</p>
      </div>

      <div className={styles.paragraph}>
        <h3 className={styles.collection}>SWAZILAND</h3>
        <p>DISTRIBUTOR</p>
        <p>Dixies International</p>
        <p>3rd Street Industrial Sites</p>
        <p>Matsapha – Eswatini</p>
        <p>Swaziland</p>
        <p>Patty De Lorenzo</p>
        <p>Email</p>
        <p>Tel: +268 2518 6154</p>
      </div>

      <div className={styles.paragraph}>
        <h3 className={styles.collection}>ZIMBABWE</h3>
        <p>DISTRIBUTOR</p>
        <p>Texcolour</p>
        <p>8 Neil Avenue</p>
        <p>Msasa, Harare</p>
        <p>Zimbabwe</p>
        <p>Paul Howard</p>
        <p>Email</p>
        <p>Tel: +263 448 7318 | +263 448 6057</p>
      </div>

      <h2 className={styles.centeredHeading}>Send Us A Message</h2>
      <form className={styles.container}>
        <label className={styles.paragraphSmallSpacing}>First Name *</label>
        <input type="text" className={styles.paragraphMediumSpacing} />

        <label className={styles.paragraphSmallSpacing}>Surname</label>
        <input type="text" className={styles.paragraphMediumSpacing} />

        <label className={styles.paragraphSmallSpacing}>Email Address *</label>
        <input type="email" className={styles.paragraphMediumSpacing} />

        <label className={styles.paragraphSmallSpacing}>Phone</label>
        <input type="text" className={styles.paragraphMediumSpacing} />

        <label className={styles.paragraphSmallSpacing}>Company *</label>
        <input type="text" className={styles.paragraphMediumSpacing} placeholder="E.g. Captivity Promotions" />

        <label className={styles.paragraphSmallSpacing}>Message *</label>
        <textarea className={styles.paragraphLargeSpacing} placeholder="Enter your message..."></textarea>

        <button type="submit" className={styles.paragraphMediumSpacing}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
