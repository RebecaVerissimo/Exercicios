fetch("https://api.thecatapi.com/v1/images/search?limit=10", {method: "GET"})
.then((responseFetch)=>{
  return responseFetch.json();
})
// .then((responseApi)=>{
//   responseApi.forEach(element => {
//     document.write(`<img src="${element.url}" width='500'/> <br />`)
//   });
// });

.then((responseApi)=>{
  for(item of responseApi){
    document.write(`<img src="${item.url}" width='500'/> <br />`)
  }
})