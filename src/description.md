# Description of this trivia bot

## How Slash Commands Get Registered (npm run register)
__Defining a slash command:__

Each slash command has the following:
- A name (e.g. /rules)
- A description
- Optional parameters (options, choices, subcommands)
- A handler function in the bot code that executes when the command is invoked

In our codebase, commands are defined in a structured command class format:

      {
        name: "rules",
        description: "Describes the rules of the game",
         type: 1,
         integration_types: [0, 1],
         contexts: [0, 1, 2],
      };

and are built in their own javascript files (rules.js, test.js, and so on).

__Registering a command:__  
Commands are registered globally meaning that new and updated commands are available across all the servers trivia bot is in (typically takes up to 1 hour to propagate). When commands are registered discord sends these definitions to their external api (https://discord.com/api/v10/applications/<some_application_id>/command). This process is automated using discords software development kit in the discord.js file in trivia bot's utilities. Trivia Bot also has CI/CD where we the developers commit changes and merge branches while the bot is able to pull the latest versions for us to test.

__When a command gets registered:__
* Once registered, Discord adds our commands to the command list when users type / in any server trivia bot is in.
* Discord validates the commands (so users can’t run malformed commands), and stores them globally in its backend.
* Users who have access to trivia bot can now see the commands autocomplete in the Discord UI

__When a user invokes a slash command:__
* Discord sends an interaction payload (JSON) to trivia bot’s interaction endpoint hosted on our own server or locally on our own machines with ngrok. 
* The bot parses the command data, matches it to its internal handler registry, and calls the correct function.
* The bot responds within 3 seconds (via deffered response) with either: An ephemeral message (only the invoking user can see) or a public message in the channel.

__Simplified:__

[Developer] → defines slash command → 
[Registration Script] → POSTs to Discord API → 
[Discord] → lists command in chat UI → 
[User] → invokes slash command → 
[Discord API] → sends interaction payload → 
[Bot Listener] → executes handler → 
[Bot] → sends message response

_This architecture ensures commands are validated before execution, improving safety and user interaction._

## Test Command
   Once all the commands are established and the user types out the test command, but before they select it. 
   The compiler will go to the method test_command in commands.js in config to pull the name and description to display to the user. 
   Then, once the test command is called. The compiler will go to test.js in commands that is in handlers. There, it retrieves the text to 
   send back to the user, as well as the command to go to the getRandomEmogi() method, which is in helpers.js, which is in the utils folder. This method 
   will add a random emoji to the text that is being sent to the user. Once that is completed, the message will be sent to the user. This message will look 
   like: Hello World (random emoji).
      
## Challenge Command

Once the challenge command is typed but not selected, it will go to the commands.js class, but the challenge_command method, which is all in config to pull the name and description to display to the user. Then, once the command is selected, the compiler will move from commands.js in config to challenge.js, which will call for a method called extractUserId in helpers.js, which is in the utils folder. This method will give the user ID to the challenge.js, which will take it and then call game.js to get the options to the user. Once the user picks a choice challenge.js, it will go to a method called creategame in gamestates.js before returning to challenge.js. From there, it will utilize the InteractionResponseType from the discord-interactions library to help ask the user if they accept the challenge. Although the message will come from createChallengeMessage in message builders.js. While in that method, it will call a createbutton method, which is in challenge.js. This button will read "Accept". 

Once the user clicks on it, we will move to index.js in components, where it will look for the action that was taken. Since ours is the Accept button being selected, it will move to buttons.js in components. Here, it will call getShuffledOptions in game.js, which is in the services folder. In this method, it uses the getChoices method that is in the same class to collect all the options and descriptions, and then returns to buttons.js. Where it will use that information to call the createChoiceSelectionMessage method in messagebuilders.js, which is in the utils folder. There, it creates the dropdown menu to ask the user's opponent what their choice will be, but with the descriptions under the options. Once this is done, it will be sent to the user's opponent, and the original challenge message will be deleted. Once the user selects their choice, we will go back to the index.js file in components, where we will again look for the action taken. index.js will send us over to selectMenus.js file in the components folder, where it will retrieve the game ID from the extractUserId method in helpers.js in the utils folder. Using that data, it will call calculateGameResult in the game.js file in the service folder, where it will determine who won the game before being sent back to selectmenus.js and then being sent back to the same file for getResults, which will send back the results formatted the way the user will see them. After collecting that info, it will call the updateUserRecord method in the userrecords.js file in the service folder. There, it will take the results and then update the record log for when the command record is called. After that is conducted, it will go back to selectmenus.js, where it calls to delete the game with the deleteGame method in gamestate.js file, which is in the service folder. From there, it will conduct the final steps of sending the results to createResultMessage, which is a method in the messagebuilders.js file in the utils folder. There, it will create the textdisplay and return to the selectMenus.js file, where it will send the results to Discord. Then, it will use createWebhookEndpoint in the helpers.js file to update the ephemeral message. From there, it will call Discord to send over a message created with the help of createSimpleMessage in messageBuilders.js and the getRandomEmoji method in the helpers.js file. With this message set and assuming Discord responded, it is sent, and the user will see one text saying "Nice Choice [random emoji]" and another that will show the results of the match. An example of this is "[userid]'s language generates its next creators [userid]'s art".

## Rules Command

Once the Rules command is typed but not selected, it will go to the commands.js class, but the rules_command method, where it will give the description of what it is. When selected, it will go to the rules.js file in the commands folder. Here, it will send over the rules to the game and then call createSimpleMessage in the messageBuilders.js file in the utils folder, where it will create a textdisplay not visible to the user.

## Record Command

Once the Record command is typed but not selected, it will go to the commands.js class, but the record_command method, where it will give the description of what it is. When selected, it will stay in this method to give options which will be who played. When the user is selected, it will go to the record.js file in the commands folder. Here, it will call the extractUserId method in helpers.js, which is in the utils folder, to get the user's ID. Then it will call the getUserRecord method in the userRecords file, which is in the services folder. There, it will send back the record for the record.js to calculate total games and then call calculateWinRate in the userRecords file, which is in the services folder. There, it will use the data to find the percentage of times the user won a game and then send that percentage back to record.js. Where it will format the text and send it to the user, and create a textdisplay not visible to the user.

