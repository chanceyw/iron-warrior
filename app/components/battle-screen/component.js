import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['battle-container'],

  enemy: null,
  currentUser: Ember.inject.service('current-user'),
});
