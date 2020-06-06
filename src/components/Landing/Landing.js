import React from 'react';
import classes from './Landing.module.css';
import { countryOptions } from '../../CountryData';
import { userOptions } from '../../usertestdata';
import { Link } from 'react-router-dom';
import { Button, Input, Card, CardImg, CardText, CardTitle } from 'reactstrap';
import Slider from 'react-slick';

export default function Landing() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <Input type='select' placeholder='Select a country'>
          <option disabled selected>
            Choose Country...
          </option>
          {countryOptions}
        </Input>
        <Button>Search</Button>
      </div>

      <div className={classes.amountOnline}>
        <h1>6973 people online</h1>
      </div>

      <div className={classes.slideContainer}>
        <div>
          <h1>Recently Logged On</h1>
        </div>
        <Slider {...settings}>
          {userOptions.map((res) => {
            const circle =
              res.status === 'online' ? classes.circle : classes.offcircle;
            return (
              <Link to={'/Profile/' + res.id}>
                <Card className={classes.recentLogged}>
                  <CardImg
                    top
                    width={100}
                    src={'https://www.w3schools.com/w3images/avatar2.png'}
                    alt='Card image cap'
                  />
                  <div className={classes.title}>
                    <div id={circle} />
                    <CardTitle className={classes.username}>
                      {res.name}
                    </CardTitle>
                  </div>
                  <CardText className={classes.country}>{res.country}</CardText>
                </Card>
              </Link>
            );
          })}
        </Slider>
      </div>
      <div className={classes.slideContainer}>
        <div>
          <h1>Recently Joined</h1>
        </div>
        <Slider {...settings}>
          {userOptions.map((res) => {
            const circle =
              res.status === 'online' ? classes.circle : classes.offcircle;
            return (
              <>
                <Card className={classes.recentLogged}>
                  <CardImg
                    top
                    width={100}
                    src={'https://www.w3schools.com/w3images/avatar2.png'}
                    alt='Card image cap'
                  />
                  <div className={classes.title}>
                    <div id={circle} />
                    <CardTitle className={classes.username}>
                      {res.name}
                    </CardTitle>
                  </div>
                  <CardText className={classes.country}>{res.country}</CardText>
                </Card>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
