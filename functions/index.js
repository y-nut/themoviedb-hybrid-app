

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const request = require('request');
const cors = require('cors')({origin: true});

const videos_all_JSON = 'https://api.themoviedb.org/3/movie/popular?api_key=34738023d27013e6d1b995443764da44';
const videos_top_rated_JSON = 'https://api.themoviedb.org/3/movie/top_rated?api_key=34738023d27013e6d1b995443764da44'

const getStream = (url_json, response) => {
    
    return request.get({
        url: url_json,
        json: true
    }, (err, res, data) => {
        if (err) {
            console.log('err',err);
            // handle error
          } else if (res.statusCode === 200) {
            // you can use data here - already parsed as json
            let nData = Object.assign({},data);
            //console.log('data',nData);
      
            response.status(200).send(nData)

      
          } else {
            // response other than 200 OK
            console.log('200');
          }
    })
}

exports.getTopRatedVideos = functions.https.onRequest((request, response) => { //(req, res) => {
    cors(request, response, () => {});
    return getStream(videos_top_rated_JSON, response)
})

exports.getAllVideos = functions.https.onRequest((request, response) => { //(req, res) => {
    cors(request, response, () => {});
    return getStream(videos_all_JSON, response)
    
})
