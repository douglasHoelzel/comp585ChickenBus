var api = {
    getRovers(){
        var url = 'http://nodejs-mongo-persistent-nmchenry.cloudapps.unc.edu/api/alllocations';
        return fetch(url)
        .then((res) => res.json())
        .catch((error)=>{
            console.log("Api call error message below:");
            console.log(error);
  });
    }
};

module.exports = api;
