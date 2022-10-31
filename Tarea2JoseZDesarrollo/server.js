

const canciones = require('./canciones');
const express = require('express');
const app = express();
const PORT = 3000; 
const path = require('path');

app.listen(PORT, () => { 
  console.log(`Escuchando en puerto ${PORT}!`);
});



///////ROUTER//////
app.use('/canciones', canciones);

//////////// 

app.use(express.static("public")); 

app.get('/', (req, res) => {
	res.send('Pagina principal -GET');
});

app.get('/acerca',(req, res)=> {
  res.sendFile(path.join(__dirname+'/acerca.html'));
}); 


app.use((req, res, next) => {
  res.status(404).send('Esa pagina no existe!');
});


