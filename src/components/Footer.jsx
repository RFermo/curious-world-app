const Footer = () => {
    return (
        <footer className="page-footer black">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text center-align">Curious World</h5>
                <hr />
                <p className="grey-text text-lighten-4">Hope you had a great time in this website. Come back soon!</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text center-align">Connect with me</h5>
                
                <ul className="social-media">
                  <li className="center-align">
                    <a className="grey-text text-lighten-3" href="https://www.facebook.com/randolph.fermo" rel="noreferrer" target="_blank"><i className="fab fa-facebook"></i></a>
                    <span>Facebook</span>
                  </li>
                  <hr />
                  <li className="center-align">
                    <a className="grey-text text-lighten-3" href="https://www.instagram.com/rfermo_/" rel="noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                    <span>Instagram</span>
                  </li>
                  <hr />
                  <li className="center-align">
                    <a className="grey-text text-lighten-3" href="https://github.com/RFermo" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                    <span>GitHub</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container center-align">
            © 2021 Curious World
            </div>
          </div>
        </footer>
    );
}
 
export default Footer;