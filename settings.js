const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: EXPANUP" //ur yt chanel name
global.socialm = "GitHub: https://github.com/EXPAN-UP/EXPANUP" //
global.location = "INDIA, DELHI" //ur location

//new
global.botname = 'EXPANUP-BOT' //ur bot name
global.ownernumber = '919718294568' //ur owner number
global.ownername = 'SHRUTI' //ur owner name
global.websitex = "https://EXPLOREDREAM.IN"
global.wagc = "https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk"
global.themeemoji = '🪀'
global.wm = "EXPANUP Inc."
global.botscript = 'https://github.com/EXPAN-UP/EXPANUP' //script link
global.packname = "Sticker By"
global.author = "EXPANUP \n\n EXPANUP"
global.creator = "919267936126@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["919267936126, 917065163779"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
