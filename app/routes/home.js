import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      items: this.store.findAll('item'),
      t: [1,2,3,4,5]
    });
  }
});
