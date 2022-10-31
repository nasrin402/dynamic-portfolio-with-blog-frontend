import axios from 'axios'
import { config, API_URL } from './Contants';


const url = config.url.API_URL

export const axiosPublicInstance = axios.create({
    baseURL:url
})

export const axiosPrivateInstance = (token) =>axios.create({
    baseURL:url,
    headers:{
        Authorization: `Bearer ${token}`
    }
})








