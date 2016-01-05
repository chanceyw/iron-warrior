import DS from 'ember-data';
import Ember from 'ember';

let levelOneXp = 10;

function getLevel(x) {
  return (Math.log(x / levelOneXp) / Math.log(2)) + 1;
}

export default DS.Model.extend({
  class: DS.attr('string', {defaultValue: 'warrior'}),
  healthPoints: DS.attr('number', {defaultValue: '60'}),
  attackDamage: DS.attr('number', {defaultValue:  '10'}),
  experience: DS.attr('number', {defaultValue: '0'}),
  level: Ember.computed('experience', function() {
    let experience = this.get('experience');

    if (experience < 10) {
      return 1;
    }

    return Math.floor(getLevel(experience)) + 1;
  }),
});
