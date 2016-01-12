import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['battle-container'],
  currentWeapon: null,
  enemy: null,
  currentUser: Ember.inject.service('current-user'),
  actions: {
    select(item) {
      this.set('currentWeapon', item);
    },
  },
});
