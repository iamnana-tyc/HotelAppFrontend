import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  price: DS.attr('decimal'),
  roomNumber: DS.attr('number'),
  roomType: DS.attr('h-a-p-i-comfort-level-type')
});

export let ValidationRules = {
  price: {
    descriptionKey: 'models.h-a-p-i-room.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  roomNumber: {
    descriptionKey: 'models.h-a-p-i-room.validations.roomNumber.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  roomType: {
    descriptionKey: 'models.h-a-p-i-room.validations.roomType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RoomE', 'h-a-p-i-room', {
    roomNumber: attr('Room number', { index: 0 }),
    price: attr('Price', { index: 1 }),
    roomType: attr('Room type', { index: 2 })
  });

  modelClass.defineProjection('RoomL', 'h-a-p-i-room', {
    roomNumber: attr('Room number', { index: 0 }),
    price: attr('Price', { index: 1 }),
    roomType: attr('Room type', { index: 2 })
  });
};
