import Ember from 'ember';

export default Ember.Service.extend({
  shop: Ember.inject.service('game/shop'),
  currentUser: Ember.inject.service('current-user'),

  playerCanAfford(cost) {
    let availableCash = this.get('currentUser.user.cash');

    return availableCash >= cost;
  },

  buyItem(shopItem) {
    if (!this.playerCanAfford(shopItem.get('cost'))) {
      alert('You do not have enough gold for this item');
      return;
    }

    let sadUser = this.get('currentUser.user.content');

    sadUser.decrementProperty('cash', shopItem.get('cost'));
    sadUser.save();
    return;
  },

});
