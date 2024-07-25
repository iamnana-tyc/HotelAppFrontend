import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ComfortLevelTypeEnum from '../enums/h-a-p-i-comfort-level-type';

export default FlexberryEnum.extend({
  enum: ComfortLevelTypeEnum,
  sourceType: 'HAPI.ComfortLevelType'
});
