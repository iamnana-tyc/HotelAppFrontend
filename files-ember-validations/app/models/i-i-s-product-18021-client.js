import {
  defineNamespace,
  defineProjections,
  Model as ClientMixin
} from '../mixins/regenerated/models/i-i-s-product-18021-client';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ClientMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
