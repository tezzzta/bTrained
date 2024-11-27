const express  =  require ('express');
const app = express();

// app.get('/',(req,res)=> {
//     res.send('Hola')
// })

app.set('view engine', 'ejs');

app.use('/', require('./view/rout'));

app.listen(3000, () => {
    console.log("estamos bien, server corriendo en http://localhost:3000")
});