const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc GET All items
// @access Public 
router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
})

// @route POST api/items
// @desc Create a Item
// @access Public 
// In actual JSON the keys and the values should be in double quotes
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
})

// @route DELETE api/items/:id
// ex)http://localhost:5000/api/items/5c539c15c0be55eb4ff726c5
// @desc Delete A Item
// @access Public 
router.delete('/:id', (req, res) => {
   Item.findById(req.params.id)
   .then(item => item.remove().then(() => res.json({success: true})))
   .catch(err => res.status(404).json({success: false}));
})



//export vs exports typo resulted in error...
module.exports = router;