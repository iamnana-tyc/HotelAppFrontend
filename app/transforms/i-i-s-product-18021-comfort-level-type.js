import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ComfortLevelTypeEnum from '../enums/i-i-s-product-18021-comfort-level-type';

export default FlexberryEnum.extend({
  enum: ComfortLevelTypeEnum,
  sourceType: 'IIS.Product_18021.ComfortLevelType'
});
