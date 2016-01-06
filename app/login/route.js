import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    loginUser({email, password}) {
      this.get('session').authenticate('authenticator:login', email, password).catch((reason) => {
        console.log(reason);
      });
    },
  },
});
