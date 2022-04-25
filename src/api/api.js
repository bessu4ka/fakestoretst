import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/'
});

const productsAPi = {

  getProducts() {
    return instance.get('products')
      .then(response => {
        return response.data;
      })
  },

  getItemInfo(productId) {
    return instance.get(`products/${productId}`)
      .then(response => {
        return response.data;
      })
  }

};

export {
  productsAPi
};