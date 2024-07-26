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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_24_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM0LFxuICAgICAgICA0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk3LFxuICAgICAgICA3LFxuICAgICAgICA1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDU5LFxuICAgICAgICA1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDU2LFxuICAgICAgICAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY2LFxuICAgICAgICA2MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDk0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzksXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY1LFxuICAgICAgICA4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDc4LFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU0LFxuICAgICAgICA5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM0LFxuICAgICAgICA2MixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlIzdHY3V1phd2p6YVlqTS9VazQ3dE5SVG5nM3c3V1dOQjJBWGx2NThXSHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAyNTM2OTAzNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjkyN0I0Q0M3Q0M0NTlERjREMzc3MzY2RkY5MjkyMkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDExMDcxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpMUWpkYnZWVDNtR2JWNl82aFVWeEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODQyY2U3MTAtZTVmNi00YzNiLWE2ODgtMTg1Zjc5OWI5MjYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDc5LFxuICAgICAgMTE3LFxuICAgICAgNTIsXG4gICAgICAxNTYsXG4gICAgICAxNzQsXG4gICAgICAxNjUsXG4gICAgICAxNTEsXG4gICAgICAxMjYsXG4gICAgICA3MixcbiAgICAgIDU0LFxuICAgICAgMTMyLFxuICAgICAgNDQsXG4gICAgICAxODgsXG4gICAgICAxMzUsXG4gICAgICAxMTQsXG4gICAgICAyMDAsXG4gICAgICA2MixcbiAgICAgIDE3OSxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICAxNjcsXG4gICAgICAyMDAsXG4gICAgICAxNTEsXG4gICAgICAxNjQsXG4gICAgICAxNCxcbiAgICAgIDI0NyxcbiAgICAgIDE1NCxcbiAgICAgIDY1LFxuICAgICAgMTMwLFxuICAgICAgNSxcbiAgICAgIDIyMyxcbiAgICAgIDE3OCxcbiAgICAgIDE0NCxcbiAgICAgIDcxLFxuICAgICAgMjM0LFxuICAgICAgNTAsXG4gICAgICAyMDgsXG4gICAgICAyMjYsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1pMWjZOM0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjUzNjkwMzY6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NDY5MDgyMjk2MzI0MjoyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPN052UGdCRUxTYmo3VUdHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJwN1NjS0JjcGVqUW01QkxXTDZWYnh3YUFuZUU0OEk3UUdjMGZLaFd1aE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib1l6UUQ3WmtJb2crcGo2NnJPdXFqZ0tEQzMwcWdQbE9raVl6ZkdLdmNSZkgyTXVYVEFNQmZ1VXVaWVgveDBZVnhhSGVhNEFtUjZXQWFkZ3lRM3ZvQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQUZPU0NVYlg4UnVlVlF6RjREQld2ZFRSdDFxd1hTbDU2N1Q5SlR1SHZGbzdoUWc1YTJzQUdNKzkvZFhCaFptbkxabkFNb09zWlJUSllBNzcycExkaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNTM2OTAzNjoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjAxMTA2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJGNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkY1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidHpvbkJNd2RkcXp1aGRIMENyUUZNVk5KKzhRbkVBU0tYZFoyRXNGMmMxZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MjEwODY3MDIsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsOF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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

