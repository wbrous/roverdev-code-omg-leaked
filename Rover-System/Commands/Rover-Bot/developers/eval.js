const configuration = require('../../../configuration')
const Discord = require("discord.js")
module.exports = {
  name: "ping",
  category: "information",
  cooldown: 2,
  Description: "",
  RunCommand: async (Roverdev, message, args, executor, language, embed, database) => {

    if (message.author.id !== "663442537222242306") return

    let code = args.join(" ")
    if(!args[0]) return message.reply({embeds:[new Discord.EmbedBuilder().setColor("Red").setDescription(`You have to provide atleast **1** argument to use this`)]})
  try{
  let evaled = eval(code)
  
  const {
      inspect
    } = require(`util`);
  
    let string = inspect(evaled);
    if(string.includes(Roverdev.token)) return message.reply({content:`It looks like, the bot token is presented in here, I won't show you it.`})
  //if(string.includes(client.token)) return interaction.editReply({content:`You dumb on purpose? I will never give you my token you stupid ass bitch.`})
  
  message.reply({content:`**The result of the evaluation:**`,files: [new Discord.AttachmentBuilder(Buffer.from(`${require('util').inspect(evaled)}`), {name:'eval.json'})],embeds:[new Discord.EmbedBuilder()
  .setColor("Yellow")
  .setTitle(`Evaluation`)
  .setDescription(`**The code:**\n \`\`\`\nr?eval ${code}\n\`\`\`\n\n**Type of result:** \`${typeof(evaled)}\``)
  
  ]})
  }catch(e){
  message.reply({content:`**The result of the evaluation:**`,files: [new Discord.AttachmentBuilder(Buffer.from(`${require('util').inspect(e)}`), {name:'eval.json'})],embeds:[new Discord.EmbedBuilder()
      .setColor("Yellow")
      .setTitle(`Evaluation`)
    .setDescription(`**The code:**\n \`\`\`\nr?eval ${code}\n\`\`\`\n\n**Type of result:** \`${typeof(e)}\``)
  
  ]}) 
  }
  }
}