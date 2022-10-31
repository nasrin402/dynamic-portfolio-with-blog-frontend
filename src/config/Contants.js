//export const API_URL = 'https://dynamic-portfolio-app-server.herokuapp.com/api' // Production
export const API_URL = 'http://localhost:1337/api' // Development

const prod = {
    url: {
     API_URL: 'https://dynamic-portfolio-app-server.herokuapp.com/api',
   
   }
}
const dev = {
    url: {
     API_URL: 'http://localhost:1337/api'
    }
   };

export const config = process.env.NODE_ENV === 'development' ? dev : prod;