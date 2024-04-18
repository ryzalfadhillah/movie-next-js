import axios from 'axios'

const satellite = axios.create({
    timeout: 5000, // in millisecond 
    headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

// Menambahkan interceptor ketika menerima response
axios.interceptors.response.use(function (response) {
    // Semua status kode dengan rentan 2xx -an
    // akan dipanggil di sini

    // Lakukan Sesuatu ketika menerima response data
    return response;
}, function (error) {
    // Semua status kode dengan rentan selain 2xx 
    // akan dipanggil di sini

    // Lakukan Sesuatu ketika menerima response error
    return Promise.reject(error);
});

export default satellite