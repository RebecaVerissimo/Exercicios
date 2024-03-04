fetch("./data.json")
.then((responseData) => {
    return responseData.json();
  })
  .then((responseApi) => {
    document.write(`<h1>Nome: ${responseApi.nome}</h1>`); 
    document.write(`<h2>Idade: ${responseApi.idade}</h2>`); 
    document.write(`<h3>Email: ${responseApi.email}</h3>`); 
  })
  .catch((error) => {
    document.write(error);
  });