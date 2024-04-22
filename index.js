import express from 'express';
const app = express();
const port = 7777;


console.log('Hola mundo');

app.listen(port, ()=>{

	console.log(`escuchando en el puerto ${port}`)
});
