import React from 'react';
import Slider from 'react-slick';

class Splash extends React.Component {
  createElements() {
    let quotes = [
      '"Service to others is the rent you pay for your room here on Earth." — Muhammad Ali',
      '"The best way to find yourself is to lose yourself in the service of others." — Mahatma Gandhi',
      '"The unselfish effort to bring cheer to others will be the beginning of a happier life for ourselves." — Helen Keller',
      '"Life’s most persistent and urgent question is, What are you doing for others?" — Martin Luther King, Jr.',
      '"The meaning of life is to find your gift. The purpose of life is to give it away." — William Shakespeare',
      '"The smallest act of kindness is worth more than the grandest intention."  – Oscar Wilde',
      '"We make a living by what we get, but we make a life by what we give." — Winston Churchill',
      '"I’ve learned that you shouldn’t go through life with a catcher’s mitt on both hands.  You need to be able to throw something back." – Maya Angelou',
    ];
    let sources = [
      "http://res.cloudinary.com/dlbxdsfue/image/upload/v1514531246/HelpingHand/davide-cantelli-153517_am8nou.jpg",
      "http://res.cloudinary.com/dlbxdsfue/image/upload/v1514531249/HelpingHand/edwin-andrade-153753_kiahwv.jpg",
      "http://res.cloudinary.com/dlbxdsfue/image/upload/v1514531248/HelpingHand/kyle-ellefson-196125_riubgu.jpg",
      "http://res.cloudinary.com/dlbxdsfue/image/upload/v1514531248/HelpingHand/larm-rmah-216854_ukww2c.jpg",
      "http://res.cloudinary.com/dlbxdsfue/image/upload/v1514531247/HelpingHand/markus-spiske-104913_dxautr.jpg",
      "http://res.cloudinary.com/dlbxdsfue/image/upload/v1514287405/HelpingHand/martins-zemlickis-57243_svv2zk.jpg",
      "http://res.cloudinary.com/dlbxdsfue/image/upload/v1514531248/HelpingHand/tim-napier-181584_ey2gbp.jpg",
      "http://res.cloudinary.com/dlbxdsfue/image/upload/v1514535216/HelpingHand/neonbrand-426918.jpg"
    ];

    return (
      quotes.map((quote, idx) => (
        <div className="carousel" key={idx}>
          <img className="carousel-image" src={sources[idx]} />
          <h2 className="carousel-text">{quote}</h2>
        </div>
      ))
    );
  }

  render() {
    let settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 8000,
      fade: true,
      speed: 3000,
      pauseOnHover: false,
      // dots: true,
      arrows: false
    };

    return (
      <Slider {...settings}>
        {this.createElements()}
      </Slider>
    );
  }
}

export default Splash;
