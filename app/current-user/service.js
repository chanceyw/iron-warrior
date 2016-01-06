import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  user: Ember.computed('session.isAuthenticated', function() {
    if (this.get('session.isAuthenticated')) {
      return DS.PromiseObject.create({
        promise: this.get('store').queryRecord('character', {current: true}),
      });
    }
  }),
});
