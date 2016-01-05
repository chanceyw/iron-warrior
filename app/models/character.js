import DS from 'ember-data';
import Ember from 'ember';

let startingHealth = 60;
let healthMultiplier = 10;
let damageMultiplier = 10;
let startingBaseAttack = 10;
let levelOneXp = 10;

function getXpFromLevel(level) {
  return Math.pow(2, level - 2) * levelOneXp;
}

function getLevelFromXp(x) {
  return (Math.log(x / levelOneXp) / Math.log(2)) + 1;
}

export default DS.Model.extend({
  name: DS.attr('string', {defaultValue: 'Bob'}),
  characterClass: DS.attr('string', {defaultValue: 'Warrior'}),
  damage: DS.attr('number', {defaultValue: 0}),
  cash: DS.attr('number', {defaultValue: 0}),
  experience: DS.attr('number', {defaultValue: 0}),

  baseAttack: Ember.computed('level', function() {
    let level = this.get('level');

    return level * damageMultiplier + startingBaseAttack;
  }),

  maxHealthPoints: Ember.computed('level', function() {
    let level = this.get('level');

    return level * healthMultiplier + startingHealth;
  }),

  currentHealthPoints: Ember.computed('maxHealthPoints', 'damage', function() {
    let {maxHealthPoints, damage} = this.getProperties('maxHealthPoints', 'damage');

    return maxHealthPoints - damage;
  }),

  level: Ember.computed('experience', function() {
    let experience = this.get('experience');

    if (experience < 10) {
      return 1;
    }

    return Math.floor(getLevelFromXp(experience)) + 1;
  }),

  nextLevel: Ember.computed('level', function() {
    return this.get('level') + 1;
  }),

  nextLevelXp: Ember.computed('nextLevel', function() {
    return getXpFromLevel(this.get('nextLevel'));
  })
});
