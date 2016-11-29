import { Meteor } from 'meteor/meteor';

import '../imports/lib/image.collection.js';

Meteor.startup(() => {
  // code to run on server at startup
});

pic = new Mongo.Collection('pictures');

Meteor.methods({
    saveImage(data) {
        console.log("[Server] - Save picture???"); //see if it goes inside
        pic.insert({image: data});
    }
});
