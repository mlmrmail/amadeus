const key = require('./config');
const _ = require('lodash');

// const superagent = require('superagent');

const Promise = this.Promise || require('promise');
const superagent = require('superagent-promise')(require('superagent'), Promise);

const AMADEUS_URL = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?';


function getFlightsInfo() {
    let params = `apikey=${key.getKey()}&origin=BEY&destination=BOS&departure_date=2017-08-25&return_date=2017-08-30`;
    superagent
        .get(AMADEUS_URL + params)
        .set('Accept', '*/*')
        .set('Accept-Encoding', 'gzip')
        .set('Accept-Language', 'en-US')
        .end()
        .then(
            (res)=> {
                console.log('in promise response');
                // console.log(res.body);
                _.forEach(res.body, (itinerary) => {
                    console.log(JSON.stringify(itinerary));
                    console.log('\n');
                });
            }, 
            (err) => {
                console.log('An error occured : ' + err);
        });
}



module.exports = {
    getFlightsInfo,
}