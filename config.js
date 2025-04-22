const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "prince_md-eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0NQYTJLWlpJMWNPZEp6NDFTNGVkaUtveHg5MWQ4SUI0MjE1WXgyalFVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3lONW9hSFJmQ21kUWlBNi9VWkZ5UU5QeVVDWVFJR3N2SC9PWU9FSzIxOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSDc5a1UvVS9IUVc3Qm9yekpZcFViUzZmSFM5VGpja1Vjek5ReTBPRlY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1SW9ZT2hnemRQamN4cDQ3Q3dWY1MrNUM1dkZhN0lYRU5VTDJwQ2g1Mkg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllJb0xxcGk3RU5YUm5Ja0FmZFpaR2wzR3lPMDRLc012Qk9nUXdLUExhRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko5RmxUdnBXbFhWLzRuRnY2Y2RUMkQ2d1VCRVZ1K25rYzk5a0NzeUovaHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NMSGdndGdaaXB3VW1mUXdINUEvMmZkZTJZQklOWjI2c2ZpVVZLekxXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZE5OTkRLSTd0bUdLdTFFMXpNVFdwU1dqZFVmU3BJZXJNSVIwZzJRcmxsTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFOa1FoU2hSMk43T1BEakZEM2JsUDBpZEFiTHNDdVQwd2xBeEV6andZZ3FKKzkwb1VVd3FISS9IeEVaWlNGa2hMTHhjV1ZBQlQ4SVk3YWxwcWRtSGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6InlrVzR5NjV1RDh0d255V0VJM0hIQXk1ZkxEMEVMVjNpc1poanBTMnZhYWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZSM3ZXVEJpU05Pam10dTFYRmVDc1EiLCJwaG9uZUlkIjoiY2MwYjIwYjMtZjZiYS00NWQ3LWE2MGItOGRhYzMzOTJhYTYwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcrNDdvREJ1RXlqa2RDV3BuWExBUCtWYTZEcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJieS9jWis4eFZmRVl6Vm90eFpZMm9ZbjRuTVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWkZORzc3NUUiLCJtZSI6eyJpZCI6IjUwOTMxNzM1NDE0OjQzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLT3V3NU1DRUk2c244QUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvcUVUaUdhdnpnVFJtNURBMDNqbkF2UlplZ1RnWjZ0VzZjMFVvaGwvb1VVPSIsImFjY291bnRTaWduYXR1cmUiOiJOK2RrSGFmUGpSMWUxdlVpbTBLSU5lK0N2Q3BpNzJsclgyQ3ZGdnd2eXVJVWZOQndpQWpNZ1E3Tzd0N3crSXVWL1NmbkFmbGJTQVpwVWZGTjJPOG1EQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRXJGZnF2U1NSRVp2bEpHK3BRWmhqc3h6dXdCdC9PVmM4UzFseURRU0RpUTl3S3JXYXd1TG1vV3BtWjBHamg5S1B4TzhZYjhwYm5Pald3NUhadk11aHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzMTczNTQxNDo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmNmhFNGhtcjg0RTBadVF3Tk40NXdMMFdYb0U0R2VyVnVuTkZLSVpmNkZGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ1MzQ0MDI4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFaQyJ9,
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY PRINCE-MDX *",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "PRINCE MDX",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "31735414",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ZENITSU",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ  ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/kzfne8.jpeg",
// add img for alive msg
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
// menu image 
WELCOME_ENABLED: process.env.WELCOME_ENABLED || "true",
    // welcome group members 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "31735414",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
