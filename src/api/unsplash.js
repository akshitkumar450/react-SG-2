import axios from 'axios'

// it creates an axios instance  
// it will make default property set where it will make request
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID OE84RZO2CKRVY3w_y0t8Pi1jUg2zG3nODbjA4HBoKsE'
    }
})

// ALTERNATE FOR AXIOS REQUEST

// use this in app.js 
    // onSearchSubmit = async (term) => {
    //     // console.log(term);
    //     const response = await unsplash.get(' / search / photos', {
    //         params: {
    //             query: term
    //         }
    //     })
    //     console.log(response.data.results);
    //     this.setState({ images: response.data.results })
    // }