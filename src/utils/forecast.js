const request = require("request");

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=e27e7465f1a416dece2afc44f851fef7&query=${lat},${lon}&units=m`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to service", undefined);
    } else if (body.error) {
      console.log("object");
      callback(`Unable to provide location: ${body.error.info}`, undefined);
    } else {
      callback(undefined, {
        data: `The weather is ${body.current.weather_descriptions} in ${body.location.name}. The outside temperature is ${body.current.temperature} degree celsius, feels like ${body.current.feelslike} degree celsius.`,
      });
    }
  });
};

module.exports = forecast;
