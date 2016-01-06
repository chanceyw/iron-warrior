import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
let { RSVP } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: Ember.inject.service('current-user'),

  beforeModel() {
    this._super(...arguments);
    return new RSVP.Promise((resolve) => {
      this.get('currentUser.user').then(() => {
        return resolve();
      });
    });
  },

  model() {
    return this.get('currentUser.user');
  },
});
