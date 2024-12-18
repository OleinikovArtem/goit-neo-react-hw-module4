import axios from 'axios';
import { mockItems } from '../mock';

const ACCESS_KEY = 'nnP3Qj1pM_lXTIZVy_3E547cLU6kzW0A1l69qcN4Mm8'


export const getImages = async (page = 1, per_page = 12, query = 'test' ) => {
  try {
      const url = 'https://api.unsplash.com/photos'

      const params ={
        page, per_page, query
      };

      const headers = {
        Authorization: `Client-ID ${ACCESS_KEY}`        
      }

      return mockItems

      // const response = await axios.request({
      //   url,
      //   headers,
      //   params
      // })

      // return response.data || []
    }
  catch (error) {
      console.error(error)
  }
}