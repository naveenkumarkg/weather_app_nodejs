const request = require("request");


const forecast = (latitude, longitude, callback) => {
  //= 'https://api.darksky.net/forecast/bc633da01de229bce79fccdc9bd7a79f/' + latitude + ',' + longitude
  const url =
    "http://api.weatherstack.com/current?access_key=bc633da01de229bce79fccdc9bd7a79f&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";
  request({ url, json: true }, (error, body) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
     
       // fs.writeFileSync('data.json',JSON.stringify(body.body))
       callback(undefined, body.body.current.weather_descriptions + ' It is currently ' + body.body.current.temperature + ' degress out. There is a ' + body.body.current.precip + '% chance of rain.')
    }
  });
};

module.exports = forecast;
