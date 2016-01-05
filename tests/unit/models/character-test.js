import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('character', 'Unit | Model | character', {
  // Specify the other units that are required for this test.
  needs: [],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

test('it computes the level', function(assert) {
  Ember.run(() => {
    let model = this.subject();

    model.set('experience', 0);

    assert.equal(model.get('level'), 1);

    model.set('experience', 9);

    assert.equal(model.get('level'), 1);

    model.set('experience', 10);

    assert.equal(model.get('level'), 2);

    model.set('experience', 20);

    assert.equal(model.get('level'), 3);

    model.set('experience', 30);

    assert.equal(model.get('level'), 3, '30xp should still be level 3');

    model.set('experience', 40);

    assert.equal(model.get('level'), 4, '40xp should be level 4');

    model.set('experience', 41);

    assert.equal(model.get('level'), 4, '41xp should be level 4');
  });
});
