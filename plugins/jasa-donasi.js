let handler =  m => m.reply(`
╭─「 🧚🏻‍♂️ *DONASI* 」
│
├ PULSA / OVO / DANA / GOPAY :
├ • *082258255356*
│
├ SAWERIA
├ _https://saweria.co/nadcoffeeand_
│
├ Ownerku
├ _wa.me/6283131688812_
│
╰───「 ${packname} 」
`.trim()) // Tambah sendiri kalo mau

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler
