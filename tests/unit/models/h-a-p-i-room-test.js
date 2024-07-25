import { moduleForModel, test } from 'ember-qunit';

moduleForModel('h-a-p-i-room', 'Unit | Model | h-a-p-i-room', {
  // Specify the other units that are required for this test.
  needs: [
    'model:h-a-p-i-booking',
    'model:h-a-p-i-client',
    'model:h-a-p-i-room',
    'model:i-i-s-product-18021-booking',
    'model:i-i-s-product-18021-client',
    'model:i-i-s-product-18021-room',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
