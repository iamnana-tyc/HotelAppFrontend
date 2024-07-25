import { Serializer as ClientSerializer } from
  '../mixins/regenerated/serializers/h-a-p-i-client';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ClientSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
