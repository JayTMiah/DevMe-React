import Figure from './Figure';
import { PropTypes } from 'prop-types';

import { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images,
    };
    console.log('init');
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentDidUpdate(prevProps) {
    console.log('Updated');

    const { images } = this.props;

    if (prevProps.images !== images) {
      this.setState({ images: images });
    }
  }

  render() {
    console.log('render');
    const { images } = this.state;
    return (
      <section>
        {images.map(({ src, alt, caption }, i) => (
          <Figure key={i} src={src} alt={alt} caption={caption} />
        ))}
      </section>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallery;
