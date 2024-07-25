import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  passportNumber: DS.attr('string'),
  phoneNumber: DS.attr('string')
});

export let ValidationRules = {
  email: {
    descriptionKey: 'models.i-i-s-product-18021-client.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  firstName: {
    descriptionKey: 'models.i-i-s-product-18021-client.validations.firstName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  lastName: {
    descriptionKey: 'models.i-i-s-product-18021-client.validations.lastName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  passportNumber: {
    descriptionKey: 'models.i-i-s-product-18021-client.validations.passportNumber.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phoneNumber: {
    descriptionKey: 'models.i-i-s-product-18021-client.validations.phoneNumber.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ClientE', 'i-i-s-product-18021-client', {
    firstName: attr('First name', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    phoneNumber: attr('Phone number', { index: 2 }),
    passportNumber: attr('Passport number', { index: 3 }),
    email: attr('Email', { index: 4 })
  });

  modelClass.defineProjection('ClientL', 'i-i-s-product-18021-client', {
    firstName: attr('First name', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    phoneNumber: attr('Phone number', { index: 2 }),
    passportNumber: attr('Passport number', { index: 3 }),
    email: attr('Email', { index: 4 })
  });
};
