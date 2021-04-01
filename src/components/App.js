import React from 'react';
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import axios from 'axios'

class App extends React.Component {
    state = {
        images: []
    }

    // passing as props to get value from  child to parent
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID OE84RZO2CKRVY3w_y0t8Pi1jUg2zG3nODbjA4HBoKsE'
            }
        })
        // console.log(response.data.results);
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container " style={{ marginTop: '10px' }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App