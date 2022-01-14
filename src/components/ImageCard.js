import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0,
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.onload = () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 5 + 1);
      this.setState({ spans });
    };
  }

  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCard;
