const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 5000;

// Express middleware
app.use(cors())

app.get('/',(req, res) => {
    res.json('Hello')
});

app.get('/generate-bilangan-ganjil/:angka_maksimal', (req, res) => {
    const inputAngkaMaksimal = req.params.angka_maksimal;
    
    // Validasi angka
    if(typeof(inputAngkaMaksimal) != String){
        // Generate Bilangan Ganjil: Generate bilangan ganjil dari angka 0 – maksimal angka yang di input
        const generateGanjil = (angkaMaksimal) => {
            // misal input: 10 maka:
            // output: 1, 3, 5, 7, 9
            let arrGanjil = [];
            for(i = 0; i < angkaMaksimal; i++){
                if(i % 0 != 0){
                    arrGanjil.push(i)
                };
            };
            return arrGanjil;
        };

        res.json({
            'ganjil_generated': generateGanjil(inputAngkaMaksimal)
        });
    }
});

// 6. Generate Bilangan Prima: Generate bilangan prima sampai maksimal angka yang di input
app.get('/generate-bilangan-prima/:angka_maksimal', (req, res) => {
    const inputAngkaMaksimal = req.params.angka_maksimal;

    // Validasi angka
    if(typeof(inputAngkaMaksimal) != String){
        const generateBilanganPrima = (angkaMaksimal) => {
            let arrBilanganPrima = [];
            for(i = 0; i <= angkaMaksimal; i++){
                if((angkaMaksimal % i == 0)||(i == angkaMaksimal)){
                    arrBilanganPrima.push(i)
                };
            };
            return arrBilanganPrima;
        };
        
        res.json({
        'prima_generated': generateBilanganPrima(inputAngkaMaksimal)  
        });
    }
});

// Tersisa 1 soal yaitu nomor 4 :(
let generate_segitiga = (angkaInput) => {
    // == Angka input mempunyai type data berupa string untuk mengambil length dari inputan.
    let inputParsed = parseInt(angkaInput);
    console.log(angkaInput.repeat(2))
    for(let i = 1; i <= angkaInput.length; i++){
        console.log(i)
    }
}

generate_segitiga('1345000')

app.listen(PORT, () => {
    console.log(`App is listening to port:${PORT}`);
});