import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Pictures = new Mongo.Collection('pictures');

Meteor.methods({
    saveImage(data) {
        console.log("[Server] - Save picture???");
        Pictures.insert({image: data});
    }
});
