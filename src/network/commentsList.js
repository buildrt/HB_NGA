import axios from "./axios";
import {stringify} from "querystring";

export function commentsList(data) {
    return axios({
        url: 'http://43.142.76.39:5000/comments',
        method: 'post',
        data:stringify({
            data
        })
    })
}