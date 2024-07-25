import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  checkIn: DS.attr('date'),
  checkOut: DS.attr('date'),
  guestName: DS.attr('string'),
  client: DS.belongsTo('h-a-p-i-client', { inverse: null, async: false }),
  room: DS.belongsTo('h-a-p-i-room', { inverse: null, async: false })
});

export let ValidationRules = {
  checkIn: {
    descriptionKey: 'models.h-a-p-i-booking.validations.checkIn.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  checkOut: {
    descriptionKey: 'models.h-a-p-i-booking.validations.checkOut.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  guestName: {
    descriptionKey: 'models.h-a-p-i-booking.validations.guestName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  client: {
    descriptionKey: 'models.h-a-p-i-booking.validations.client.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  room: {
    descriptionKey: 'models.h-a-p-i-booking.validations.room.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookingE', 'h-a-p-i-booking', {
    guestName: attr('Guest name', { index: 0 }),
    checkIn: attr('Check in', { index: 1 }),
    checkOut: attr('Check out', { index: 2 }),
    room: belongsTo('h-a-p-i-room', '', {

    }, { index: 3 })
  });

  modelClass.defineProjection('BookingL', 'h-a-p-i-booking', {
    guestName: attr('Guest name', { index: 0 }),
    checkIn: attr('Check in', { index: 1 }),
    checkOut: attr('Check out', { index: 2 })
  });
};
