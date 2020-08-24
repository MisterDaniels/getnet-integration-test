import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api-homologacao.getnet.com.br',
    withCredentials: false,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {

    pay: {
        credit(data) {
            return apiClient.post('/v1/payments/credit', data);
        },

        debit(data) {
            return apiClient.post('/v1/payments/debit', data);
        }
    }

}