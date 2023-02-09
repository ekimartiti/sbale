
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`

 ID : @${sender.split('@')[0]}
 Nama : ${namenya}
 Premium : ${premnya}
 
 untuk chatting dengan ai gunakan command .ai
sebelum caption, contoh .ai selamat pagi

       *MENU UTAMA*
.menu _daftat menu
.owner _info owner
.ai _open ai
.s _sticker
.foto _image pencarian
.cekupdate _info update terbaru bot
      *GRUP MENU*
.fitnah
      *RANDOM MENU*
.pinterest  
.manga _manga pencarian
.infogempa 
.wikipedia 
    *DWONLOAD MENU*   
~.tiktok~    ~.ytmp3~
~.ytm4~
 `
}

exports.ekibotmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
 *BOT MENU*
───────────────────
*C͞H͞A͞T͞T͞I͞N͞G͞ B͞O͞T͞*⍤💬
.si ⟹simi bot
.ai ⟹open ai
 ᐵ *M͞E͞N͞U͞ U͞T͞A͞M͞A͞*▶️
.menu  ⟹daftar menu
.infobot
.rules
*A͞N͞O͞N͞Y͞M͞O͞U͞S͞*👤
.menfes ⟹pesan rahasia
*S͞T͞I͞C͞K͞E͞R͞*🎴
.s  ⟹sticker
.sgif ⟹gifsticker
.smeme ⟹sticker text atas|bawah
.swm ⟹sticker wm|wm
.mixemoji ⟹sticker emoji+emoji
______ text ke sticker
.ttp 
.ttp2
.attp
*A͞U͞D͞I͞O͞ E͞D͞I͞T͞*🔧
.tupai
.fast
.smooth
.blown
.deep
.fat
.robot
.slow
.reverse 
*G͞A͞M͞E͞* 
.suit ⟹ gunting,batu,kertas
.teka_teki
*G͞R͞U͞P͞ M͞E͞N͞U͞* ᐖ👥👤
.fitnah 
.kick 
.antilink 
.setdec 
.setppgc 
.setnamagc 
.infogrup 
.grup ⟹ on/off
.gantilinkgc 
.welcome ⟹on/off
.delete ⟹hapus pesan
.tagsemua 
.santet 
.gruplink 
.tagsembunyi 
*T͞O͞O͞L͞S͞ M͞E͞N͞U͞*✏️
.tourl ⟹ upload file
.tomp3 ⟹ video ke audio
.tomp4 ⟹ gif ke video
.toimg ⟹ sticker ke image
.tts ⟹ ubah teks ke suara
.translate  ⟹ ind to eng
____________ubah link
.bitly_short
.tinyurl_short
*I͞N͞F͞O͞R͞M͞A͞S͞I͞*🗞️
.wikipedia  
.jadwaltv 
.infogempa 
.gempanow 
.gempa 
*S͞T͞A͞L͞K͞ A͞K͞U͞N͞*🕵️
.epep ⟹ intip nick akun free fire
*C͞U͞P͞U͞ M͞E͞N͞U͞*😨
.virtex 
.bug  
*S͞E͞A͞R͞C͞H͞I͞N͞G͞ M͞E͞N͞U͞*🔎
.manga ⟹manga pencarian
.ytq  ⟹youtube pencarian  
.foto ⟹image pencarian
.spq ⟹sportify pencarian
.lirik ⟹lirik lagu
*D͞W͞O͞A͞N͞L͞O͞A͞D͞ M͞E͞N͞U͞*📁
.tiktok 
.ytmp3 
.ytmp4 
.pinterest 
.sportify
───────────────────
 `
}

exports.cekupdate = () => {
return`
*E͞K͞I͞ B͞O͞T͞ U͞P͞D͞A͞T͞E͞* 🆕

NEW MENU
.ytmp3
.ytmp4
.ytq
.tiktok
.tts
 `
}

exports.rulesBot = () =>{
return` *R͞U͞L͞E͞S͞*
1. jangan spam bot&telpon bot
ya geys ya sanksi block permanen
2. jangan kirim virtex atau semacamnya hargai bot biar awet
3. jangan kirim hal berbau 4no
4. jika menemukan fitur yang error silakan hubungi owner
───────────────────
`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment pulsa*
Number: 081548907132
A/N: __

*Payment Dana*
Number: 082180238576
A/N: angga gat

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}

exports.infoOwner = () =>{
return`──「 *INFO OWNER* 」──




:* -
 `
}