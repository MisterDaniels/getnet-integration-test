import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://localhost:3000',
    withCredentials: false,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {

    pay: {
        credit(data) {
            return apiClient.post('/getnet/pay/credit', data);
        },

        debit(data) {
            return apiClient.post('/getnet/pay/debit', data);
        }
    }

}