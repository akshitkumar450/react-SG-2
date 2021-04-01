import React from 'react'

class ImageCard extends React.Component {

    constructor(props) {
        super(props)
        // ref gives access to single DOM element
        this.imageRef = React.createRef()
        this.state = {
            spans: 0
        }
    }

    // when this run image is not loaded so the height is not available that time
    componentDidMount() {
        // console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight);

        // it will run when the image (bcz of reference) is successfully loaded on the screen
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        // to get the height of the image
        // console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)
        this.setState({ spans: spans })
    }

    render() {
        return (
            // to fit the images in row
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    alt={this.props.image.description}
                    src={this.props.image.urls.regular} />
            </div>
        )
    }
}
export default ImageCard