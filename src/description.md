<!DOCTYPE html>
<html>
  <body>
    <H2><span style = “color: blue,”>Test Command</span></H2>
      <p> 
        Once all the commands are established and the user types for the test command but before they select it. 
        The compiler will go to commands.js in config to pull the name and description to display to the user. 
        Then once the test command is called. The compiler will go to test.js in commands that is in handlers. There it retrieves the text to 
        send back to the user as well as the command to go to the getRandomEmogi() method which is in helpers.js which is in the utils folder. This method 
        will add a random emoji to the text that is being sent to the user. Once that is completed the message will be sent to the user. This message will look 
        like: Hello World (random emoji).
      </p>
      <br>
    <H2><span style = “color: blue,”>Challenge Command</span></H2>
      <p>
      Once the challenge command is types but not selected it will go to commands.js in config to pull the name and description to display to the user. 
      Then once the command is selected, the compiler will move from commands.js in config to challenge.js which will call for a method in helpers.js which is 
      in utils folder. This method will give the user id to the challenge.js which will take it and then call to game.js to get the options to the user. Once the 
      user picks 

game.js in service. There it will collect the choices for the user to select, then it moves back to commands.js in config. Were it displays the options to the user  

This is when it well move to waiting for the user to select their choice. Once the user selects their choice and enter 
      </p>

</body>
</html>




