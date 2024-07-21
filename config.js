const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/476208407d14e0aa2d2bd.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://wa.me/qr/O2VNE2KEHPJZB1"                       // put your app url here,
global.email ="havefun777444@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/qr/O2VNE2KEHPJZB1";
global.website=process.env.GURL || "https://wa.me/qr/O2VNE2KEHPJZB1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d3363fddb7a5143013385.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝐓𝐑𝐈𝐋𝐋𝐒-𝐌𝐃" 


global.devs = "2347025369036" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347025369036";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347025369036";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/476208407d14e0aa2d2bd.mp4" // "null" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_02_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAzNixcbiAgICAgICAgODksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3LFxuICAgICAgICA2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDUsXG4gICAgICAgIDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3LFxuICAgICAgICAxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyLFxuICAgICAgICA4NixcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODksXG4gICAgICAgIDU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwLFxuICAgICAgICA1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQNTNXNjh5d1FKMVJFUFZtQ0ZySU56aXpLWlc0YkVUcE14bDRlVHBsQmJBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMjUzNjkwMzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc0NjdBNzQ3QkUwMzkwQzA2M0MwOEE1RjA3Mjg0N0JEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTU4NDkzNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6Y3dyRkhZZVNRQ3dHRFlfM2QxX3BRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ5NDM3NzJkLWM2MTgtNDMwNS04NzU1LWUyY2VhMmNlNDZjMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICA2OSxcbiAgICAgIDE4OSxcbiAgICAgIDE0NixcbiAgICAgIDE0MixcbiAgICAgIDE0LFxuICAgICAgMTYxLFxuICAgICAgOTUsXG4gICAgICAxMDgsXG4gICAgICAxMzUsXG4gICAgICAxMixcbiAgICAgIDEwLFxuICAgICAgMjMyLFxuICAgICAgODksXG4gICAgICAyNDUsXG4gICAgICAyNTUsXG4gICAgICA5NCxcbiAgICAgIDIxNyxcbiAgICAgIDE2MSxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDEyNCxcbiAgICAgIDIyOCxcbiAgICAgIDE5OCxcbiAgICAgIDE1NixcbiAgICAgIDI5LFxuICAgICAgMTcyLFxuICAgICAgNTgsXG4gICAgICA0NyxcbiAgICAgIDIxMixcbiAgICAgIDkyLFxuICAgICAgMTQsXG4gICAgICAxOTIsXG4gICAgICAyMzcsXG4gICAgICAxNjIsXG4gICAgICAzMixcbiAgICAgIDEyLFxuICAgICAgMTEzLFxuICAgICAgNDIsXG4gICAgICAxMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREczOFpaTFZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjUzNjkwMzY6OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NDY5MDgyMjk2MzI0Mjo5MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMS3JneVVRbjVyMXRBWVlEaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFvTHExd3dleDRPNWNqL1Q1Zlg2RU9LbS9oazRHekxULzEwa2g5NVJQaDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicnkzb0xwemJBczUwS3c1VktsVW1qR2dqM1lWWVZlMDBkN0NkRDRQcWZRa2RhNU9iQ0VJK0hsS041UWh4aDVReXhLREx1dTJlQ3lzYzlkd2c3Si9RQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUHhEclZyTlV1K3ZIRVlFTWpmYXZZTmlkTDRRVnpGK3JVN2ZKcVlJNnF4dWI0MWFmRTgxOStwOStnaFV5bmNZcXpuWjBSc0dVdVpxcHliZ09KUkJBRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNTM2OTAzNjo5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1ODQ5MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPVzlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9XOS5qc29uIjogIntcImtleURhdGFcIjpcIjJJdUxIWm95d3dac0xCSGt6Rngvc3BCb1Npd092Rk1WZ2w2ajFZZXE3b0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Nzc2NDkzMzAsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "𝐓𝐑𝐈𝐋𝐋𝐒-𝐌𝐃" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝗧𝗥𝗜𝗟𝗟𝗦",
  packname: process.env.PACK_NAME || "𝐓𝐑𝐈𝐋𝐋𝐒-𝐌𝐃",
  botname : process.env.BOT_NAME  || "𝐓𝐑𝐈𝐋𝐋𝐒-𝐌𝐃",
  ownername:process.env.OWNER_NAME|| "𝗧𝗥𝗜𝗟𝗟𝗦",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "TRILLS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://telegra.ph/file/d3363fddb7a5143013385.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  
