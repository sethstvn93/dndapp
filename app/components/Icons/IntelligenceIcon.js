'use strict'

import React, { Component } from 'react'
import Svg, { Path } from 'react-native-svg';

export default class IntelligenceIcon extends Component {

  render() {
    return (
      <Svg height={100 * this.props.scale} width={100 * this.props.scale}>
        <Path scale={.1 * this.props.scale} fill={this.props.fill} d="M646.9,161.6c-7.2,0-13.3,2.6-18.6,7.8c-5.2,5.2-7.9,11.4-7.9,18.6c0,7.3,2.6,13.5,7.7,18.7c5.2,5.2,11.4,7.7,18.7,7.7c7.3,0,13.5-2.6,18.7-7.7c5.2-5.2,7.7-11.4,7.7-18.7c0-7.2-2.6-13.4-7.8-18.6C660.3,164.3,654.1,161.6,646.9,161.6z"/>
        <Path scale={.1 * this.props.scale} fill={this.props.fill} d="M646.9,373c-7.2,0-13.3,2.6-18.6,7.9c-5.2,5.2-7.9,11.4-7.9,18.6c0,7.3,2.6,13.5,7.7,18.7c5.2,5.2,11.4,7.7,18.7,7.7c7.3,0,13.5-2.6,18.7-7.7c5.2-5.2,7.7-11.4,7.7-18.7c0-7.1-2.6-13.3-7.8-18.6C660.3,375.6,654.1,373,646.9,373z"/>
        <Path scale={.1 * this.props.scale} fill={this.props.fill} d="M462,240.9c-14.6,0-27,5.2-37.4,15.5c-10.3,10.3-15.5,22.8-15.5,37.4c0,14.6,5.2,27,15.5,37.4c10.3,10.3,22.8,15.5,37.4,15.5c14.6,0,27-5.2,37.4-15.5c10.3-10.3,15.5-22.8,15.5-37.4c0-14.6-5.2-27-15.5-37.4C489,246.1,476.5,240.9,462,240.9z"/>
        <Path scale={.1 * this.props.scale} fill={this.props.fill} d="M794.4,129.4C739.5,68.2,666.9,11.3,487.6,10c-70-0.5-176.9,16-260.1,104c-50.3,53.2-87.5,120.2-76.8,230c2.3,23.8,36.3,51.3,12.4,97.4c0,0-51.3,90.2-49.5,105.3c0,0-0.9,27.5,41.6,28.3c0,0,10.6,1.3,7.6,24.8l-0.5,34.1c0,0,1.3,10.2,19.9,16.4c0,0,3.5,3.5-1.7,10.2c0,0-9.8,10.9,7,34.5c6.2,8.6,16.3,19.5,10.2,41.6c0,0-7.9,43,8.9,53.1c0,0,19.1,22.7,96,13.2c26.8-3.3,76.6-16.3,106.2,20.9c0,0,70.8,134.5,76.1,166.3c0,0,120.9-215,268.2-248.2c0,0-35.9-81,37.2-185.9c0,0,91.5-120.8,94.3-187.2C884.4,368.7,908.6,256.9,794.4,129.4z M536.1,402.5c-1.5,0-3-0.5-4.3-1.4L508,382.5c-5.1,2.6-10.4,4.7-15.9,6.4c-1.5,14.9-3.1,25.5-4.7,32c-1,3.3-3,5-6.2,5h-38.4c-1.5,0-2.9-0.5-4.1-1.5c-1.2-1-1.9-2.2-2.1-3.6l-4.7-31.6c-4.7-1.4-9.8-3.5-15.5-6.4L392,401.1c-1,1-2.3,1.4-4.1,1.4c-1.5,0-3-0.5-4.3-1.6c-19.8-18.3-29.7-29.3-29.7-33c0-1.2,0.5-2.5,1.4-3.9c1.4-1.9,4.2-5.6,8.5-10.9c4.3-5.4,7.5-9.6,9.7-12.6c-3.2-6.1-5.6-11.7-7.2-16.9l-31.4-5c-1.4-0.1-2.5-0.8-3.5-2c-1-1.2-1.4-2.5-1.4-4v-38.2c0-1.4,0.5-2.7,1.4-4c1-1.3,2.1-2,3.3-2.2l32-5c1.5-4.8,3.7-10,6.6-15.7c-4.7-6.6-10.9-14.5-18.6-23.7c-1-1.5-1.4-2.9-1.4-4.1c0-1.7,0.5-3,1.4-4.1c3-4.1,8.7-10.3,16.9-18.4c8.3-8.1,13.7-12.2,16.3-12.2c1.5,0,3,0.5,4.3,1.4l23.7,18.6c4.7-2.5,10-4.7,15.9-6.6c1.5-14.9,3.1-25.5,4.7-31.8c1-3.3,3-5,6.2-5h38.4c1.5,0,2.9,0.5,4.1,1.5c1.2,1,1.9,2.2,2.1,3.6l4.7,31.6c4.7,1.4,9.8,3.5,15.5,6.4l24.4-18.4c1.1-1,2.5-1.4,4.1-1.4c1.5,0,3,0.5,4.3,1.7c19.8,18.3,29.7,29.3,29.7,33c0,1.2-0.5,2.5-1.4,3.9c-1.7,2.2-4.5,5.9-8.7,11.2c-4.1,5.2-7.2,9.4-9.3,12.4c3.2,6.6,5.5,12.2,7,16.9l31.4,4.8c1.4,0.3,2.5,1,3.5,2.2c1,1.2,1.4,2.5,1.4,4v38.2c0,1.4-0.5,2.7-1.4,4c-1,1.3-2.1,2-3.3,2.2l-32,5c-1.5,4.8-3.7,10-6.6,15.7c4.7,6.6,10.9,14.5,18.6,23.7c1,1.4,1.4,2.8,1.4,4.1c0,1.7-0.5,3-1.4,3.9c-3.2,4.1-8.8,10.3-17,18.5C544.1,398.4,538.7,402.5,536.1,402.5z M726.2,413.9c0,2.2-10.3,4.3-30.8,6.4c-1.7,3.7-3.7,7.3-6.2,10.7c7,15.6,10.5,25,10.5,28.5c0,0.5-0.3,1-0.8,1.4c-16.8,9.8-25.3,14.7-25.6,14.7c-1.1,0-4.3-3.2-9.5-9.7c-5.2-6.5-8.8-11.1-10.7-14c-2.8,0.3-4.8,0.4-6.2,0.4c-1.4,0-3.4-0.1-6.2-0.4c-1.9,2.9-5.5,7.6-10.7,14c-5.2,6.5-8.4,9.7-9.5,9.7c-0.3,0-8.8-4.9-25.6-14.7c-0.6-0.4-0.8-0.9-0.8-1.4c0-3.4,3.5-12.9,10.5-28.5c-2.5-3.4-4.5-7-6.2-10.7c-20.5-2.1-30.8-4.2-30.8-6.4V385c0-2.2,10.2-4.3,30.8-6.4c1.8-4,3.9-7.6,6.2-10.7c-7-15.6-10.5-25-10.5-28.5c0-0.5,0.3-1,0.8-1.4c0.5-0.3,2.9-1.6,7.2-4.1c4.3-2.5,8.3-4.8,12.2-7c3.8-2.2,5.9-3.3,6.2-3.3c1.1,0,4.3,3.2,9.5,9.6c5.2,6.4,8.8,11,10.7,13.9c2.8-0.3,4.8-0.4,6.2-0.4s3.4,0.1,6.2,0.4c7-9.8,13.4-17.5,19-23.1l1.2-0.4c0.5,0,9.1,4.8,25.6,14.4c0.6,0.4,0.8,0.9,0.8,1.4c0,3.4-3.5,12.9-10.5,28.5c2.3,3.2,4.4,6.7,6.2,10.7c20.5,2.1,30.8,4.2,30.8,6.4V413.9z M726.2,202.5c0,2.2-10.3,4.3-30.8,6.4c-1.7,3.7-3.7,7.3-6.2,10.7c7,15.6,10.5,25,10.5,28.5c0,0.5-0.3,1-0.8,1.4c-16.8,9.8-25.3,14.7-25.6,14.7c-1.1,0-4.3-3.2-9.5-9.7c-5.2-6.5-8.8-11.2-10.7-14c-2.8,0.3-4.8,0.4-6.2,0.4c-1.4,0-3.4-0.1-6.2-0.4c-1.9,2.9-5.5,7.6-10.7,14c-5.2,6.5-8.4,9.7-9.5,9.7c-0.3,0-8.8-4.9-25.6-14.7c-0.6-0.4-0.8-0.9-0.8-1.4c0-3.4,3.5-12.9,10.5-28.5c-2.5-3.4-4.5-7-6.2-10.7c-20.5-2.1-30.8-4.2-30.8-6.4v-28.9c0-2.2,10.2-4.3,30.8-6.4c1.8-4,3.9-7.6,6.2-10.7c-7-15.6-10.5-25.1-10.5-28.5c0-0.5,0.3-1,0.8-1.4c0.5-0.3,2.9-1.6,7.2-4.1c4.3-2.5,8.3-4.8,12.2-7c3.8-2.2,5.9-3.3,6.2-3.3c1.1,0,4.3,3.2,9.5,9.6c5.2,6.4,8.8,11,10.7,13.9c2.8-0.3,4.8-0.4,6.2-0.4s3.4,0.1,6.2,0.4c7-9.8,13.4-17.5,19-23.1l1.2-0.4c0.5,0,9.1,4.8,25.6,14.4c0.6,0.4,0.8,0.9,0.8,1.4c0,3.4-3.5,12.9-10.5,28.5c2.3,3.2,4.4,6.7,6.2,10.7c20.5,2.1,30.8,4.2,30.8,6.4V202.5z"/>
      </Svg>
    );
  }
}

IntelligenceIcon.propTypes = {
  scale: React.PropTypes.number,
  fill: React.PropTypes.string
}
