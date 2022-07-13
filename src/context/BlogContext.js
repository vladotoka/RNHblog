import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        default:
            return state;
    }
};

const getBlogPosts = dispatch => {
    return async () => {
        try {
            const response = await jsonServer.get('/blogposts');
            //somethimes response.data from server is HTML code of server index screen,
            //this if will prevent to set this response to state
            if (response.data[0].id) {
                dispatch({ type: 'get_blogposts', payload: response.data });
            }
        } catch (err) {
            console.error('Upps, json server no response, maybe you need to update NGROK url in src/api/jsonServer.js! error: ', err);
            return;

        }

    };
};

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content });
        if (callback) {
            callback();
        }
    }
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);

        dispatch({ type: 'delete_blogpost', payload: id });
    }
};

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content });
        dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
        if (callback) {
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);
