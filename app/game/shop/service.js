import Ember from 'ember';

export default Ember.Service.extend({
  shop: Ember.inject.service('game/shop'),
  currentUser: Ember.inject.service('current-user'),

  playerCanAfford(cost) {
    let availableCash = this.get('currentUser.user.cash');

    return availableCash >= cost;
  },

  buyItem(shopItem) {
    let sadUser = this.get('currentUser.user.content');

    if (sadUser.inInventory(shopItem)) {
      alert('You have already purchased this item');
      return;
    }

    if (!this.playerCanAfford(shopItem.get('cost'))) {
      alert('You do not have enough gold for this item');
      return;
    }

    sadUser.decrementProperty('cash', shopItem.get('cost'));

    // add item to inventory

    sadUser.get('inventory').addObject(shopItem);

    sadUser.save();
    return;
  },

});
