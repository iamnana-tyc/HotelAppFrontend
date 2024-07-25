import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as BookingMixin
} from '../mixins/regenerated/models/i-i-s-product-18021-booking';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(BookingMixin, Validations, {
});

defineProjections(Model);

export default Model;