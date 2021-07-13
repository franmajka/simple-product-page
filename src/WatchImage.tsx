import React from 'react';

import { Feature } from './ProductData';
import classes from './WatchImage.module.css';

import heart from './pulse-heart.png';

interface WatchImageProps {
  imageUrl: string;
  feature: Feature;
}

export default function WatchImage(props: WatchImageProps) {
  const featureHTML = props.feature === 'Time' ?
    <div className={ classes.feature } ><p>00:42</p></div> :
    <div className={ classes.feature } >
      <img src={ heart } alt=""/>
      <p>75</p>
    </div>
  return (
    <div className={ classes.WatchImage }>
      <img src={ props.imageUrl } alt="" className={ classes.image } />
      { featureHTML }
    </div>
  )
}
