import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import HAPIBookingLForm from './forms/h-a-p-i-booking-l';
import HAPIClientLForm from './forms/h-a-p-i-client-l';
import HAPIRoomLForm from './forms/h-a-p-i-room-l';
import IISProduct_18021BookingLForm from './forms/i-i-s-product-18021-booking-l';
import IISProduct_18021ClientLForm from './forms/i-i-s-product-18021-client-l';
import IISProduct_18021RoomLForm from './forms/i-i-s-product-18021-room-l';
import HAPIBookingEForm from './forms/h-a-p-i-booking-e';
import HAPIClientEForm from './forms/h-a-p-i-client-e';
import HAPIRoomEForm from './forms/h-a-p-i-room-e';
import IISProduct_18021BookingEForm from './forms/i-i-s-product-18021-booking-e';
import IISProduct_18021ClientEForm from './forms/i-i-s-product-18021-client-e';
import IISProduct_18021RoomEForm from './forms/i-i-s-product-18021-room-e';
import HAPIBookingModel from './models/h-a-p-i-booking';
import HAPIClientModel from './models/h-a-p-i-client';
import HAPIRoomModel from './models/h-a-p-i-room';
import IISProduct_18021BookingModel from './models/i-i-s-product-18021-booking';
import IISProduct_18021ClientModel from './models/i-i-s-product-18021-client';
import IISProduct_18021RoomModel from './models/i-i-s-product-18021-room';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'h-a-p-i-booking': HAPIBookingModel,
    'h-a-p-i-client': HAPIClientModel,
    'h-a-p-i-room': HAPIRoomModel,
    'i-i-s-product-18021-booking': IISProduct_18021BookingModel,
    'i-i-s-product-18021-client': IISProduct_18021ClientModel,
    'i-i-s-product-18021-room': IISProduct_18021RoomModel
  },

  'application-name': 'HAPI',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'HAPI',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'HAPI',
          title: 'HAPI'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'h-a-p-i': {
          caption: 'HAPI',
          title: 'HAPI',
          'h-a-p-i-client-l': {
            caption: 'Client',
            title: ''
          },
          'h-a-p-i-booking-l': {
            caption: 'Booking',
            title: ''
          },
          'h-a-p-i-room-l': {
            caption: 'Room',
            title: ''
          }
        },
        'product-18021': {
          caption: 'Product_18021',
          title: 'Product_18021',
          'i-i-s-product-18021-client-l': {
            caption: 'Client',
            title: ''
          },
          'i-i-s-product-18021-booking-l': {
            caption: 'Booking',
            title: ''
          },
          'i-i-s-product-18021-room-l': {
            caption: 'Room',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'h-a-p-i-booking-l': HAPIBookingLForm,
    'h-a-p-i-client-l': HAPIClientLForm,
    'h-a-p-i-room-l': HAPIRoomLForm,
    'i-i-s-product-18021-booking-l': IISProduct_18021BookingLForm,
    'i-i-s-product-18021-client-l': IISProduct_18021ClientLForm,
    'i-i-s-product-18021-room-l': IISProduct_18021RoomLForm,
    'h-a-p-i-booking-e': HAPIBookingEForm,
    'h-a-p-i-client-e': HAPIClientEForm,
    'h-a-p-i-room-e': HAPIRoomEForm,
    'i-i-s-product-18021-booking-e': IISProduct_18021BookingEForm,
    'i-i-s-product-18021-client-e': IISProduct_18021ClientEForm,
    'i-i-s-product-18021-room-e': IISProduct_18021RoomEForm
  },

});

export default translations;
