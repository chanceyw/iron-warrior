import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
let {RSVP} = Ember;

const inventoryItems = [
  {
    id: 1,
    name: 'Iron Sword',
    img: '/img/iron.png',
    damage: 10,
    cost: 200,
    classFor: 'Warrior',
  },
  {
    id: 2,
    name: 'Diamond Sword',
    img: '/img/diamond.png',
    damage: 300,
    cost: 700,
  },
  {
    id: 3,
    name: 'Fire Sword',
    img: '/img/fire-icon.png',
    damage: 100,
    cost: 2000,
  },
];

const monsters = [
  {
    id: 'training',
    name: 'Wabbit',
    baseAttack: '10',
    maxHealthPoints: '45',
    img: '/img/bunny.png',
    cashGiven: 15,
    experienceGiven: 6,
  },
  {
    id: 'newb',
    name: 'Goblin',
    baseAttack: '45',
    maxHealthPoints: '100',
    img: '/img/goblin.png',
    cashGiven: 100,
    experienceGiven: 80,
  },
  {
    id: 'gettingthere',
    name: 'Undead',
    baseAttack: '100',
    maxHealthPoints: '500',
    img: '/img/undead.png',
    cashGiven: 75,
    experienceGiven: 42,
  },
  {
    id: 'bosstime',
    name: 'Gulder',
    baseAttack: '200',
    healthpoints: '2300',
    img: '/img/dragon.png',
    cashGiven: 1000,
    experienceGiven: 75,
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
