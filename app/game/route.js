import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('character', {
      name: 'Mr. David',
      cash: 100,
      experience: 50,
      characterClass: 'Warrior',
      damage: 10,
    });
  },
});
