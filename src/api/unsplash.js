import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f8JmDi7Z4NIrmy2ImVxEYL1WA-TZzuaVCXXJC1TNGy0',
  },
});
