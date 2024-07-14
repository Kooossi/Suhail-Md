const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/476208407d14e0aa2d2bd.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_31_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM4LFxuICAgICAgICA2LFxuICAgICAgICA5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDk5LFxuICAgICAgICA0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc0LFxuICAgICAgICA3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg2LFxuICAgICAgICA3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDgxLFxuICAgICAgICA0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NixcbiAgICAgICAgMTYzLFxuICAgICAgICA1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4LFxuICAgICAgICA4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDM084WUtqN0xOTHp3cERpc1pPdXo5ZXV5YVlaaVFHN3VEbldrS2c1bUhNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1Y05wNUZORlQ2dU1ydUdhUkVKQjJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFlYmYwNzFlLTVkOWEtNGIyNi05NDkxLTdjMDA3MDI4ZTgxMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICA3MCxcbiAgICAgIDE2NCxcbiAgICAgIDE1OSxcbiAgICAgIDE5OCxcbiAgICAgIDE0LFxuICAgICAgMzIsXG4gICAgICAxMzcsXG4gICAgICAyMTQsXG4gICAgICAzMixcbiAgICAgIDgxLFxuICAgICAgMTE2LFxuICAgICAgMjA0LFxuICAgICAgMTM2LFxuICAgICAgODAsXG4gICAgICAyMjEsXG4gICAgICAyMTUsXG4gICAgICAxNjksXG4gICAgICAyNDIsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICAxNjIsXG4gICAgICA3NyxcbiAgICAgIDEzMixcbiAgICAgIDE2MCxcbiAgICAgIDE0NixcbiAgICAgIDExMCxcbiAgICAgIDk0LFxuICAgICAgNjUsXG4gICAgICAxMDgsXG4gICAgICAxMzksXG4gICAgICAxMTEsXG4gICAgICA0NixcbiAgICAgIDExMyxcbiAgICAgIDEwNyxcbiAgICAgIDE4OSxcbiAgICAgIDE2LFxuICAgICAgMTUzLFxuICAgICAgNixcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktFQzVQQlhaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI1MzY5MDM2OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjQ2OTA4MjI5NjMyNDI6NjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjNlNElZRUVNNmN6TFFHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1Zkl4VlJIemN4bnVqUnhyUVlFRmJESWtNSEdPSlVmUGEvaXVRVTZ2ZUVzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVvV1JnbnZKNjdLbEVSbGE4cUVQM1hSbTMzdXk2d01FNW5LcExHaGQrbk15OTErU0NuZko5K2VJUzVPS0tqR0k5QW1mVzFKZ3dxS3Y4N0RkWGpPYUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRQRnlCdWNSM2pQeERKd0VvZ1J2TlhqSWtoWXppTFZsZXpCR21rQmdvS2ZtcC93VkM0UDc2Y2EwWU9qQmwwNTduUHdDT2MxRi9ZNER2ZU1zVnMvSWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjUzNjkwMzY6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDkxMzQ5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUI0MlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjQyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWWh3R0FTOGgvZGkrem9iL1djekxVL3h2cW1HaFc2Tjg0ZWtCdnVRK1UwRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDg3OTA5NzI1LFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
  LANG: ( process.env.THEME ||  "LUFFY"  ).toUpperCase(),



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
