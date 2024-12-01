// const products = fetch('https://fakestoreapi.com/products');
// console.log(products);


async function products_fun(params) {
    try{
        const data = await fetch('https://fakestoreapi.com/products');
        const jsonData = await data.json()
        console.log(jsonData);
    }
    catch(error){
        console.log(error);
    }
}