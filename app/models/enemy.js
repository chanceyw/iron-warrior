import DS from 'ember-data';
import Ember from 'ember';


export default DS.Model.extend({
  name: DS.attr('string'),
  damage: DS.attr('number'),
  cashGiven: DS.attr('number'),
  experienceGiven: DS.attr('number'),
  healthpoints: DS.attr('number'),

});
