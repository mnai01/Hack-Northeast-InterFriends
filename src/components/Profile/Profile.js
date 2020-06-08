import React from 'react';
import classes from './Profile.module.css';
import {
  Button,
  Input,
  Card,
  CardImg,
  CardText,
  CardTitle,
  Label,
} from 'reactstrap';
import { userOptions } from '../../usertestdata';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className={classes.container}>
      <div className={classes.userImage}>
        <img src={'https://www.w3schools.com/w3images/avatar2.png'} />
      </div>
      <div className={classes.userInfo}>
        <h5>Name: Ian Matlak</h5>
        <h5>Gender: Male</h5>
        <h5>Age: 24</h5>
        <h5>Native Language: English</h5>
        <h5>Country: United Stated of America</h5>
      </div>
      <div className={classes.userDescription}>
        <Label>Description</Label>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bona autem
          corporis huic sunt, quod posterius posui, similiora. Non laboro,
          inquit, de nomine. Quodsi ipsam honestatem undique pertectam atque
          absolutam. Teneo, inquit, finem illi videri nihil dolere. Quamquam ab
          iis philosophiam et omnes ingenuas disciplinas habemus; Sed tamen
          enitar et, si minus multa mihi occurrent, non fugiam ista popularia.
        </p>
      </div>
      <div className={classes.friendsTitle}>
        <h2>Friends</h2>
      </div>
      <div className={classes.userFriends}>
        {userOptions.map((res) => {
          const circle =
            res.status === 'online' ? classes.circle : classes.offcircle;
          return (
            <Link to={'/Profile/' + res.id}>
              <Card
                className={classes.recentLogged}
                onClick={console.log('/Profile/' + res.id)}
              >
                <CardImg
                  top
                  width={100}
                  src={'https://www.w3schools.com/w3images/avatar2.png'}
                  alt='Card image cap'
                />
                <div className={classes.title}>
                  <div id={circle} />
                  <CardTitle className={classes.username}>{res.name}</CardTitle>
                </div>
                <CardText className={classes.country}>{res.country}</CardText>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className={classes.userComments}>
        <Label>Comment</Label>
        <Input type='textarea'></Input>
      </div>
    </div>
  );
}
