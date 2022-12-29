const mongoose = require('mongoose');
const db = require("../models");
const { user } = require('../models');
// Kullanıcı modeli
const User = db.user;
const Food =db.food

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    Food.find()
    .then(food => {
        res.send(food)

    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })
  };
  
  exports.adminBoard = (req, res) => {
    User.find()
    .then(user => {
        res.send(user)

    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })
  };
  

