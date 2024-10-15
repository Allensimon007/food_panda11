import React from "react";
import '../Footer/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Food-Panda</h4>
          <p>Foodpanda's brand philosophy is "live like a panda". This philosophy encourages people to focus on what matters most to them, and to live life without unnecessary worries</p>
        </div>

        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li>Chicken Pizza</li>
            <li>Paneer Pizza</li>
            <li>Ornage juice</li>
            <li>Mango Juice</li>
            <li>Grape juice </li>
            <li>View All Products</li>  {/* Add a link to your products page */}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Food-panda All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
