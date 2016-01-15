import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['battle-container'],
  enemy: null,
  currentUser: Ember.inject.service('current-user'),
  player: Ember.computed.alias('currentUser.user.content'),

  // Player Stuff
  currentWeapon: null,
  isPlayerTurn: true,

  // Enemy Stuff
  actions: {
    select(item) {
        this.set('currentWeapon', item);
      },

    attack: function() {
      let player = this.get('player');
      let enemy = this.get('enemy');

      let playerAttack = player.getAttackStrength();
      enemy.set('damage', enemy.get('damage') + playerAttack);

      // Check if enemy is dead
      if (enemy.get('currentHealthPoints') <= 0) {
        return alert('you win');
      }

      let enemyAttack = enemy.getAttackStrength();
      player.set('damage', player.get('damage') + enemyAttack);

      // Check if player is dead
      if (player.get('currentHealthPoints') <= 0) {
        return alert('your dead bro');
      }
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
