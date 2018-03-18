import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  image: DS.attr('string'),
  imageUrl: computed('image', function(){
    return "http://localhost:3000" + this.get('image');
  }),
  variants: DS.hasMany('variant')
});
