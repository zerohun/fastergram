if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    images: function(){
      return Images.find().fetch().reverse();
    }
  });
  Template.body.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    },
    'change .file': function(event){
      var fsFile = event.target.files[0];
      Images.insert(fsFile, function(error, fileObj) {
      });
      return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
