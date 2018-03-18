import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('items', {path: '/'}, function(){
    this.route('show', {path: 'items/:item_id'});
  });
  this.route('home', {path: '/'});
});

export default Router;
