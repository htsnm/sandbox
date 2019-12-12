import PropTypes from "prop-types";
import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

const content = [
  {
    title: "Welcome to Hindu Temple Society of New Mexico",
    image: "http://htsnm.org/wp-content/oqey_gallery/galleries/htsnm-temple/galimg/2murtis-htsnm.jpg"
  },
  {
    title: "Hanuman Jayanthi & Rama Navami Celebrataions",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/59488679_2732777743403727_2694545031334723584_o.jpg?_nc_cat=109&_nc_ohc=C0rAfmkzRvoAQlNWwPj4WotC1FlY6dxUUmBoZQ4f7shuJnblItfIpaNFA&_nc_ht=scontent-ort2-1.xx&oh=8bfa2f682de5fde2337acfb25e37e80e&oe=5E710648"
  },
  {
    title: "Sarasvati Pooja & Vasant Panchami",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Read More",
    image: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/51668676_2593201284028041_7377804025460162560_o.jpg?_nc_cat=100&_nc_ohc=rGW8d-AtlvYAQlK8GQa4Uu7LXQHGa2Gn3xfOH9KrGT3PFonnwgL9JpqZg&_nc_ht=scontent-ort2-1.xx&oh=1a82ca37ad4533ff022e2122e683f746&oe=5E884B83"
  }
];

const HomePageSlider = ({ mobile }) => (
  <Slider className="slider-wrapper" autoplay="3000">
    {content.map((item, index) => (
      <div
        key={index}
        className="slider-content"
        style={{ background: `url('${item.image}') no-repeat center center` }}
      >
        <div className="inner">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          {
            item.button &&
            <button>{item.button}</button>
          }          
        </div>        
      </div>
    ))}
  </Slider>
);

HomePageSlider.propTypes = {
  mobile: PropTypes.bool
};

export default HomePageSlider;
