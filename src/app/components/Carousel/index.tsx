import React from 'react';
import Slider from 'react-slick';
import { BannerCard } from '../BannerCard/Loadable';
import { Box } from '@material-ui/core';

import useStyles from './ui';

export function Carousel() {
  const classes = useStyles();
  const settings = {
    customPaging: function (i) {
      return <Box className={classes.box}></Box>;
    },
    dotsClass: 'slick-dots slick-thumb',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.root}>
      <Slider {...settings}>
        <div>
          <BannerCard />
        </div>
        <div>
          <BannerCard />
        </div>
        <div>
          <BannerCard />
        </div>
      </Slider>
    </div>
  );
}
