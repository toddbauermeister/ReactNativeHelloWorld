import axios from "axios";

export const get = async (path, requestObject = undefined) => {
    return await axios.get(path, requestObject);
}

export const post = async (path, requestObject = undefined) => {
    return await axios.post(path, requestObject);
}