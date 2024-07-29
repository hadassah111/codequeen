const express = required('express');

const router = express.Router();

//CRUD
//GET METHOD
router.get('/posts',(req,res) => {
    res.send('posts page')
})

module.exports = router;