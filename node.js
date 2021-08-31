var axios = require("axios").default;

var options = {
    method: 'POST',
    url: 'https://noise-reduction.p.rapidapi.com/denoise',
    params: { denoise_control: '20' },
    headers: {
        'x-rapidapi-host': 'noise-reduction.p.rapidapi.com',
        'x-rapidapi-key': 'e8e727f534msh7482bbd05ca4de4p164881jsn89c1f72eb8c0'
    }
};

axios.request(options).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.error(error);
});