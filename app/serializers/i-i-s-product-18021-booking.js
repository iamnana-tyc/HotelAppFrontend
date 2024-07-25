import { Serializer as BookingSerializer } from
  '../mixins/regenerated/serializers/i-i-s-product-18021-booking';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BookingSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
