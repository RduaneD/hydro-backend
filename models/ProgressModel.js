//const mongoose = require('mongoose');

//const progressSchema = new mongoose.Schema({
  //userId: {
    //type: String, // Bisa diisi nanti kalau sudah ada sistem login
    //required: false,
  //},
  //image: {
    //type: String, // base64 atau URL gambar
    //required: true,
  //},
  //title: {
    //type: String,
    //required: true,
  //},
  //description: {
    //type: String,
    //required: true,
  //},
  //date: {
    //type: Date,
    //required: true,
  //}
//}, {
  //timestamps: true
//});

//module.exports = mongoose.model('Progress', progressSchema);


import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  date: String
}, { timestamps: true });

const Progress = mongoose.model('Progress', progressSchema);

export default Progress;