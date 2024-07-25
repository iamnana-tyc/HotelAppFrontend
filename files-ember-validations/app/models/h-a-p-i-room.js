import {
  defineNamespace,
  defineProjections,
  Model as RoomMixin
} from '../mixins/regenerated/models/h-a-p-i-room';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(RoomMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
