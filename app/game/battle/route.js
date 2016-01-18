import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.peekRecord('enemy', params.enemyName);
  },

  actions: {
    saveAndWin(player) {
      player.set('damage', 0);
      player.save().then(() => {
        this.transitionTo('');
      });
    },

    saveAndDie(player) {
      player.set('damage', 0);
      player.save().then(() => {
        this.transitionTo('');
      });
    },
  },
});
