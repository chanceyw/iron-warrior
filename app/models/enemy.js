import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  className: Ember.computed('name', function() {
    return Ember.String.dasherize(this.get('name'));
  }),

  baseAttack: DS.attr('number'),
  cashGiven: DS.attr('number'),
  experienceGiven: DS.attr('number'),
  maxHealthPoints: DS.attr('number'),
  damage: DS.attr('number', {defaultValue: 0}),

  currentHealthPoints: Ember.computed('maxHealthPoints', 'damage', function() {
    let {maxHealthPoints, damage} = this.getProperties('maxHealthPoints', 'damage');

    return maxHealthPoints - damage;
  }),

  getAttackStrength() {
    return this.get('baseAttack');
  },
});
