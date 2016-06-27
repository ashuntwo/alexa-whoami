var should = require('should');
var whoami = require('.');

describe('WhoAmI', function() {
	describe('WhoAmI', function() {
		it('should say all of a short ID', function() {
			var request = {
			    "session": {
			        "user": {
			            "userId": "short"
			        }
			    }
			};

			var response = whoami.WhoAmI(request);
			response.should.equal("You are s...h...o...r...t.");
		});
		it('should say the end of a long ID', function() {
			var request = {
			    "session": {
			        "user": {
			            "userId": "amzn1.echo-sdk-account.SI4SLUDETS2FKMS6FGXUQ5C"
			        }
			    }
			};

			var response = whoami.WhoAmI(request);
			response.should.equal("You are G...X...U...Q...5...C.");
		});
	});
});