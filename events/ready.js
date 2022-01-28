const client = require("../main.js");

const activities = [
    {name: "sw!", type: "PLAYING"},
    {name: "Owner: TechMLW", type: "LISTENING"},
    {name: "I am searching my dp. Want 1 hour", type: "WATCHING"}
];

client.once("ready", () => {
    console.log("Done");
    client.user.setPresence( {status: "idle", activity: activities[0]});
    let activity = 1;
    setInterval(() => {
       if(activity > 2) activity = 0;
       client.user.setActivity(activities[activity]);
       activity++; 
    }, 1000);
});   