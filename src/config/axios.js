import axios from 'axios'

//const isProduction = import.meta.env.PROD;


export const axiosPublicInstance = axios.create({
    baseURL:'http://localhost:1337/api'
})

export const axiosPrivateInstance = (token) =>axios.create({
    baseURL:'http://localhost:1337/api',
    headers:{
        Authorization: `Bearer ${token}`
    }
})






