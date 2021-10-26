import data from "../products.json";

/**
 * @description A Promise that simulates a product request.
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise}
 * @example getProduct.then(products => console.log(products))
 */
export const getProducts = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve(data?.skins ?? []);
    }, Math.random() * 2000 + 1000);
  } catch (error) {
    reject(error);
  }
});
