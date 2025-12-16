
const axios = require('axios');

async function createProduct() {
    const payload = {
        name: "Debug Product " + Date.now(),
        description: "Created via debug script",
        price: 99.99,
        priceUSD: 10,
        priceBDT: 1200,
        images: ["https://via.placeholder.com/150"],
        category: "Web Development"
    };

    console.log("Sending Payload:", payload);

    try {
        const res = await axios.post('http://localhost:5001/api/v1/product/createProduct', payload);
        console.log("Response Status:", res.status);
        console.log("Response Data:", res.data);
    } catch (e) {
        console.error("Axios Error:", e.message);
        if (e.response) {
            console.log("Response Data:", e.response.data);
        }
    }
}

createProduct();
