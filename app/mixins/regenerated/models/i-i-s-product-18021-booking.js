import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  checkIn: DS.attr('date'),
  checkOut: DS.attr('date'),
  guestName: DS.attr('string'),
  client: DS.belongsTo('i-i-s-product-18021-client', { inverse: null, async: false }),
  room: DS.belongsTo('i-i-s-product-18021-room', { inverse: null, async: false })
});

export let ValidationRules = {
  checkIn: {
    descriptionKey: 'models.i-i-s-product-18021-booking.validations.checkIn.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  checkOut: {
    descriptionKey: 'models.i-i-s-product-18021-booking.validations.checkOut.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  guestName: {
    descriptionKey: 'models.i-i-s-product-18021-booking.validations.guestName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  client: {
    descriptionKey: 'models.i-i-s-product-18021-booking.validations.client.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  room: {
    descriptionKey: 'models.i-i-s-product-18021-booking.validations.room.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookingE', 'i-i-s-product-18021-booking', {
    guestName: attr('Guest name', { index: 0 }),
    checkIn: attr('Check in', { index: 1 }),
    checkOut: attr('Check out', { index: 2 }),
    client: belongsTo('i-i-s-product-18021-client', 'Client', {
      firstName: attr('First name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'firstName' }),
    room: belongsTo('i-i-s-product-18021-room', 'Room', {
      roomNumber: attr('Room number', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'roomNumber' })
  });

  modelClass.defineProjection('BookingL', 'i-i-s-product-18021-booking', {
    guestName: attr('Guest name', { index: 0 }),
    checkIn: attr('Check in', { index: 1 }),
    checkOut: attr('Check out', { index: 2 }),
    client: belongsTo('i-i-s-product-18021-client', 'First name', {
      firstName: attr('First name', { index: 3 })
    }, { index: -1, hidden: true }),
    room: belongsTo('i-i-s-product-18021-room', 'Room number', {
      roomNumber: attr('Room number', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
