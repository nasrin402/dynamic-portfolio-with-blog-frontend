import {
    ADD_BLOG,
    DELETE_BLOG,
    LOAD_BLOG,
    UPDATE_BLOG
} from './actionType';

const blogsReducer = (state, action) =>{
    const {type, payload} = action;
    switch(type){
        case LOAD_BLOG:
            return payload;
        
        case DELETE_BLOG:
            return state.filter((blog) => blog.id !== payload);

        case ADD_BLOG:
            const newBlog = {
                ...payload
            }
        return [newBlog, ...state];

        case UPDATE_BLOG:
            const {id, blogToUpdate} = payload;
            const blogs = state.map((blog) =>{
                if(blog.id === id){
                    //update
                    return{
                        id,
                        ...blogToUpdate
                    }
                }else {
                    return blog
                }
            })

            return [...blogs];

            default:
                return state;
    }
}

export default blogsReducer;