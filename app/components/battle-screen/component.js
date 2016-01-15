import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['battle-container'],
  enemy: null,
  currentUser: Ember.inject.service('current-user'),

  // Player Stuff
  currentWeapon: null,
  isPlayerTurn: true,

  // Enemy Stuff
  actions: {
    select(item) {
        this.set('currentWeapon', item);
      },

    attack: function() {

    },
  },
});

// Player Turn___________

//when player attacks

//remove enemy hp

//show attack animation

//then stop animation

//show damage animation

//then stop damage animation

//Enemy Turn___________

// show attack animation

// then stop animation

//show player damage animation

//then stop player damage animation

// remove hp from player

// switch back to player Turn___________
