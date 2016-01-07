import Ember from 'ember';

export default Ember.Route.extend({
  shop: Ember.inject.service('game/shop'),
  currentUser: Ember.inject.service('current-user'),

  model() {
    return this.store.peekAll('inventory-item');
  },

  actions: {
    buyItem: function(shopItem) {
      this.get('shop')
        .buyItem(shopItem);
    },

    addMoney(amount) {
      let user = this.get('currentUser.user.content');

      user.incrementProperty('cash', amount);
      user.save();
    },
  },
});
