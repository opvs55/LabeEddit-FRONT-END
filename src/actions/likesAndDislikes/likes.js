import axios from "axios";
import { BASE_URL } from "../../constants/url";

export const likePost = async (postId) => {


    try {

        const token = window.localStorage.getItem('token');

        console.log(token)
        const config = {
            headers: {
                Authorization: token
            },

            params:{
                id: postId
            }
        };
        console.log(postId)
        const body = {
            "like": true
        }
        await axios.put(`${BASE_URL}/post/${postId}/like`, body, config);
    } catch (error) {
        console.error(error?.response?.data)
        window.alert(error?.response?.data)
    }

}