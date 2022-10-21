import {
    ADD_BLOG,
    ADD_COMMENT,
    DELETE_BLOG,
    LOAD_BLOG,
    UPDATE_BLOG
} from './actionType';

const blogsReducer = (state, action) =>{
    const {type, payload} = action;
    console.log(payload)
    switch(type){
        case LOAD_BLOG:
            return [...payload];
        
        case DELETE_BLOG:
            return state.filter((blog) => blog.id !== payload);

        case ADD_BLOG:
            const newBlog = {
                ...payload
            }
        return [newBlog, ...state];

        case ADD_COMMENT:
            const newComment = {
                ...payload
            }
        return [newComment, ...state]
        
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