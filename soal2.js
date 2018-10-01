//2

  // pada bulan tanggal 1 pada bulan october 2019 jatuh pada hari senin
  // buatlah sebuah program yang menampilkan nama hari berdasarkan input tanggal pada bulan dan tahun yang sama

  // contoh 1 (tanggal = 2):
  // hari selasa

  // contoh (tanggal = 8):
  // hari senin

  // contoh (tanggal = 17):
  // hari rabu



var tanggal = 20;

if(tanggal === 1 || tanggal === 8 || tanggal === 15 || tanggal === 22 || tanggal === 29) {
  console.log('SENIN')
} else if(tanggal === 2 || tanggal === 9 || tanggal === 16 || tanggal === 23 || tanggal === 30) {
  console.log('SELASA')
} else if(tanggal === 3 || tanggal === 10 || tanggal === 17 || tanggal === 24 || tanggal === 31) {
  console.log('RABU')
} else if(tanggal === 4 || tanggal === 11 || tanggal === 18 || tanggal === 25) {
  console.log('KAMIS')
} else if(tanggal === 5 || tanggal === 12 || tanggal === 19 || tanggal === 26) {
  console.log('JUMAT')
} else if(tanggal === 6 || tanggal === 13 || tanggal === 20 || tanggal === 27) {
  console.log('SABTU')
} else if(tanggal === 7 || tanggal === 14 || tanggal === 21 || tanggal === 28) {
  console.log('MINGGU')
}
