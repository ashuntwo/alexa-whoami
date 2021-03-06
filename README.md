# alexa-whoami

A reusable voice component for an Alexa skill. Here's what it sounds like:

User (to your skill): who am I?  
Your skill: You are G...X...U...Q...5...C.

The way it works is that it speaks the last 6 characters of the Alexa-generated userId value that is always passed to a skill. As a result, it works in every Alexa skill and gives every user a name that is very likely to be unique among all users of a skill. As a skill developer, you may find this helpful when a user gives you a problem report and you need to correlate your logs and data with the user's experience. With this module, you can ask the user to say "who am i?" and tell you the result, making the user easy to find in your logs.

Here's how you use it:

1. Include the whoami intents in your intents schema. 
2. Include the whoami samples in your samples.txt. 
3. Call the whoami code when the user expresses the WhoAmI intent.

# Intent Schema

Alexa-whoami defines an intent that must appear in your Alexa intent schema. You can get the definition like this: 

<code>require('alexa-whoami').intents</code>

# Samples

Alexa-whoami defines samples that must appear in your Alexa samples file. You can get them like this: 

<code>require('alexa-whoami').samples</code>

# Calling the Code

When the user expresses the WhoAmI intent, you'll get an IntentRequest from Alexa. Call the alexa-whoami code when you get this request:

<code>var responseText = require('alexa-whoami').WhoAmI(request);</code>

ResponseText will look something like this:  
<code>You are G...X...U...Q...5...C.</code>

You'll need to include this in a full response to Alexa.