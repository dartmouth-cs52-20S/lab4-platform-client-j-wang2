import axios from 'axios';

const API_URL = 'https://platform.cs52.me/api/posts?key=j_wang';

// eslint-disable-next-line import/prefer-default-export
export const getServerPosts = () => {
    return new Promise((resolve, reject) => {
        axios.get(API_URL)
            .then((response) => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch((error) => {
                console.log(`server api error: ${error}`);
                reject(error);
            });
    });
};

export const newServerPost = (post) => {
    return new Promise((resolve, reject) => {
        axios.post(API_URL, post)
            .then((response) => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch((error) => {
                console.log(`server api error: ${error}`);
                reject(error);
            });
    });
};

// export default getServerPosts;
