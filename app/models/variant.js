import DS from 'ember-data';

export default DS.Model.extend({
  color: DS.attr('string'),
  colorCode: DS.attr('string'),
  shirtSize: DS.attr('string'),
  item: DS.belongsTo('item')
});
