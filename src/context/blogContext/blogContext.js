import { createContext, useEffect, useReducer, useState } from 'react';
import { axiosPublicInstance } from '../../config/axios';
import qs from 'qs'
import {
    ADD_BLOG,
    DELETE_BLOG,
    LOAD_BLOG,
    UPDATE_BLOG,
    ADD_COMMENT
} from './actionType';
import blogsReducer from './reducer';
import { formatePost } from '../../utils/formateContacts';
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const blogContext = createContext();
const initialBlogs = [];

export const BlogContext = ({children}) =>{
    //const [posts, dispatch] = useReducer(blogsReducer, initialBlogs);
  const [posts, setPosts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [homPageInfo, setHomePageInfo] = useState({})
    const [blog, setBlog] = useState({});
    const [bComments, setbComments] = useState([]);
    const [isRender, setIsRender] = useState(false);
    const [blogLoaded, setBlogLoaded] = useState(false);
    const [services, setServices] = useState([])

    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() =>{
        homePage();
        loadPosts();
        serviceSection()
        
    },[isRender,]);

    const homePage = async() =>{
        const query = qs.stringify({
            populate: ['bannerSection','bannerSection.professions', 'bannerSection.bannerBackground']
        },
        {
            encodeValuesOnly: true,
          })

          try{
            const response = await axiosPublicInstance.get(`/home?${query}`);
            const loadedHome = response.data?.data?.attributes
            setHomePageInfo(loadedHome)
            //console.log(loadedHome);
            setLoaded(true)
          }catch (err){
            setLoaded(true)
            console.log(err.message);
        }
    }
    
    const serviceSection = async() =>{
        const query = qs.stringify({
            populate: ['HomeService']
        },
        {
            encodeValuesOnly: true,
          })

          try{
            const response = await axiosPublicInstance.get(`/service-section?${query}`);
            const loadedService = response.data?.data?.attributes
            setServices(loadedService)
            //console.log(loadedHome);
            setLoaded(true)
          }catch (err){
            setLoaded(true)
            console.log(err.message);
        }
    }

    const loadPosts = async () =>{
        const query = qs.stringify({
           populate:['author', 'author.profileImg', 'category', 'blogThumb', 'comments'] 
        },
        {
            encodeValuesOnly: true,
          })

          try{
            const response = await axiosPublicInstance.get(`/blogs?${query}`);
            const loadedPosts =  response.data.data.map((post) => formatePost(post));
          
          
            //dispatch({type:LOAD_BLOG, payload:loadedPosts });
            setPosts(loadedPosts);
            setLoaded(true);
        }catch (err){
            setLoaded(true)
            console.log(err.response);
        }
    }
    const addComments = async(data) =>{
        try{
           
            const response = await axiosPublicInstance.post('/comments', 
            {data}  )
      
            
            console.log(response.data)
            toast.success("Thanks for your comment");
            setbComments([...bComments, response.data.data])
            setIsRender(!isRender);
            //navigate(location?.state?.from ? location?.state?.from : "/blog");
           } catch (err) {
            console.log(err.message);
           }
    }

    const fetchBlog = async (blogId) =>{
        const query = qs.stringify({
           populate:['author', 'author.profileImg', 'category', 'blogThumb', 'comments'] 
        },
        {
            encodeValuesOnly: true,
          })

          try{
            const response = await axiosPublicInstance.get(`/blogs/${blogId}?${query}`);
            const loadedPost =  response.data.data;
            //console.log(response.data);
            setBlog(loadedPost)
            setbComments(response?.data?.data?.attributes?.comments?.data);
            setBlogLoaded(true)
            setLoaded(true);
            setIsRender(!isRender);
        }catch (err){
            console.log(err.message, "fetch blog error");
            setLoaded(true)
        }
    }
    const value = {
        posts,
        loaded,
        addComments,
        homPageInfo,
        blog,
        bComments,
        fetchBlog,
        blogLoaded,
        services
    }

    return (
        <blogContext.Provider value={value}>{children}</blogContext.Provider>
    )
}