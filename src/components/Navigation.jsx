import {Link} from "react-router-dom";
import Globe from "../images/globe.png";
import {Navbar, Icon, NavItem} from "react-materialize";

const Navigation = () => {
    return (
        <Navbar
            alignLinks="right"
            className="container navbar-container"
            brand={<Link className="brand-logo black-text" to="/">
            <img className="globe-logo" src={Globe} alt="Website logo" />
            Curious World
            </Link>
            }
            id="mobile-nav"
            menuIcon={<Icon className="black-text">menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            sidenav={
                <div className="sidenav-container center-align">
                    <Link to="/">
                        <Icon className="inline-icon-sidenav black-text">home</Icon>
                        <span className="sidenav-links">Home</span>
                    </Link>
                    <hr className="link-divider" />

                    <Link to="/explore">
                        <Icon className="inline-icon-sidenav black-text">search</Icon>
                        <span className="sidenav-links">Explore</span>
                    </Link>
                    <hr className="link-divider" />

                    <a href="https://en.wikipedia.org/wiki/Privacy_policy" target="_blank" rel="noreferrer">
                        <Icon className="inline-icon-sidenav black-text">accessibility</Icon>
                        <span className="sidenav-links">Privacy Policy</span>
                    </a>
                    <hr className="link-divider" />

                </div>
            }
            >
            <Link className="black-text navbar-link" to="/">
                Home
            </Link>
            <Link className="black-text navbar-link" to="/explore">
                Explore
            </Link>

            {/* The below link is a NavItem because of url issues */}
            <NavItem className="black-text navbar-link-last" href="https://en.wikipedia.org/wiki/Privacy_policy" target="_blank">
                Privacy Policy
            </NavItem>
        </Navbar>
    );
}
 
export default Navigation;