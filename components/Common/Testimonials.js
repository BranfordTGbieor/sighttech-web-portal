import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  mouseDrag: false,
  touchDrag: false,
  navText: [
    "<i class='bx bx-left-arrow-alt'></i>",
    "<i class='bx bx-right-arrow-alt'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
  },
};

const Testimonials = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="client-area ptb-100 bg-color">
      <div className="container">
        <div className="section-title">
          <span>Testimonials</span>
          <h2>What Our Clients Say</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
            vel consequatur tempora atque blanditiis exercitationem incidunt,
            alias corporis quam assumenda dicta.
          </p>
        </div>

        {display ? (
          <OwlCarousel
            className="client-wrap owl-carousel owl-theme"
            {...options}
          >
            <div className="single-client">
              <img src="/images/clients/client1.jpg" alt="img" />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem Ipsum is simply dummy text of the printing Quis
                suspendisse typesetting ipsum dolor sit amet,
              </p>

              <h3>Melvyn Diggs</h3>
              <span>CEO of Company</span>
            </div>

            <div className="single-client">
              <img src="/images/clients/client2.jpg" alt="img" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem Ipsum is simply dummy text of the printing Quis
                suspendisse typesetting ipsum dolor sit amet,
              </p>

              <h3>Thomas Hallie</h3>
              <span>Company Founder</span>
            </div>

            <div className="single-client">
              <img src="/images/clients/client3.jpg" alt="img" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem Ipsum is simply dummy text of the printing Quis
                suspendisse typesetting ipsum dolor sit amet,
              </p>

              <h3>Evance Surmorou</h3>
              <span>React Developer</span>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Testimonials;
