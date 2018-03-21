const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`CatBot has arrived!`);
  client.user.setActivity('Use "cb help"')
});
  
client.login('NDA5MDYyODA0Njc1NDkzODkw.DXsBJQ.-OrcsHamjg4npXoGKw24WIAKnUE');
 
client.on('message', msg => {
  if (msg.author.bot) {
    return
  }
    
  if (msg.content === 'fuck') {
    msg.channel.send('You');
    console.log(msg.author.username + " Just got flamed by fuck " + " in " + msg.guild)
  }

 
  if (msg.content === 'cb what is my avatar') {
    msg.reply(msg.author.avatarURL);
    console.log(msg.author.username + " Just got his pic link " + " in " + msg.guild)
  }

 
  if (msg.content === 'cb ily') {
    if (msg.author.id !== "285506997548220416") {
      return msg.channel.send("I don't")
    }else{
    msg.channel.send('I love you too Mew :heart:');
    console.log("I just friendzoned someone or loved you " + " in " + msg.guild)
  }
}

 
    if (msg.content === 'cb cat') {
     var cats = ["Cat1.jpg", "Cat2.jpg", "Cat3.jpg","Cat4.jpg","Cat5.jpg","Cat6.jpg","Cat7.jpg","Cat8.jpg","Cat9.jpg","Cat10.jpg","Cat11.jpg","Cat12.jpg","Cat13.jpg","Cat14.jpg","Cat15.jpg","Cat16.jpg","Cat17.jpg","Cat18.jpg","Cat19.jpg","Cat20.jpg","Cat21.jpg","Cat22.jpg","Cat23.jpg","Cat24.jpg","Cat25.jpg","Cat26.jpg","Cat27.jpg","Cat28.jpg","Cat29.jpg","Cat30.jpg","Cat31.jpg","Cat32.jpg","Cat33.jpg","Cat34.jpg","Cat35.jpg","Cat36.jpg","Cat37.jpg","Cat38.jpg","Cat39.jpg","Cat40.jpg",]
     var randomAnswer = cats[Math.floor(Math.random() * cats.length)];
     msg.channel.send({file: randomAnswer});
    console.log(msg.author.username + " Just got a cat pic " + " in " + msg.guild)
    }

   
  if (msg.content === 'cb help') {
    msg.reply ('Help is coming!')
msg.author.send ("Hi, I am a bot made by MeW, teached by TankTripper and MusicSound/MusicWave. :smile:, Heres what I can do: ```Use 'cb cat' to get cat pictures``` ```Use 'cb what is my avatar' to get your discord picture URL``` ```Use 'cb ily' or 'fuck' or 'PIZZA' or 'OREOS' and the bot will respond with a funny reply``` ```Use 'cb do you love me?' and test your luck in the bots heart``` ```Use 'cb marry me' and get flamed lol``` ```Use 'cb can i be your ex?' and get flamed again lol``` ``` Use 'cbsay text' and cb will repeat what you said and delete your message``` ```The bot also sends logs of your name, server you used the command in and which command to the developer, just so you know.``` ```You can use 'cbeval text' to do cool stuff with the bot, availible in my own private server only to prevent abuse.``` ``` You can use 'cbdm number' to delete messages in a channel, you need to have S rank to be able to delete it though.``` ```More to be added```");
console.log(msg.author.username + " Just got helped " + " in " + msg.guild)
  }

 
  if (msg.content === 'cb do you love me?') {
     var loves = ["Yes", "No", "50% only"]
     var randomAnswer = loves[Math.floor(Math.random() * loves.length)];
     msg.channel.send(randomAnswer)
    console.log(msg.author.username + " Just got loved or hated or both " + " in " + msg.guild)     
  }

 
  if (msg.content === 'cb marry me') {
    msg.channel.send ('No fuck you');
    console.log(msg.author.username + " Just got flamed by marriage " + " in " + msg.guild)
  }


  if (msg.content === 'cb PIZZA') {
    msg.channel.send ('Pizza delivery is here! :pizza:');
    console.log(msg.author.username + " Just bought a pizza " + " in " + msg.guild)
  }


  if (msg.content === 'cb can i be your ex?') {
  msg.channel.send ('You already are you retard.');
  console.log(msg.author.username + " Just got flamed by ex " + " in " + msg.guild)
}


 if (msg.content === 'cb') {
  msg.channel.send ('Right here!');
  console.log(msg.author.username + " Just called me " + " in " + msg.guild)
}


 if (msg.content === 'OREOS') {
   msg.channel.send ("I LOVE OREO/S, Here's an oreo! https://i.imgur.com/o1vE0VZ.png");
   console.log(msg.author.username + " Just got an Oreo " + " in " + msg.guild)
}   






client.on('message', msg=> {

  const args = msg.content.split(" ").slice(1);
 if(msg.content.startsWith('cbsay ')) {
    msg.delete()
    var saytext = args.join(" ");
    msg.channel.send(saytext)
    console.log(msg.author.username + " Just made me say something " + " in " + msg.guild)
}
});






 let cont = msg.content.split(" ")
 let args = cont.slice(1);
 if (msg.content.startsWith('cbdm ')) {
  async function purge() {
   msg.delete()
   if (!msg.member.roles.find("name", "S Ranked Member - Founder")) {
    msg.channel.send("You need to be an S ranked member to do this!")
    return;
   }
   if (isNaN(args[0])) {
     msg.channel.send("Please enter a number of messages to delete!")
     return;
   }
   const fetched = await msg.channel.fetchMessages({limit: args[0]});
   console.log(msg.author.username + " Just deleted messages " + " in " + msg.guild)
   msg.channel.bulkDelete(fetched)
   .catch(error => msg.channel.send('Error: ${error}'));
  }
  purge();
};






   const params = msg.content.split(" ").slice(1);

  if (msg.content.startsWith('cbeval ')) {
   if(msg.author.id !== '285506997548220416') 
   return msg.channel.send('Only usable by MeW because of abusers like Nidus');
  try {
    const code = params.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

    msg.channel.send(evaled), {code:"xl"};
    console.log(msg.author.username + " Just used eval " + " in " + msg.guild)
  } catch (err) {
    function clean(text) {
      if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }
    msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
 }
 });
 
 client.login(proccess.env.bot_TOKEN);
 
 
