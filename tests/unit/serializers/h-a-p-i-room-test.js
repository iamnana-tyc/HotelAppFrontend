import { moduleForModel, test } from 'ember-qunit';

moduleForModel('h-a-p-i-room', 'Unit | Serializer | h-a-p-i-room', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:h-a-p-i-room',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:h-a-p-i-comfort-level-type',
    'transform:i-i-s-product-18021-comfort-level-type',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
