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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_59_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NixcbiAgICAgICAgMjUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMyLFxuICAgICAgICA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgODgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDMzLFxuICAgICAgICAzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5LFxuICAgICAgICA5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTczLFxuICAgICAgICA1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDczLFxuICAgICAgICA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NSxcbiAgICAgICAgODAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYyLFxuICAgICAgICA2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI2LFxuICAgICAgICA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZFMllNS1RqUm5wNXJGMEo5QnZuNFlTbHVGdG5KclNDV2J3UjNDUnJXbjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJlVmRqa0xRUkZ1UnVUcFg0ODlfdHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjMyOWQ0YTItZWYzMy00MWUxLWEwOTUtMWUyZjFjM2Y0MDkxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgMTYxLFxuICAgICAgMTgzLFxuICAgICAgMjQxLFxuICAgICAgMjQ0LFxuICAgICAgMTE2LFxuICAgICAgMjAxLFxuICAgICAgMjI1LFxuICAgICAgMTk0LFxuICAgICAgMzYsXG4gICAgICAxNTMsXG4gICAgICAyNDcsXG4gICAgICAxMyxcbiAgICAgIDE2NSxcbiAgICAgIDIsXG4gICAgICA5MyxcbiAgICAgIDIzNSxcbiAgICAgIDI1NCxcbiAgICAgIDExLFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI3LFxuICAgICAgMjI1LFxuICAgICAgMTA1LFxuICAgICAgMTU2LFxuICAgICAgNjIsXG4gICAgICAyLFxuICAgICAgMTkwLFxuICAgICAgMjQ2LFxuICAgICAgMTQzLFxuICAgICAgOTYsXG4gICAgICAxNTIsXG4gICAgICA5NyxcbiAgICAgIDIxOSxcbiAgICAgIDU0LFxuICAgICAgODksXG4gICAgICAxMzgsXG4gICAgICAxMDksXG4gICAgICAxNDksXG4gICAgICAxNTIsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1laOU0zQjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjUzNjkwMzY6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NDY5MDgyMjk2MzI0Mjo2NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNON2U0SVlFRUxPNzNiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVmSXhWUkh6Y3hudWpSeHJRWUVGYkRJa01IR09KVWZQYS9pdVFVNnZlRXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNzJ1QzYyWWxsOGJDY2J6ZmxEZjZnd3pQUndqRCtOMTJhM2w5YWljWEdyekJZaHlOYzI3VDZ0WlJ0bXExNE42aE1OVGZURmQram1BOUF5Z0lzMmZHQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiLzM0bjVIV0RIL3ZjVlN3SHZ5YmJ6dkU3VlFQQmlzR0lnWTZnRERtTnQvZjFxZ3FEajRJbk9tUXA4R09Pdm5ZZ29UeEdidEZoc3pqc2JHclY1RlVZQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNTM2OTAzNjo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTk1OTU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjQyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCNDIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZaHdHQVM4aC9kaSt6b2IvV2N6TFUveHZxbUdoVzZOODRla0J2dVErVTBFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwODc5MDk3MjUsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsOF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
  
