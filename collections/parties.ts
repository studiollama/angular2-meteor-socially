export var Parties = new Mongo.Collection('parties');
if (Meteor.isServer) {
   

    Parties.allow({
        insert: function () {
            var user = Meteor.user();
            return !!user;
        },
        update: function () {
            var user = Meteor.user();
            return !!user;
        },
        remove: function () {
            var user = Meteor.user();
            return !!user;
        }
    });
}