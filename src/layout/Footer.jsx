const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <div className="footer-content">
          {/* <img className="logo" src={logo} alt="logo" /> */}
          <p className="desktop-content">
            Make charitable giving easy. Support change makers to fundraise for
            a cause. Ensure charitable giving is accountable and impactful by
            verifying charities.
          </p>
          <p className="mobile-content">
            Experience tailored personal, sessions, 1-on-1 conversations with
            mentors who know you.
          </p>
        </div>
        <div className="footer-other-link">
          <div>
            <p className="title">Help</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>Policy</p>
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>
          <div>
            <p className="title">Platform</p>
            <p>Find mentors</p>
            <p>Become a mentor</p>
            <p>Blog</p>
          </div>
        </div>
      </section>
      <hr />
      <p className="copyright">Copyright © 2023</p>
    </footer>
  );
};

export default Footer;
