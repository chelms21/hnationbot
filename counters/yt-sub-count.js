const ytch = require('yt-channel-info');
const channelId = 'UCwPVNaN5u-W_UFUe3Ogr0Og';
  
module.exports = async (client) =>{
    const guild = client.guilds.cache.get('793594859499028520');
    setInterval(() =>{
      const channel = guild.channels.cache.get('816418374170968105');
      ytch.getChannelInfo(channelId).then((response) => {
        channel.setName(`Sub Count: ${response.subscriberCount}`);
      }).catch((err) => {
        console.log(err)
      });
    }, 5000);
}
