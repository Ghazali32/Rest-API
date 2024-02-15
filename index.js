const express = require('express');
const app = express()
const User = require('./database')
app.use(express.json())

app.post('/signup', async(req,res) => { //This endpoint is for sign up of the user
    
    const email = req.body.email
    const password = req.body.password
    const age = req.body.age
    const country = req.body.country
    
    
    const isPresent = await User.findOne({ //checking if the user already exist in the Database with the same email
        email : email,
    })

    if(isPresent)
    {
        res.status(411).json({
            error : 'User already exists' 
        })
        return 
    }
    
    const user = await User.create({ // creating a new user
        email : email,
        password :password,
        age : age,
        country : country
    })
    
    if(!user)
    {
        res.status(411).json({
            error : 'Error occured while signing in' 
        })
        return
    }
    
    res.json({
        email : user.email,
        age : user.age, 
        country : user.country
    })
})


app.get('/allUser' , async (req,res) => { //Endpoint to get all the users present in the dataBAse the result will not display the passwords of the user
    const user = await User.find({} ,  { password: 0})

    if(!user)
    {
        res.json({
            error : 'Some error occurred'
        })
        return
    }

    res.json({
        user
    })
})

app.put('/user:id' , async (req,res) => { //Endpoint to update the value of user by entering the user id As parameter
    const {id} = req.params
    try{
        const existingUser = await User.findByIdAndUpdate(id , req.body);
        const user = await User.findById(id)
        res.json({
            existingUser,
            UpdatedUser : user
        })
    }
    catch(error)
    {
        res.json({
            error
        })
    }
})

app.delete('/delete:id', async (req,res) => {
    
    const {id} = req.params
    
    try{
        const deletedUser = await User.findByIdAndDelete(id)
        res.json({
            deletedUser
        })
    }
    catch(e)
    {
        res.json({
            error : e
        })
    }
})

app.listen(3000, ()=>{
    console.log('Rest API Server active')
})
