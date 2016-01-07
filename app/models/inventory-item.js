import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  img: DS.attr(),
  damage: DS.attr(),
  cost: DS.attr(),
  classFor: DS.attr(),
});
