var Discord = require("discord.io");
var logger = require("winston");
var auth = require("./auth.json");
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
 colorize: true
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client({
 token: auth.token,
 autorun: true
});
bot.on ("ready", function (evt) {
 logger.info ("connected");
 logger.info ("Logged in as: ");
 logger.info ("TermieBot + " - (" +0424+ "));
});
bot.on('message', function (user, userID, channelID, message,evt) {
	// Bot needs to know if it will execute a command
	// It will listen for messages that start with '!'
	if (message.substring(0,1) == '!') {
		var args = message.substring(1).split('	');
		var cmd = args[0]
		
		args= args.splice(1);
		switch(cmd) {
			// !ping
			case 'ping':
				bot.sendMessage({
					to: channelID,
					message: "Pong!"
					});
			break;
				case 'dokkan':
				    bot.sendMessage({
					to: channelID,
					message: "Dokkan!"
				    });
			// case commands go here 	
		}
	}
});	
