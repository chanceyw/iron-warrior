import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.peekRecord('enemy', params.enemyName);
  },

  actions: {
    saveAndWin(player, enemy) {
      player.set('damage', 0);
      enemy.set('damage', 0);
      player.save().then(() => {
        this.transitionTo('game');
      });
    },

    saveAndDie(player, enemy) {
      player.set('damage', 0);
      enemy.set('damage', 0);
      player.save().then(() => {
        this.transitionTo('game');
      });
    },
  },
});
