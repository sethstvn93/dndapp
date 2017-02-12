'use strict'

import React, { Component } from 'react'
import Svg, { Path } from 'react-native-svg';

export default class CharismaIcon extends Component {

  render() {
    return (
      <Svg height={100 * this.props.scale} width={100 * this.props.scale}>
        <Path scale={.1 * this.props.scale} fill={this.props.fill} d="M509.8,375.3c-29.1-21.8-47.3-18.2-72.8,10.9c-21.8,25.5-43.7,47.3-76.4,54.6c-29.1,7.3-54.6,0-80-18.2c-18.2-14.6-21.8-32.7-10.9-50.9c10.9-21.8,21.8-40,29.1-61.8c14.6-25.5,3.6-43.7-21.8-43.7c-18.2,0-21.8,14.6-25.5,25.5c-14.6,36.4-80,196.4-98.2,240.1c-10.9,29.1,14.6,40,32.7,54.6c7.3,7.3,14.6,7.3,25.5,0c25.5-29.1,58.2-29.1,83.7,3.6c3.6,3.6,7.3,7.3,10.9,3.6c32.7-7.3,50.9,10.9,65.5,36.4c0,3.6,7.3,7.3,10.9,7.3c40-3.6,65.5,18.2,69.1,58.2c3.6,14.6,7.3,18.2,18.2,21.8c29.1,10.9,43.7,36.4,36.4,69.1c-3.6,10.9-7.3,18.2-7.3,29.1c-3.6,14.6,0,21.8,14.6,21.8c14.6,3.6,25.5,0,36.4-10.9c10.9-7.3,10.9-10.9,0-18.2c-7.3-7.3-14.6-10.9-25.5-18.2c-3.6,0-3.6-3.6-3.6-7.3l3.6-3.6c3.6,3.6,7.3,3.6,10.9,7.3c10.9,7.3,21.8,14.6,32.7,21.8c29.1,18.2,72.8,0,80-32.7c3.6-10.9,0-14.6-7.3-21.8c-18.2-14.6-36.4-25.5-50.9-40c-3.6-3.6-3.6-7.3-3.6-10.9c3.6,0,7.3,0,10.9,0c18.2,14.6,36.4,29.1,54.6,43.7c29.1,25.5,50.9,29.1,76.4,7.3c14.6-10.9,18.2-25.5,18.2-40c0-10.9-10.9-14.6-14.6-21.8c-3.6-3.6-10.9-7.3-14.6-10.9c-29.1-21.8-58.2-43.7-83.7-65.5c-7.3-3.6-10.9-10.9-3.6-14.6c3.6-3.6,10.9,0,14.6,3.6c21.8,14.6,40,32.7,61.8,47.3c14.6,10.9,25.5,21.8,40,29.1c18.2,10.9,40,7.3,54.6-7.3c18.2-14.6,21.8-40,14.6-61.8C797.2,589.9,779,568.1,509.8,375.3L509.8,375.3L509.8,375.3z M819,444.4c-18.2-58.2-36.4-116.4-58.2-171c-3.6-7.3-10.9-18.2-18.2-18.2c-76.4-29.1-240.1-87.3-243.7-87.3c-3.6,0-87.3,21.8-131,36.4c-21.8,0-32.7,10.9-32.7,32.7c0,36.4,3.6,87.3-18.2,116.4c-3.6,3.6-3.6,7.3-7.3,14.6c-7.3,14.6-3.6,29.1,10.9,36.4c7.3,3.6,21.8,7.3,29.1,3.6c14.6-3.6,25.5-10.9,40-14.6c21.8-10.9,36.4-29.1,40-54.6c0-14.6,18.2-14.6,25.5-18.2c25.5-7.3,43.7-3.6,65.5,10.9c18.2,14.6,36.4,25.5,50.9,40c61.8,47.3,123.7,94.6,189.2,141.9c14.6,10.9,32.7,21.8,47.3,32.7c10.9,7.3,21.8,7.3,29.1-3.6c7.3-7.3,10.9-18.2,7.3-29.1C837.2,491.7,829.9,466.2,819,444.4L819,444.4L819,444.4z M498.9,160.7L498.9,160.7L498.9,160.7L498.9,160.7z M226.1,255.3c3.6-3.6-3.6-7.3-10.9-10.9c-25.5-10.9-47.3-21.8-72.8-32.7c-7.3-3.6-14.6,0-21.8,7.3c18.2-40-58.2,134.6-109.1,265.6c-3.6,10.9,0,14.6,7.3,18.2c25.5,10.9,47.3,21.8,72.8,29.1c10.9,3.6,18.2,0,21.8-10.9c7.3-21.8,18.2-43.7,25.5-65.5c29.1-58.2,54.6-120,80-181.9C222.4,269.8,226.1,262.5,226.1,255.3L226.1,255.3L226.1,255.3z M990,491.7c0-3.6-3.6-7.3-3.6-10.9c-14.6-40-29.1-83.7-40-123.7c-14.6-40-29.1-83.7-40-127.3c-3.6-18.2-7.3-18.2-25.5-14.6c-21.8,7.3-40,14.6-61.8,21.8c-21.8,7.3-21.8,10.9-14.6,32.7c18.2,54.6,36.4,105.5,50.9,160.1c10.9,29.1,18.2,58.2,29.1,87.3c3.6,7.3,7.3,14.6,18.2,10.9c25.5-7.3,54.6-18.2,80-25.5C990,499,990,499,990,491.7L990,491.7L990,491.7z M422.5,753.6c-3.6,0-3.6,0-7.3,3.6c21.8-65.5-21.8-98.2-69.1-72.8c3.6-18.2-3.6-36.4-18.2-47.3c-14.6-10.9-32.7-10.9-50.9,0c-7.3-25.5-21.8-40-40-36.4c-18.2,0-32.7,25.5-29.1,50.9c3.6,18.2,18.2,29.1,47.3,25.5c3.6,58.2,21.8,69.1,72.8,50.9c-3.6,21.8-3.6,43.7,14.6,58.2c21.8,14.6,40,10.9,61.8-7.3c0,7.3-3.6,14.6-3.6,21.8c0,18.2,7.3,29.1,21.8,36.4c10.9,3.6,29.1,3.6,36.4-10.9c7.3-10.9,10.9-21.8,14.6-36.4C477.1,760.9,451.6,739.1,422.5,753.6L422.5,753.6L422.5,753.6z"/>
      </Svg>
    );
  }
}

CharismaIcon.propTypes = {
  scale: React.PropTypes.number,
  fill: React.PropTypes.string
}
