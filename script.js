/*saat tombol di klik ada 3 tahapan:
1. mendeteksi aksi klik tombol
2. mengambil angka tombol yang di klik
3. jalankan function untuk menampilkan angka di layar display*/

/*definisikan function utk memperbarui layar tampilan*/
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
  calculatorScreen.value = number
}

/*code mendeteksi adanya klik sebuah tombol: men-setting "click event" dgn event listener*/
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) =>{
  number.addEventListener("click", (event)=>{
    updateScreen(event.target.value)
  })  
})

/*definisikan variable untuk melakukan kalkulasi*/
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
