exports.basi = (pushname, pesannya) => {
let nama = pushname
function basi() {
var info 
var info2
const omg = ['bale bale','cingkabek cingka','bulek sabalekok','bulek','sabalekok']
const hai = ["hai", "halo", "yo", "haii", "hei", "hallo", "sapa", "salam"];
const pertanyaanNama = [
'nama',
 'siapa nama kamu?',
 'kamu siapa?',
 'kamu siapa nih?',
 'mau cerita nama kamu dong?',
 'kamu siapa sih?',
 'kamu siapa ya?',
 'kamu bisa ceritakan nama kamu?',
 'kamu punya nama apa?',
 'kamu punya nama gimana?',
 'kamu punya nama siapa?',
 'kamu bisa cerita nama kamu?',
 'kamu punya nama apa sih?',
 'kamu punya nama berapa?',
 'kamu punya nama siapa nih?',
 'kamu punya nama apa ya?',
 'kamu punya nama gimana nih?',
 'kamu punya nama siapa sih?',
 'kamu punya nama apa dong?'
];

var ind = {
nama : 'Tanpa Nama',
umur : 'none',
}
info = pesannya.toLowerCase()
	if ( pesannya == 'ef'){
reply ('halo kak' + ' ' + nama + '\nada yang bisa aku bantu')
}
else if (hai.includes(info)) {
	reply ('halo juga kak '+' ' + nama )
}
else if (pertanyaanNama.includes(info)) {
 reply (`aku hanya sebuah bot kak ${nama} panggil aja aku ${ind.nama} `)
}
else if (omg.includes(info)) {
 conn.sendMessage(from,{text:` ${omg[0]}`})
  conn.sendMessage(from,{text:` ${omg[1]}`})
}else{  
( !pesannya )
 return
           }
      }
      return basi()
}