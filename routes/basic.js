const express=require('express');
const router=express.Router();
const fs=require('fs');
// const path=require('path');


router.use(express.json());

const filepath='./data.json';
//GET
router.get('/fetch', (req, res) =>{ 
    fs.readFile(filepath, 'utf8', (err, data) => { 
        if (err) return res.status(500).send('Error reading data'); 
        res.send(JSON.parse(data)); 
    }); 
});

//POST
router.post('/insert', (req, res) => { 
    fs.readFile(filepath, 'utf8', (err, data) => { 
        if (err) return res.status(500).send('Error reading data'); 
        const hospitals = JSON.parse(data); 
        hospitals.push(req.body); 
        fs.writeFile(filepath, JSON.stringify(hospitals, null, 2), (err) => { 
            if (err) return res.status(500).send('Error writing data'); 
            res.send('DATA added successfully'); 
        });
     });
 });

//UPDATE
router.put('/update/:id', (req, res) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading data');
         let hospitals = JSON.parse(data);
         hospitals.splice(req.params.id-1,1,req.body);
          fs.writeFile(filepath, JSON.stringify(hospitals, null, 2), (err) => {
            if (err) return res.status(500).send('Error writing data'); 
           res.send('Hospital updated successfully'); 

    }); 
 }); 
});

//DELETE
router.delete('/delete/:id', (req, res) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading data');
         let hospitals = JSON.parse(data); 
        hospitals.pop();
          fs.writeFile(filepath, JSON.stringify(hospitals, null, 2), (err) => { 
           if (err) return res.status(500).send('Error writing data'); 
           res.send('Hospital deleted successfully'); 
       });
    });
});


module.exports=router;