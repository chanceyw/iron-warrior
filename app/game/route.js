import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
let { RSVP } = Ember;

const inventoryItems = [
  {
    id: 1,
    name: 'Iron Sword',
    img: '/img/iron.png',
    damage: 15,
    cost: 200,
    classFor: 'Warrior',
  },
  {
    id: 2,
    name: 'Diamond Sword',
    img: '/img/diamond.png',
    damage: 28,
    cost: 700,
    classFor: 'Warrior',
  },
  {
    id: 3,
    name: 'Fire Spell',
    img: '/img/fire-icon.png',
    damage: 28,
    cost: 700,
    classFor: 'Mage',
  },
];

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: Ember.inject.service('current-user'),

  beforeModel() {
    this._super(...arguments);
    return this.store.pushPayload('inventory-item', {inventoryItems});
  },

  model() {
    return this.get('currentUser.user');
  },
});
