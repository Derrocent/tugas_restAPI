const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.get("/test", (req,res) => {

   })

app.get("/profil/:name/:age", (req,res) => {
   let name = req.params.name 
   let age = req.params.age 
   let response = {
      nama: name,
      umur: age
      }
      res.json(response)
   })

app.get("/persegi_panjang", (req,res) => {
   let panjang = Number(req.body.panjang)
   let lebar = Number(req.body.lebar)
   let luas = panjang * lebar
   let keliling = 2 * (panjang + lebar)

   let response = {
      panjang: panjang,
      lebar: lebar,
      luas: luas,
      keliling: keliling
      }
      res.json(response)
})

app.get("/kubus", (req,res)=> {
   let sisi = Number(req.body.sisi)
   let luas = 6 * sisi * sisi
   let volume = sisi * sisi * sisi

   let response = {
      sisi: sisi,
      luas: luas,
      volume: volume
   }
   res.json(response)
})

app.get("/balok", (req,res)=> {
   let panjang = Number(req.body.panjang)
   let lebar = Number(req.body.lebar)
   let tinggi = Number(req.body.tinggi)
   let luas = 2*panjang*lebar + 2*panjang*tinggi + 2*lebar*tinggi
   let volume = panjang*lebar*tinggi

   let response = {
      panjang: panjang,
      lebar: lebar,
      tinggi: tinggi,
      luas: luas,
      volume: volume
   }
   res.json(response)
})

app.get("/tabung", (req,res)=> {
   let jari_jari = Number(req.body.jari_jari)
   let tinggi = Number(req.body.tinggi)
   let pi = Number(3.14)
   let luas = (2 * pi * jari_jari*tinggi) + 2 * pi * jari_jari * jari_jari
   let volume = pi * jari_jari * jari_jari * tinggi

   let response = {
      jari_jari: jari_jari,
      tinggi: tinggi,
      luas: luas,
      volume: volume
   }
   res.json(response)
})

app.get("/bola", (req,res)=> {
   let jari_jari = Number(req.body.jari_jari)
   let pi = Number(3.14)
   let luas = 4 * pi * jari_jari * jari_jari
   let volume = 4/3 * pi * jari_jari * jari_jari * jari_jari

   let response = {
      jari_jari: jari_jari,
      luas: luas,
      volume: volume
   }
   res.json(response)
})

app.get("/celcius", (req,res)=>{
   let celcius = Number(req.body.celcius)
   let reamur = 4/5 * celcius
   let fahrenheit = (9/5 * celcius) + 32
   let kelvin = celcius + 273

   let response = {
      celcius: celcius,
      result: {
         reamur: reamur,
         fahrenheit: fahrenheit,
         kelvin: kelvin
      }
   }
   res.json(response)
})

app.get("/reamur", (req,res)=>{
   let reamur = Number(req.body.reamur)
   let celcius = 5/4 * reamur
   let fahrenheit = (9/4 * reamur) + 32
   let kelvin = (5/4 * reamur) + 273
   
   let response = {
      reamur: reamur,
      result: {
         celcius: celcius,
         fahrenheit: fahrenheit,
         kelvin: kelvin
      }
   }
   res.json(response)
})

app.get("/fahrenheit", (req,res)=>{
   let fahrenheit = Number(req.body.fahrenheit)
   let celcius = 5/9 * (fahrenheit - 32)
   let reamur = 4/9 * (fahrenheit - 32)
   let kelvin = (5/9 * (fahrenheit - 32)) + 273

   let response = {
      fahrenheit: fahrenheit,
      result: {
         celcius: celcius,
         reamur: reamur,
         kelvin: kelvin
      }
   }
   res.json(response)
})

app.get("/kelvin", (req,res)=>{
   let kelvin = Number(req.body.kelvin)
   let celcius = kelvin - 273
   let reamur = 4/5 * (kelvin - 273)
   let fahrenheit = (9/5 * (kelvin - 273)) + 32

   let response = {
      kelvin: kelvin,
      result: {
         celcius: celcius,
         fahrenheit: fahrenheit,
         reamur: reamur 

      }
   }
   res.json(response)
})

app.get("/decimal", (req,res)=>{
   let decimal = Number(req.body.decimal)
   let biner = decimal.toString(2)
   let octal = decimal.toString(8)
   let hexadecimal = decimal.toString(16)

   let response = {
      decimal: decimal,
      biner: biner,
      octal: octal,
      hexadecimal: hexadecimal
   }
   res.json(response)
})

app.get("/biner", (req,res)=>{
   let biner = Number(req.body.biner)
   let angka = parseInt(biner,2)
   let decimal = angka.toString(10)
   let octal = angka.toString(8)
   let hexadecimal = angka.toString(16)

   let response = {
      biner: biner,
      decimal: decimal,
      octal: octal,
      hexadecimal: hexadecimal
   }
   res.json(response)
})

app.get("/octal", (req,res)=>{
   let octal = Number(req.body.octal)
   let angka = parseInt(octal,8)
   let decimal = angka.toString(10)
   let biner = angka.toString(2)
   let hexadecimal = angka.toString(16)

   let response = {
      octal: octal,
      decimal: decimal,
      biner: biner,
      hexadecimal: hexadecimal
   }
   res.json(response)
})

app.get("/hexadecimal", (req,res)=>{
   let hexadecimal = req.body.hexadecimal
   let angka = parseInt(hexadecimal,16)
   let decimal = angka.toString(10)
   let biner = angka.toString(2)
   let octal = angka.toString(8)

   let response = {
      hexadecimal: hexadecimal,
      decimal: decimal,
      biner: biner,
      octal: octal
   }
   res.json(response)
})

app.get("/bmi", (req,res)=>{
   let bb = Number(req.body.bb)
   let tb = Number(req.body.tb)
   let bmi = bb / (tb * tb)
   let status;
   if (bmi < 18.5){
      status = "Kekurangan Berat Badan"
   }
   else if (bmi < 25){
      status = "Normal (Ideal)"
   }
   else if (bmi < 30){
      status = "Kelebihan Berat Badan"
   }
   else{
      status = "Kegemukan"
   }

   let response = {
      bb:bb,
      tb:tb,
      bmi:bmi,
      status:status
   }
   res.json(response)
})

app.get("/ganjilgenap", (req,res)=>{
   let angka = Number(req.body.angka)
   let status;
   if (angka % 2 == 0){
      status = "Angka Genap"
   }
   else if (angka % 2 == 1){
      status = "Angka Ganjil"
   }
   else{
      status = "Bukan Angka / Pecahan"
   }
   let response = {
      angka:angka,
      status:status
   }
   res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
   })