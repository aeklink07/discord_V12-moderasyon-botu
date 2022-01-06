const categorylist = require("fs")
  .readdirSync("./komutlar/")
  .filter(s => s !== "private");
for (const category of categorylist) {
  const Discord = require("discord.js");
  const { MessageButton } = require("discord-buttons");

  exports.run = async (client, message, args) => {
    const buttonDelete = new MessageButton()
      .setStyle("red")
      .setLabel("Clear")
      .setID("buttonDelete");

    let embed = new Discord.MessageEmbed()
      .setColor("#000001")
      .setTitle("Komutlar")
      .addField(`Komutlar`, `Botun Test Komutu`)
      .setDescription("Komutlara ulaşmak için aşağıdan kategori seçin.");
    message.channel
      .send(embed, {
        buttons: [
          new MessageButton()
            .setStyle("blurple")
            .setLabel("Genel")
            .setID("10"),
          new MessageButton()
            .setStyle("blurple")
            .setLabel("Moderasyon")
            .setID("20"),
          new MessageButton()
            .setStyle("blurple")
            .setLabel("Eğlence")
            .setID("30"),
          new MessageButton()
            .setStyle("blurple")
            .setLabel("Oyunlar")
            .setID("40"),
          new MessageButton()
            .setStyle("blurple")
            .setLabel("Sunucu")
            .setID("50")
        ]
      })
      .then(async function(helpMessage) {
        helpMessage
          .createButtonCollector(
            user => user.clicker.user.id == message.author.id
          )
          .on("collect", async button => {
            if (button.id == "buttonDelete") {
              message.delete().then(helpMessage.delete());

              button.reply.defer();
            } else if (button.id == "1") {
              embed.setTitle("Komutlar");
              embed.setDescription(``);
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Genel")
                    .setID("10"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Moderasyon")
                    .setID("20"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Eğlence")
                    .setID("30"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Oyunlar")
                    .setID("40"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("Sunucu")
                    .setID("50")
                ]
              });

              button.reply.defer();
            } else if (button.id == "10") {
              embed.setTitle("Genel");
              embed.setDescription("deneme");
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("red")
                    .setLabel("↩️")
                    .setID("1"),
                  new MessageButton()
                    .setStyle("green")
                    .setLabel("➡️")
                    .setID("11"),
                ]
              });

              button.reply.defer();
            } else if (button.id == "11") {
              embed.setTitle("Genel");
              embed.setDescription("deneme");
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("red")
                    .setLabel("↩️")
                    .setID("1"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("⬅️")
                    .setID("10"),
                ]
              });

              button.reply.defer();
            } else if (button.id == "20") {
              embed.setTitle("Moderasyon");
              embed.setDescription(
                client.commands
                  .filter(cmd => cmd.conf.kategori === "moderasyon")
                  .map(
                    cmd =>
                      `:white_small_square: - **y!${cmd.help.name}** ${cmd.help.description}`
                  )
                  .join("\n ")
              );

              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("red")
                    .setLabel("↩️")
                    .setID("1"),
                  new MessageButton()
                    .setStyle("green")
                    .setLabel("➡️")
                    .setID("21"),
                ]
              });

              button.reply.defer();
            } else if (button.id == "30") {
              embed.setTitle("Eğlence");
              embed.setDescription(
                client.commands
                  .filter(cmd => cmd.conf.kategori === "eğlence")
                  .map(
                    cmd =>
                      `:white_small_square: - **y!${cmd.help.name}** ${cmd.help.description}`
                  )
                  .join("\n ")
              );
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("↩️")
                    .setID("1"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("2")
                    .setID("2"),
                  new MessageButton()
                    .setStyle("green")
                    .setLabel("3")
                    .setID("3")
                ]
              });

              button.reply.defer();
            } else if (button.id == "40") {
              embed.setTitle("Oyunlar");
              embed.setDescription(
                client.commands
                  .filter(cmd => cmd.conf.kategori === "oyunlar")
                  .map(
                    cmd =>
                      `:white_small_square: - **y!${cmd.help.name}** ${cmd.help.description}`
                  )
                  .join("\n ")
              );
              helpMessage.edit(embed, {
                buttons: [
                  new MessageButton()
                    .setStyle("red")
                    .setLabel("↩️")
                    .setID("1"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("2")
                    .setID("2"),
                  new MessageButton()
                    .setStyle("green")
                    .setLabel("3")
                    .setID("3")
                ]
              });

              button.reply.defer();
            } else if (button.id == "50") {
              embed.setTitle("Sunucu");
              embed.setDescription(
                client.commands
                  .filter(cmd => cmd.conf.kategori === "sunucu")
                  .map(
                    cmd =>
                      `:white_small_square: - **y!${cmd.help.name}** ${cmd.help.description}`
                  )
                  .join("\n ")
              );
              helpMessage.edit(embed, {
                buttons: [
new MessageButton()
                    .setStyle("blurple")
                    .setLabel("↩️")
                    .setID("1"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("2")
                    .setID("2"),
                  new MessageButton()
                    .setStyle("blurple")
                    .setLabel("3")
                    .setID("3")
                ]
              });

              button.reply.defer();
            }
          });
      });
  };
}

exports.conf = { aliases: [] };
exports.help = { name: "yardım" };
