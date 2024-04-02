import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '605b34227c47417ba4b6bf7546f71d3a'
    }

})