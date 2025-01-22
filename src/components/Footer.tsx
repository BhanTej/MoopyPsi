import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <p>Contact: <a href="mailto:moopypsi@example.com">moopnmerp@example.com</a></p>
        <p>Phone: <a href="tel:+4253813502">+1 (425) 381-3502</a></p>
        <div style={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://www.instagram.com/moopysanders/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center" as const,
    padding: "20px 0",
    marginTop: "auto",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  socialIcons: {
    marginTop: "10px",
  },
};

export default Footer;
