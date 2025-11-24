export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-col">
          <h5>For more inquiries and concerns</h5>
          <ul>
            <li className="highlight">09XX-XXX-XXXX</li>
            <li>info@philtranco.com</li>
          </ul>
          <br />
          <h5>Connect with Us</h5>
          <div>(Icons)</div>
        </div>
        <div className="footer-col">
          <h5>Help</h5>
          <ul>
            <li>Disclaimer</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="footer-col" />
        <div className="footer-col" />
      </div>

      <div className="skyline" />

      <div className="copyright">
        &copy; {new Date().getFullYear()} Philtranco. All rights reserved.
      </div>
    </footer>
  );
}

