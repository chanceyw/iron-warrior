import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        name: 'Iron Sword',
        img: '/img/iron.png',
        damage: 15,
        cost: 200,
        classFor: 'Warrior',
      },
      {
        name: 'Diamond Sword',
        img: '/img/diamond.png',
        damage: 28,
        cost: 700,
        classFor: 'Warrior',
      },
      {
        name: 'Fire Spell',
        img: '/img/fire-icon.png',
        damage: 28,
        cost: 700,
        classFor: 'Mage',
      },
    ];
  },
});
