import { create } from 'apisauce';

const apiClient = create({
    // baseURL: 'http://73.203.54.26:4000/api'
    baseURL: 'http://localhost:4000/api'
});


export default apiClient;