import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'HAPI',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'HAPI',
          title: 'HAPI'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
