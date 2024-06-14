import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNmU2OTBiM2IyNTAwMTUxYjU1NzYiLCJpYXQiOjE3MTcyMzEzODIsImV4cCI6MTcxODQ0MDk4Mn0.cdURqpRo5x4tub6GqqUKI3x2ntlLGqOPaLj46UuQW-c';

export default axios.create({
    baseURL: 'https://striveschool-api.herokuapp.com/api/',
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }
});