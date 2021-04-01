import React from 'react'

class SearchBar extends React.Component {
    state = {
        term: ''
    }
    // to automatically binding 'this' use arrow fn
    onFormSubmit = (e) => {
        e.preventDefault()
        // passing props from child to parent
        this.props.onSearchSubmit(this.state.term)
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Image search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar