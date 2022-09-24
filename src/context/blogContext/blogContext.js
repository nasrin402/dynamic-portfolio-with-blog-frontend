import { createContext, useEffect, useReducer, useState } from 'react';
import { axiosPublicInstance } from '../../config/axios';
import qs from 'qs'
import {
    ADD_BLOG,
    DELETE_BLOG,
    LOAD_BLOG,
    UPDATE_BLOG
} from './actionType';
import blogsReducer from './reducer';
import { formatePost } from '../../utils/formateContacts';

export const blogContext = createContext();
const initialBlogs = [];

export const BlogContext = ({children}) =>{
    const [posts, dispatch] = useReducer(blogsReducer, initialBlogs);
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        (async() =>{
            await loadPosts();
        })();
        
    },[]);

    const loadPosts = async () =>{
        const query = qs.stringify({
           populate:['author', 'author.profileImg', 'category', 'blogThumb'] 
        },
        {
            encodeValuesOnly: true,
          })

          try{
            const response = await axiosPublicInstance.get(`/blogs?${query}`);
            const loadedPosts =  response.data.data.map((post) => formatePost(post));
            //console.log(response.data);
            
            dispatch({type: LOAD_BLOG, payload:loadedPosts })
        }catch (err){
            console.log(err.message);
        }
    }
    
    const value = {
        posts,
        loaded,
    }

    return (
        <blogContext.Provider value={value}>{children}</blogContext.Provider>
    )
}