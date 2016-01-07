import Ember from 'ember';
import InventoryItemsInitializer from '../../../initializers/inventory-items';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | inventory items', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  InventoryItemsInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
