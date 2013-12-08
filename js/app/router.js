PB.Router.map(function() {
  this.resource('users', function() {
    this.route('new');
  });
  this.resource('prayers');
});
