import axios from 'axios';

const ACCESS_KEY = 'nnP3Qj1pM_lXTIZVy_3E547cLU6kzW0A1l69qcN4Mm8'

export const getImages = async (query, page = 1, per_page = 12) => {
  try {
      const url = 'https://api.unsplash.com/search/photos'

      const params ={
        page, per_page, query
      };

      const headers = {
        Authorization: `Client-ID ${ACCESS_KEY}`        
      }

      const response = await axios.request({
        url,
        headers,
        params
      })

      return response.data
    }
  catch (error) {
      console.error(error)
  }
}
