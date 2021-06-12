const express = require('express');
var { Event } = require('../Models/event');

exports.getProfiles = async (req, res) => {
  const events = await Event.find({approval:"approved"});
  console.log("get profiles");
  res.send(events);
};
exports.getPendingEvents = async (req, res) => {
  const events = await Event.find({approval:"pending"});
  res.send(events);
};
exports.postProfile = async (req, res) => {
    console.log("request",req.body);
    const eventName = req.body.eventName;
    const place= req.body.place;
    const organizer=req.body.organizer;
    const contact= req.body.contact;
    const startDate=req.body.startDate;
    const endDate=req.body.endDate;
    const entry=req.body.entry;
    const winning=req.body.winning;
    const email=req.body.email;
    const approval=req.body.approval;
    const poster = 'http://localhost:3000/images/' + req.file.filename; // Note: set path dynamically
    const event = new Event({
      eventName,
      place,
      organizer,
      contact,
      poster,
      startDate,
      endDate,
      entry,
      winning,
      email,
      approval
    });
    const createdEvent = await event.save();
    res.status(201).json({
      event: {
        ...createdEvent._doc,
      },
    });
  };

  exports.updateProfiles = async (req, res) => {
    var approval=req.params._id;
    console.log("approval",approval);
    await Event.findByIdAndUpdate(req.params._id, { $set: {approval:"approved"} }, { new: true,useFindAndModify:false }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
  });
  }; 