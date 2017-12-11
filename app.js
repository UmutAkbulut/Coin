// Slack Bot For Fetching Current Crypto Price

// jQuery
const jsdom = require("jsdom");
const dom = new jsdom.JSDOM(`<!DOCTYPE html>`);
var $ = require("jquery")(dom.window);

// Fetching Price
var btc_last;
var btc_high;
var btc_low;
var btc_vol;

var ltc_last;
var ltc_high;
var ltc_low;
var ltc_vol;

var eth_last;
var eth_high;
var eth_low;
var eth_vol;

var zec_last;
var zec_high;
var zec_low;
var zec_vol;

var dgb_last;
var dgb_high;
var dgb_low;
var dgb_vol;

var dash_last;
var dash_high;
var dash_low;
var dash_vol;

$.get( "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,LTC,ETH,ZEC,DGB,DASH&tsyms=USD", function( data ) {
    btc_last=data['DISPLAY']['BTC']['USD']['PRICE'];
    btc_high=data['DISPLAY']['BTC']['USD']['HIGH24HOUR'];
    btc_low=data['DISPLAY']['BTC']['USD']['LOW24HOUR'];
    btc_vol=data['DISPLAY']['BTC']['USD']['TOTALVOLUME24HTO'];

    ltc_last=data['DISPLAY']['LTC']['USD']['PRICE'];
    ltc_high=data['DISPLAY']['LTC']['USD']['HIGH24HOUR'];
    ltc_low=data['DISPLAY']['LTC']['USD']['LOW24HOUR'];
    ltc_vol=data['DISPLAY']['LTC']['USD']['TOTALVOLUME24HTO'];

    eth_last=data['DISPLAY']['ETH']['USD']['PRICE'];
    eth_high=data['DISPLAY']['ETH']['USD']['HIGH24HOUR'];
    eth_low=data['DISPLAY']['ETH']['USD']['LOW24HOUR'];
    eth_vol=data['DISPLAY']['ETH']['USD']['TOTALVOLUME24HTO'];

    zec_last=data['DISPLAY']['ZEC']['USD']['PRICE'];
    zec_high=data['DISPLAY']['ZEC']['USD']['HIGH24HOUR'];
    zec_low=data['DISPLAY']['ZEC']['USD']['LOW24HOUR'];
    zec_vol=data['DISPLAY']['ZEC']['USD']['TOTALVOLUME24HTO'];

    dgb_last=data['DISPLAY']['DGB']['USD']['PRICE'];
    dgb_high=data['DISPLAY']['DGB']['USD']['HIGH24HOUR'];
    dgb_low=data['DISPLAY']['DGB']['USD']['LOW24HOUR'];
    dgb_vol=data['DISPLAY']['DGB']['USD']['TOTALVOLUME24HTO'];

    dash_last=data['DISPLAY']['DASH']['USD']['PRICE'];
    dash_high=data['DISPLAY']['DASH']['USD']['HIGH24HOUR'];
    dash_low=data['DISPLAY']['DASH']['USD']['LOW24HOUR'];
    dash_vol=data['DISPLAY']['DASH']['USD']['TOTALVOLUME24HTO'];
    
});

var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
// var port = process.env.PORT || 1337;
var port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
 // test route
 
app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.get('/', function (req, res) { res.status(200).send("CoinGO App Running - Developed by <a href='http://cngo.io' target='_blank'>CoinGO</a>"); });

// APP CODE BTC
app.post('/fetch', function (req, res, next) {
  var userName = req.body.user_name;
  var final="CryptoPriceBot - Developed by <a href='http://saimehsan.com' target='_blank'>Saim Ehsan</a>";
  // BTC
  if(req.query.crypto=="btc"){
    final="*USD/BTC*  (Son) *"+btc_last+"*  (En yüksek) *"+btc_high+"*  (En düşük) *"+btc_low+"*  (Hacim) *"+btc_vol+"* ";
  }
  
  // LTC
  if(req.query.crypto=="ltc"){
    final="*USD/LTC*  (Son) *"+ltc_last+"*  (En yüksek) *"+ltc_high+"*  (En düşük) *"+ltc_low+"*  (Hacim) *"+ltc_vol+"* ";
  }
  
  // ETH
  if(req.query.crypto=="eth"){
    final="*USD/ETH*  (Son) *"+eth_last+"*  (En yüksek) *"+eth_high+"*  (En düşük) *"+eth_low+"*  (Hacim) *"+eth_vol+"* ";
  }
  
  // ZEC
  if(req.query.crypto=="zec"){
    final="*USD/ZEC*  (Son) *"+zec_last+"*  (En yüksek) *"+zec_high+"*  (En düşük) *"+zec_low+"*  (Hacim) *"+zec_vol+"* ";
  }
  
  // DGB
  if(req.query.crypto=="dgb"){
    final="*USD/DGB*  (Son) *"+dgb_last+"*  (En yüksek) *"+dgb_high+"*  (En düşük) *"+dgb_low+"*  (Hacim) *"+dgb_vol+"* ";
  }
  
  // DASH
  if(req.query.crypto=="dash"){
    final="*USD/DASH*  (Son) *"+dash_last+"*  (En yüksek) *"+dash_high+"*  (En düşük) *"+dash_low+"*  (Hacim) *"+dash_vol+"* ";
  }
  
  var botPayload = {
    text : final
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});