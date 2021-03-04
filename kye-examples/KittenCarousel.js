import { Component } from 'react';
import Kitten from './Kitten';

class KittenCarousel extends Component {
  constructor() {
    super();
    console.log('Init');

    this.state = {
      imageId: 200,
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ imageId: this.state.imageId + 1 });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('Updating');
  }

  componentWillUnmount() {
    console.log('Unmount');
    clearTimeout(this.interval);
  }

  render() {
    const { imageId } = this.state;
    return <Kitten imageId={imageId} />;
  }
}

export default KittenCarousel;
