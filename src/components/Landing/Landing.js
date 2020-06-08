import React, { useContext, useEffect } from 'react';
import classes from './Landing.module.css';
import { countryOptions } from '../../CountryData';
import { Spinner } from 'reactstrap';
import { userOptions } from '../../usertestdata';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import { Button, Input, Card, CardImg, CardText, CardTitle } from 'reactstrap';
import Slider from 'react-slick';

export default function Landing() {
  const {
    RecentlyOnline,
    RecentlyJoined,
    getLandingPageInfo,
    TotalOnline,
  } = useContext(GlobalContext);

  useEffect(() => {
    getLandingPageInfo();
  }, []);

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

  const renderRecentlyOnline = (CheckResult) => {
    if (CheckResult.length !== 0) {
      return (
        <Slider {...settings}>
          {CheckResult.map((res) => {
            const circle = res.online ? classes.circle : classes.offcircle;
            return (
              <Link to={'/Profile/' + res.user_id}>
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
                      {res.first_name} {res.last_name}
                    </CardTitle>
                  </div>
                  <CardText className={classes.country}>{res.country}</CardText>
                </Card>
              </Link>
            );
          })}
        </Slider>
      );
    } else {
      return <Spinner style={{ width: '9rem', height: '9rem' }} />;
    }
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
        <h1>{TotalOnline} people online</h1>
      </div>

      <div className={classes.slideContainer}>
        <div>
          <h1>Recently Logged On</h1>
        </div>
        {renderRecentlyOnline(RecentlyOnline)}
      </div>
      <div className={classes.slideContainer}>
        <div>
          <h1>Recently Joined</h1>
        </div>
        {renderRecentlyOnline(RecentlyJoined)}
      </div>
    </div>
  );
}
