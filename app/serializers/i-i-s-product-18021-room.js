import { Serializer as RoomSerializer } from
  '../mixins/regenerated/serializers/i-i-s-product-18021-room';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(RoomSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
