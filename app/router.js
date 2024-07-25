import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('h-a-p-i-booking-l');
  this.route('h-a-p-i-booking-e',
  { path: 'h-a-p-i-booking-e/:id' });
  this.route('h-a-p-i-booking-e.new',
  { path: 'h-a-p-i-booking-e/new' });
  this.route('h-a-p-i-client-l');
  this.route('h-a-p-i-client-e',
  { path: 'h-a-p-i-client-e/:id' });
  this.route('h-a-p-i-client-e.new',
  { path: 'h-a-p-i-client-e/new' });
  this.route('h-a-p-i-room-l');
  this.route('h-a-p-i-room-e',
  { path: 'h-a-p-i-room-e/:id' });
  this.route('h-a-p-i-room-e.new',
  { path: 'h-a-p-i-room-e/new' });
  this.route('i-i-s-product-18021-booking-l');
  this.route('i-i-s-product-18021-booking-e',
  { path: 'i-i-s-product-18021-booking-e/:id' });
  this.route('i-i-s-product-18021-booking-e.new',
  { path: 'i-i-s-product-18021-booking-e/new' });
  this.route('i-i-s-product-18021-client-l');
  this.route('i-i-s-product-18021-client-e',
  { path: 'i-i-s-product-18021-client-e/:id' });
  this.route('i-i-s-product-18021-client-e.new',
  { path: 'i-i-s-product-18021-client-e/new' });
  this.route('i-i-s-product-18021-room-l');
  this.route('i-i-s-product-18021-room-e',
  { path: 'i-i-s-product-18021-room-e/:id' });
  this.route('i-i-s-product-18021-room-e.new',
  { path: 'i-i-s-product-18021-room-e/new' });
});

export default Router;
