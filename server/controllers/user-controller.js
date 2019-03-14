const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.auth = async (req, res) => {
    try {
        let user = null;
        if (req.body.username) {
            user = await User.findOne(
                {username: req.body.username},
                {firstName: 1, lastName: 1, username: 1, password: 1}
            );
            if (!user){
                res.status(401).json({message: 'Incorrect username'});
                return;
            }
        } else if (req.body.email) {
            user = await User.findOne(
                {email: req.body.email},
                {firstName: 1, lastName: 1, username: 1, password: 1}
            );
            if (!user){
                res.status(401).json({message: 'Incorrect email'});
                return;
            }
        } else throw new Error();
        // const validPassword = await bcrypt.compare(req.body.password, user.password);
        // if (!validPassword) res.status(401).json({message: 'Incorrect password!'});
        // else {
            const token = jwt.sign(
                {userId: user._id, username: user.username},
                process.env.JWT_KEY,
                {expiresIn: parseInt(process.env.SESSION_EXPIRE)}
            );
            const {_id, password, ...rest} = user.toObject();
            res.status(200).json({
                message: `Welcome ${user.firstName}`,
                token: token,
                expiresIn: process.env.SESSION_EXPIRE,
                user: {
                    id: _id,
                    ...rest,
                },
            });
        // }
    } catch(err) {
        console.log(err);
        res.status(403).json({
            message: 'Login failed!',
        });
    }
};

exports.register = async (req,res) => {
    try {
        const {password, ...rest} = req.body;
        const hash = await bcrypt.hash(password, 10);
        const newUser = new User({
            password: hash,
            ...rest,
        });
        await newUser.save();
        res.status(201).json({
            message: 'User successfully created!',
        })
    } catch(err) {
        let message = (err.name === 'ValidationError')?
            'User already exists!' : 'Registration failed!';
        res.status(401).json({
            message: message,
        });
    }
};

exports.getUsers = async (req, res) => {
  users = await User.find({});

  res.json(users.map(user => {
    const {_id, ...rest} = user.toObject();
    return {
        id: _id,
        ...rest,
    };
  }));
};

exports.validateUsername = async (req, res) => {
    try{
        const match = await User.findOne({username:req.body.username});
        let message = match? 'invalid' : 'valid';
        res.status(200).json({
            message: message,
        });
    } catch(err){
        res.status(404).json({
            message: 'Error validating username'
        })
    }
};

exports.validateEmail = async (req, res) => {
    try{
        const match = await User.findOne({email:req.body.email});
        let message = match? 'invalid' : 'valid';
        res.status(200).json({
            message: message,
        });
    } catch(err){
        res.status(404).json({
            message: 'Error validating username'
        })
    }
};
