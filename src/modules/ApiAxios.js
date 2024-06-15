import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNmU2OTBiM2IyNTAwMTUxYjU1NzYiLCJpYXQiOjE3MTg0NTA2NTYsImV4cCI6MTcxOTY2MDI1Nn0.4BDK-fLyALTRmDiS3uKJL0ukORJOAcmroL7GuF8OX5E';

export default axios.create({
    baseURL: 'https://striveschool-api.herokuapp.com/api/',
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }
});