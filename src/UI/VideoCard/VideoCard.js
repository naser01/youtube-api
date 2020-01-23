import React from 'react';
import classes from './VideoCard.css';

const videoCard = (props) => (<div className={classes.VideoCard}>{props.children}</div>);

export default videoCard;