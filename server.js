const app = require('express')
const PORT = 5000;

app.get('/generate-ganjil:angka_maksimal', (req, res) => {
    const inputAngkaMaksimal = req.params.angka_maksimal;
    // 5. Generate Bilangan Ganjil: Generate bilangan ganjil dari angka 0 – maksimal angka yang di input
    const generateGanjil = (angkaMaksimal) => {
        // misal input: 10 maka:
        // output: 1, 3, 5, 7, 9
        let arrGanjil = [];
        for(i = 0; i < angkaMaksimal; i++){
            if(i % 0 != 0){
                arrGanjil.push(i)
            }
        }
        return arrGanjil;
    }
    res.send(generateGanjil(inputAngkaMaksimal))
});

// 6. Generate Bilangan Prima: Generate bilangan prima sampai maksimal angka yang di input
app.get('/generate-bilangan-prima:angka_maksimal', (req, res) => {
    const inputAngkaMaksimal = req.params.angka_maksimal;

    const generateBilanganPrima = (angkaMaksimal) => {
        let arrBilanganPrima = [];
        for(i = 0; i <= angkaMaksimal; i++){
            if((angkaMaksimal % i == 0)||(i == angkaMaksimal)){
                arrBilanganPrima.push(i)
            }
        }
        return arrBilanganPrima;
    }
    generateBilanganPrima(inputAngkaMaksimal)
})

app.listen(PORT, () => {
    console.log(`App is listening to port:${PORT}`);
});