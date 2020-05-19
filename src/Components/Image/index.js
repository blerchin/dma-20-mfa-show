import React from 'react';
import PropTypes from 'prop-types';

import {
  container,
  cap,
  fullHeight,
} from './style.module.css';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showBG: true };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  handleImageLoaded() {   
    this.setState({showBG: false});
  }

  render() {
    let {maxHeight,isFullHeight, img, fullHeight,caption,alt} = this.props;
    const style = {
      maxHeight,
    };
  
    if (maxHeight !== 'auto' && isFullHeight === false) {
      style.width = 'auto';
    };
    return (
      <div className={`${container} ${isFullHeight ? fullHeight : ''}`} style={{
        backgroundSize: 'cover',
        backgroundImage: this.state.showBG ? 'url("' + img.placeholder + '")' : 'none'
      }}>
        <img
          style={style}
          src={img.src}
          srcSet={img.srcSet}
          onLoad={this.handleImageLoaded}
          alt={alt}
        />
        {
          caption && (
            <div className={cap}>
              {caption}
            </div>
          )
        }
      </div>
    );
  }
}

Image.defaultProps = {
  img: null,
  alt: null,
  caption: '',
  fullHeight: false,
  isFullHeight: false,
  maxHeight: 'auto',
}

Image.propTypes = {
  img: PropTypes.PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  fillViewport: PropTypes.bool,
  maxHeight: PropTypes.string,
};

export default Image;
