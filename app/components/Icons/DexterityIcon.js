'use strict'

import React, { Component } from 'react'
import Svg, { Path } from 'react-native-svg';

export default class DexterityIcon extends Component {

  render() {
    return (
      <Svg height={100 * this.props.scale} width={100 * this.props.scale}>
        <Path scale={.1 * this.props.scale} fill={this.props.fill} d="M312.3,230h302.4c7.9,0,14.4-6.4,14.4-14.4c0-7.9-6.4-14.4-14.4-14.4H312.3c-7.9,0-14.4,6.4-14.4,14.4C297.9,223.6,304.3,230,312.3,230z"/>
        <Path scale={.1 * this.props.scale} fill={this.props.fill} d="M41.8,370.7h302.4c7.9,0,14.4-6.4,14.4-14.4c0-7.9-6.4-14.4-14.4-14.4H41.8c-7.9,0-14.4,6.4-14.4,14.4C27.5,364.2,33.9,370.7,41.8,370.7z"/>
        <Path scale={.1 * this.props.scale} fill={this.props.fill} d="M123,518.7c0,7.9,6.4,14.4,14.4,14.4h302.4c7.9,0,14.4-6.4,14.4-14.4c0-7.9-6.4-14.4-14.4-14.4H137.4C129.5,504.3,123,510.8,123,518.7z"/>
        <Path scale={.1 * this.props.scale} fill={this.props.fill} d="M296.1,685.9H24.4c-7.9,0-14.4,6.4-14.4,14.4s6.4,14.4,14.4,14.4h271.7c7.9,0,14.4-6.4,14.4-14.4S304,685.9,296.1,685.9z"/>
        <Path scale={.1 * this.props.scale} fill={this.props.fill} d="M784.9,320.2c43.4,0,78.6-35.2,78.6-78.6s-35.2-78.6-78.6-78.6c-43.4,0-78.6,35.2-78.6,78.6C706.3,285,741.5,320.2,784.9,320.2z"/>
        <Path scale={.1 * this.props.scale} fill={this.props.fill} d="M914.2,297.6c-45.1,63.2-105.5,70.5-170.6,31.9c-4.4-2.6-24.1-13.4-28.4-16c-104.6-62.1-209.1-37.7-279.1,60.4c-29.8,41.7,39.1,81.3,68.5,40c36.2-50.7,82.2-65.4,132.6-49.3c-25.8,44.7-48.3,89.2-80.1,152.4c-31.8,63.2-102,113.6-169.5,74.2c-48.7-28.5-92.6,41.5-44.1,69.9c92.1,53.8,200.1,20.8,255.3-49.2c1.9,1,3.9,1.9,6.2,2.7C650,630.2,709,672,727,686.8c18,14.8,48.9,90.2,67.2,128.1c22.3,46,94.2,12.5,71.8-33.7c-20.8-43-55.7-128.8-83-150.5c-21.8-17.4-64.3-49.8-100.2-68.2c24.3-47.1,49.7-93.8,76.4-139.6c85,26.1,165.9-4.6,223.4-85.3C1012.5,295.9,943.6,256.4,914.2,297.6z"/>
      </Svg>
    );
  }
}

DexterityIcon.propTypes = {
  scale: React.PropTypes.number,
  fill: React.PropTypes.string
}