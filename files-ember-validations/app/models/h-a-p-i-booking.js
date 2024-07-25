import {
  defineNamespace,
  defineProjections,
  Model as BookingMixin
} from '../mixins/regenerated/models/h-a-p-i-booking';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(BookingMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
