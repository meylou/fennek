var Discord = require('discord.io');
var logger = require('winston');
//var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.BOT_TOKEN,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
var guides = {
	'ana': "",
	'bastion': "",
	'doomfist': "",
	'd.va': "",
	'genji': "",
	'hanzo': "",
	'junkrat': "",
	'lucio': "",
	'mccree': "",
	'mei': "",
	'mercy': "https://us.battle.net/forums/en/overwatch/topic/20759226316",
	'moira': "",
	'orisa': "",
	'pharah': "",
	'reaper': "",
	'reinhardt': "",
	'roadhog': "",
	'soldier76': "",
	'sombra': "",
	'symmetra': "",
	'torbjorn': "",
	'tracer': "",
	'widowmaker': "",
	'winston': "",
	'zarya': "",
	'zenyatta': "",
	'blizzardworld': "none yet",
	'dorado': "http://www.metabomb.net/overwatch/map-guides/overwatch-dorado-guide-09-12-2016",
	'eichenwalde': "http://www.metabomb.net/overwatch/map-guides/overwatch-eichenwalde-map-guide-20-09-2016",
	'hanamura': "https://www.overbuff.com/blog/2016-10-30-sp0h-s-map-callouts-hanamura\nhttp://www.metabomb.net/overwatch/map-guides/overwatch-hanamura-map-guide",
	'hollywood': "https://www.overbuff.com/blog/2016-12-11-sp0h-s-map-callouts-hollywood",
	'horizonlunarcolony': "https://youtu.be/pMnhPGQJOF0\nhttp://www.metabomb.net/overwatch/map-guides/horizon-lunar-colony-guide-20-06-2017",
	'ilios': "http://www.metabomb.net/overwatch/map-guides/overwatch-ilios-map-guide",
	'junkertown': "http://www.metabomb.net/overwatch/gameplay-guides/junkertown-guide",
	'kingsrow': "https://www.overbuff.com/blog/2016-11-22-sp0h-s-map-callouts-king-s-row",
	'lijiangtower': "http://www.metabomb.net/overwatch/map-guides/overwatch-lijiang-tower-guide",
	'nepal': "http://www.metabomb.net/overwatch/map-guides/overwatch-nepal-guide",
	'numbani': "http://www.metabomb.net/overwatch/gameplay-guides/overwatch-numbani-guide",
	'oasis': "http://www.metabomb.net/overwatch/map-guides/overwatch-oasis-map-guide-30-11-2016",
	'route66': "https://www.overbuff.com/blog/2016-10-23-sp0h-s-map-callouts-route-66",
	'templeofanubis': "http://www.metabomb.net/overwatch/map-guides/overwatch-temple-of-anubis-guide",
	'volskayaindustries': "https://www.overbuff.com/blog/2016-11-11-sp0h-s-map-callouts-volskaya-industries\nhttp://www.metabomb.net/overwatch/map-guides/overwatch-valskaya-industries-map-guide",
	'watchpointgibraltar': "http://www.metabomb.net/overwatch/gameplay-guides/overwatch-watchpoint-gibraltar-guide",
	'bodyblocking': "https://www.overbuff.com/blog/2017-10-05-work-that-body-a-guide-to-body-blocking-in-overwatch",
	'dive': "http://www.metabomb.net/overwatch/gameplay-guides/dive-comp-guide-heroes-tips-and-strategy-advice",
}
var healingArray=["You penetrate yourself you uneducated potato.", "Go find a health pack.", "KOMM TO SE FUCKING LEDGE SEN!", "Your friendly neighbourhood healer, the payload, awaits your visit."];
var lineIndex=0;
function healingLine(){
    return healingArray[lineIndex++ % healingArray.length];
}

bot.on('message', function (user, userID, channelID, message, evt) {
    // It will listen for messages that will start with `!`
	message = message.toLowerCase ();
    if (message.substring(0, 1) == '!' && channelID == '377424583990444047' ) {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        //args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
			case 'zen':
			case 'zenyatta':
			case 'benyatta':
				bot.sendMessage({
					to: channelID,
					message: 'https://cdn.discordapp.com/attachments/377137661778984962/377505628999909389/benyatta.gif'
				});
			break;
			 case 'guide':
                var keys = Object.keys(guides);
                if (args[1] == null || keys.indexOf(args[1])==-1){
                    var guidestr = "";
                    for (var i = 0; i<keys.length; i++){
                        guidestr = guidestr + keys[i];
                        if (i!=keys.length-1) guidestr+='\n' 
                    }
                    bot.sendMessage({
                        to: channelID,
                        message: 'I need more information to work with.\n'+
                        'Please specify hero, map or general guides.\n'+
                        'All guides:\n`'+guidestr+'`'
                    })
                break;
                }
                else{
                    bot.sendMessage({
                        to: channelID,
                        message: 'Hello <@'+userID+'>, I have found the following guide/s for you:\n'+ guides[args[1]]
                    })
                }
            break;
			case 'fennek':
				bot.sendMessage({
					to: channelID,
					message: 'BONJOUR FROM THE OTHER SIDE'
				})
			break;
			case 'ineedhealing':
			bot.sendMessage({
					to: channelID,
					message: healingLine()
				})
			
			
			break;
         }
     }
});
