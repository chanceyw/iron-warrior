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

const monsters = [
  {
    id: 'training',
    name: 'Wabbit',
    damage: '10',
    healthpoints: '45',
    img: '/img/bunny.png',
  },
  {
    id: 'newb',
    name: 'Goblin',
    damage: '45',
    healthpoints: '100',
    img: '/img/goblin.png',
  },
  {
    id: 'gettingthere',
    name: 'Undead',
    damage: '100',
    healthpoints: '200',
    img: '/img/undead.png',
  },
  {
    id: 'bosstime',
    name: 'Gulder',
    damage: '200',
    healthpoints: '600',
    img: '/img/dragon.png',
  },

  ];

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: Ember.inject.service('current-user'),

  beforeModel() {
    this._super(...arguments);
    return RSVP.all([
      this.store.pushPayload('inventory-item', {inventoryItems}),
      this.store.pushPayload('enemies', {enemies: monsters}),
    ]);
  },

  model() {
    return this.get('currentUser.user');
  },
});
