const jsonData=require('./db.json');
const categoriesCount=jsonData.categories[1].length;
const productsCount=jsonData.products[1].length;
jsonData.categories={
  'count':categoriesCount,
};
jsonData.products.count=productsCount;

module.exports=()=>{
  const jsonData=require('./db.json');
  const categoriesCount=jsonData.categories[1].length;
  // const productsCount=jsonData.products[1].length;
  jsonData.categories={
    'count':categoriesCount,
  };
  return jsonData;
};