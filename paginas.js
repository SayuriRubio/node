const express =require('express');
const router = express.Router();
const path = require("path");

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../views', 'inicio.html') );
});

router.get('/formulario',(req,res)=>{
    res.sendFile(path.join(__dirname, '../views', 'formulario.html'));
});

router.get('/info_generica',(req,res)=>{
    res.sendFile(path.join(__dirname, '../views', 'informacion.html'));
});

module.exports = router;