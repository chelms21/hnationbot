module.exports = async (client) =>{
    const guild = client.guilds.cache.get('793594859499028520');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('815986512205316160');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    }, 5000);
}
