# alexa-whoami

A Node module that is a reusable voice component for an Alexa skill. Here's what it sounds like:

User (to your skill): who am I?
Your skill: You are G...X...U...Q...5...C.

Here's how you use it:

1. Include the whoami intents in your intents schema. 
2. Include the whoami samples in your samples.txt. 
3. Call the whoami code when the user expresses the WhoAmI intent.

# Intent Schema

Alexa-whoami defines an intent that must appear in your Alexa intent schema. You can get the definition like this: 

<code>require('whoami').intents</code>

# Samples

Alexa-whoami defines samples that must appear in your Alexa samples file. You can get them like this: 

<code>require('whoami').samples</code>

# Calling the Code

When the user expresses the WhoAmI intent, you'll get an IntentRequest from Alexa. Call the alexa-whoami code when you get this request:

<code>var responseText = require('whoami').WhoAmI(request);</code>

ResponseText will look something like this:
<code>You are G...X...U...Q...5...C.</code>

You'll need for include this in a full response to Alexa.