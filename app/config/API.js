var api = {
    getRovers(){
        var url = 'https://dog.ceo/api/breeds/list';
        return fetch(url)
        .then((res) => res.json())
        .catch((error)=>{
            console.log("Api call error message below:");
            console.log(error);
  });
 }
};

module.exports = api;
