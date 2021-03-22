const Footer = () => {
  return (
    <footer>
      <div className="d-flex">
        <a href="https://github.com/manugarcal" target="blank">
          <button type="button" className="btn btn-dark btn-floating">
            <i className="fab fa-github"></i>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/manugarcal/">
          <button type="button" className="btn btn-dark btn-floating ml-2">
            <i className="fab fa-linkedin"></i>
          </button>
        </a>
        <a href="https://twitter.com/MAGC589">
          <button
            href=""
            type="button"
            className="btn btn-dark btn-floating ml-2"
          >
            <i className="fab fa-twitter"></i>
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
