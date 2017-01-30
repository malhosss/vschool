var request = require("request");
request("http://pokeapi.co/api/v1/pokemon/25/", function (error, response, body) {
    if (response.statusCode == 200) {
        var data = JSON.parse(body);
        console.log(data["name"]);
    }
    else {
        console.log(error);
        console.log(response.statusCode);
    }
});