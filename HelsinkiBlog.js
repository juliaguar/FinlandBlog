Comments = new Meteor.Collection('comments');


if (Meteor.isClient) {
  console.log("I am client");
  Template.commentssection.comments = function () {
    comments = Comments.find({}, {sort: {date: -1}}); // [{content: "Hallo"}. ...]
    console.log("Rendering comments template.")


    return comments;
  };

  Template.commentssection.events({
    'submit form.commentform': function(e) {
      console.log('Publicar button pressed.');
      e.preventDefault();
      var now = new Date();
      Comments.insert({
        content: $('#content').val(),
        date: now,
        dateString: now.getDate() + "." + now.getMonth() + '.' + now.getFullYear()
      });

    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
