exports.samples = [
	"who am i",
	"who i am"
];

exports.intents = [
	{
      "intent": "WhoAmI"
    }
];

exports.WhoAmI = function(request) {
	var userId = request.session.user.userId;
	var length = userId.length;
	var tail  = length > 6 ? userId.substring(length - 6, length) : userId;
	return 'You are ' + tail.split('').join('...') + '.';
};