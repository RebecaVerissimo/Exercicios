function getUserInfo(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let user =
        {
         nome: "Rebeca",
         idade: 26,
         email: "rebeca@gmail.com",
        };
      resolve(user);
    }, 2000);
  });
}

async function playGetUser(){
    let retorno = await getUserInfo();
    console.log(retorno)
}

playGetUser();