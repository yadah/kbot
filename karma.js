var Bot = require('./bot');
var config1 = require('../config1');
var bot = new Bot(config1);

console.log("Karma Bot has started");


//get date string for today's date (e.g. '2011-01-01')
function datestring () {
  var d = new Date(Date.now() - 5*60*60*1000);  //est timezone
  return d.getUTCFullYear()   + '-'
     +  (d.getUTCMonth() + 1) + '-'
     +   d.getDate();
};


setInterval(function() {
  bot.twit.get('followers/ids', function(err, reply) {
    if(err) return handleError(err)
    console.log('\n# followers:' + reply.ids.length.toString());
  });
  var rand = Math.random();

// pull in 20 tweets
//
	if(rand <= 0.55){
		
			 
	}
        
    if(rand <= 0.55) { //  make a friend
    bot.mingle(function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name;
      console.log('\nMingle: followed @' + name);
    });
  } else {                  //  prune a friend
    /*bot.prune(function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name
      console.log('\nPrune: unfollowed @'+ name);
    });*/
  }
}, 60000);

// Error Handler
function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.data);
}