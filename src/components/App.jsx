import Navigation from "./Navigation";
import Info from "./Info";
import Explore from "./Explore";
import Countries from "./Countries";
import {Carousel, Row, Col} from "react-materialize";
import Testimonial from "./Testimonial";
import {testimonials as testimonialData} from "../myData";
import StartLearning from "./StartLearning";
import NotFound from "./NotFound";
import Footer from "./Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
  return (
    <Router>

      <div>
        <Switch>
          <Route exact path="/">
            <header>
              <Navigation />
              <Info />
            </header>
          </Route>
        </Switch>
  

        <Switch>
          <Route exact path="/">
            {/* Testimonials */}

            <div className="container section">
              <h2 className="center-align testimonial">Testimonials</h2>

              <Row>
                <Col s={12} l={10} offset="l1">
                  <Carousel
                    carouselId="Carousel-1"
                    className="carousel-slider center"
                    options={{
                      fullWidth: true,
                      indicators: true
                    }}
                  >
                  
                  {/* This function renders the testimonials */}
                  {testimonialData.map((testimon) => {
                      return (
                        <Testimonial
                          key={testimon.id}
                          name={testimon.name}
                          age={testimon.age}
                          decl={testimon.decl}
                          img={testimon.picture}
                        />
                      );
                  })}

                  </Carousel>
                </Col>
              </Row>
            </div>
            
            {/* Link to start learning */}
            <StartLearning />
            <Footer />
          </Route>

          <Route exact path="/explore">
            <div className="explore-continent-wrapper">
              <Navigation />
              <Explore />
            </div>
          </Route>

          <Route path="/explore/:id">
            <div className="explore-continent-wrapper">
              <Navigation />
              <Countries />
            </div>
          </Route>



          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

      </div>
    </Router>
  );
};
 
export default App;