import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('game', {path: '/'}, function() {
    this.route('shop');
    this.route('battle', {path: '/battle/:enemyName'});
  });

  this.route('register');
  this.route('login');
});

export default Router;
