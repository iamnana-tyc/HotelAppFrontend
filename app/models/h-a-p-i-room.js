import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as RoomMixin
} from '../mixins/regenerated/models/h-a-p-i-room';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(RoomMixin, Validations, {
});

defineProjections(Model);

export default Model;
