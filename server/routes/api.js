const express = require('express')
const router = express.Router()
const experiences = require('../models/experiences')
const multer = require('multer')

//storage details
const storage = multer.diskStorage({
    //destination
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    //filename
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

//upload parameters for multer
const upload = multer({ storage: storage })

router.get('/', (req, res) => {
    experiences.find().then((data) => {
        res.json(data)
    }).catch((err) => {
        console.log('No data found/error')
    })
})


router.post('/', upload.single('files'), async (req, res, next) => {
    // console.log(req.file)
    const userExp = new experiences({
        location: req.body.location,
        images: req.file.filename,
        cost_of_travel: req.body.costTravel,
        heritage_of_location: req.body.heritage,
        places_to_visit: req.body.placesVisit,
        ease_of_transportation: req.body.slctTransportation,
        safety: req.body.sftyLvl,
    })
    await userExp.save().then(()=>{
        res.send('Inserted');
    }).catch((err)=>{
        res.send('Not inserted: '+ err.message);
    })
})



module.exports = router