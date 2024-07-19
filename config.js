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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_11_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NyxcbiAgICAgICAgODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NCxcbiAgICAgICAgNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNixcbiAgICAgICAgNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDksXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI4LFxuICAgICAgICA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0LFxuICAgICAgICA3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAxLFxuICAgICAgICA3NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJveCtDWXJvRzRWMlpmMHo3a0wraHJMMHdqL095cy9jMW1xRGN3YUZOcUxzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRR3dhZ0lQR1JDLXQyaEhRazZfa0JBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgyZDBiNjgyLTYxMzctNDRhNi04MjczLWU1NTc4N2I1ODg0ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICAxNjAsXG4gICAgICAyMzksXG4gICAgICAyMzQsXG4gICAgICAxODUsXG4gICAgICAyMTIsXG4gICAgICAxODEsXG4gICAgICAzOSxcbiAgICAgIDE0NixcbiAgICAgIDk5LFxuICAgICAgMTAsXG4gICAgICAxMDUsXG4gICAgICA0OSxcbiAgICAgIDIwMCxcbiAgICAgIDExNyxcbiAgICAgIDk5LFxuICAgICAgMTIzLFxuICAgICAgMTk1LFxuICAgICAgNSxcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICA3MSxcbiAgICAgIDE0NSxcbiAgICAgIDkyLFxuICAgICAgMjExLFxuICAgICAgMTI1LFxuICAgICAgMjYsXG4gICAgICAxMyxcbiAgICAgIDEzNSxcbiAgICAgIDc2LFxuICAgICAgOTQsXG4gICAgICA2NixcbiAgICAgIDI0NCxcbiAgICAgIDI0LFxuICAgICAgMTU4LFxuICAgICAgMjE5LFxuICAgICAgMTU1LFxuICAgICAgMjIwLFxuICAgICAgMjM2LFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlk1QUNXOUZYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI1MzY5MDM2OjczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjQ2OTA4MjI5NjMyNDI6NzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEtJakpvQkVLMmo2TFFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1SWtmM0tJUmtadjBaUmFDUUpyTzB2RFk2SkhONHBHL3pxMUF5YlVDbFVvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFmRHVObWVJd1FKcVhlRmVXUlFTb2lrazFJRVJQUmdkby9RMTZHUjhiN052enZGUnJXMTdlVlMxUnBIMkRCTzFQNlJpb0tsZWpEUVpFT0tNWlNQbkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdOa1hVNGdrdXZBTFJlL20zQXlhb2puZC9uM2ZUdVo5MU9Mb3RINVhBVGFhNXNsTS9OVDQyRisxeTA1eEc5WnJxbzN2eThBMEU4WXI3M0pWTVFmVmdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjUzNjkwMzY6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzczMTAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRlBiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGUGIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHUjc1U1VKWVpTUDEwNFh1MXk0VStsUjdReTB3R3hLWlJXc0Z2Zy9VeGdJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyMzE1OTA4OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
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
  
