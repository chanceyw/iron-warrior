import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  className: Ember.computed('name', function() {
    return Ember.String.dasherize(this.get('name'));
  }),

  damage: DS.attr('number'),
  cashGiven: DS.attr('number'),
  experienceGiven: DS.attr('number'),
  healthpoints: DS.attr('number'),
});
