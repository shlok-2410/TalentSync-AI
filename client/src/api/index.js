import axios from 'axios';

// This is the URL of your Node.js server
const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// client/src/api/index.js
// client/src/api/index.js
export const analyzeResume = (formData) => API.post('/analyze', formData);

