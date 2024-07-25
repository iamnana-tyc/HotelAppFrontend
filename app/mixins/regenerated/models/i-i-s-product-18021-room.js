import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  price: DS.attr('decimal'),
  roomNumber: DS.attr('number'),
  roomType: DS.attr('i-i-s-product-18021-comfort-level-type')
});

export let ValidationRules = {
  price: {
    descriptionKey: 'models.i-i-s-product-18021-room.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  roomNumber: {
    descriptionKey: 'models.i-i-s-product-18021-room.validations.roomNumber.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  roomType: {
    descriptionKey: 'models.i-i-s-product-18021-room.validations.roomType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RoomE', 'i-i-s-product-18021-room', {
    roomNumber: attr('Room number', { index: 0 }),
    price: attr('Price', { index: 1 }),
    roomType: attr('Room type', { index: 2 })
  });

  modelClass.defineProjection('RoomL', 'i-i-s-product-18021-room', {
    roomNumber: attr('Room number', { index: 0 }),
    price: attr('Price', { index: 1 }),
    roomType: attr('Room type', { index: 2 })
  });
};
