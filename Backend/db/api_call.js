let request = require('request-promise')

let options;

reset = () => {
  options = {
    method: 'GET',
    url: 'https://crud-api.azurewebsites.net/api/',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': '9b8c2f55-59c3-46c6-9065-8911b9a1abe0'
    },
  }
}
 
let ans = (type, methodType, body) => {
    reset()
    options.url = options.url + type
    options.method = methodType
    if (body) {
      options["body"] = body
    }
    options["body"] = body
    return new Promise( ( resolve, reject ) => {
        request(options, function(error, response, body) {

            if( error ) { 
                reject( error ); 
                return;
            }
            if ( body ) {
              resolve( JSON.parse(body));
            }



    
        });
    });
    
}

module.exports = ans