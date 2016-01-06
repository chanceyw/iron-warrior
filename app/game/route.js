import Ember from 'ember';
let { RSVP } = Ember;

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),

  beforeModel() {
    return new RSVP.Promise((resolve) => {
      this.get('sessionUser.user').then(() => {
        return resolve();
      });
    });
  },

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
