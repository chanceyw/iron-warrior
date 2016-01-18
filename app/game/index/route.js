import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    reset(player) {
      player.setProperties({
        damage: 0,
        cash: 0,
        experience: 0,
        inventory: [],
      });

      player.save();
    },
  },
});
