import Ember from 'ember';

const {Promise} = Ember.RSVP;

function wait(time) {
  return new Promise((resolve) => {
    console.log('waiting', time);
    window.setTimeout(resolve, time);
  });
}

export default Ember.Component.extend({
  classNames: ['battle-container'],
  enemy: null,
  currentUser: Ember.inject.service('current-user'),
  player: Ember.computed.alias('currentUser.user.content'),

  // Player Stuff
  currentWeapon: null,
  isPlayerTurn: true,
  playerTakeDamage: 0,

  // Enemy Stuff
  enemyTakeDamage: 0,

  actions: {
    select(item) {
        this.set('currentWeapon', item);
      },

    attack: function() {
      this.set('isPlayerTurn', false);
      let player = this.get('player');
      let enemy = this.get('enemy');

      wait(5000).then(() => {
        // Do something to show that player is attacking

        return wait(5000);
      }).then(() => {
        // Stop animating player attack

        // Enemy Take Damage - Data
        let playerAttack = player.getAttackStrength();
        enemy.set('damage', enemy.get('damage') + playerAttack);

        // Enemy Show Damage
        this.set('enemyTakeDamage', playerAttack);

        // Check if enemy is dead
        if (enemy.get('currentHealthPoints') <= 0) {
          return alert('you win');
        }

        return wait(5000);
      }).then(() => {
        // Shop showing enemy damage indicator
        this.set('enemyTakeDamage', 0);

        let enemyAttack = enemy.getAttackStrength();
        player.set('damage', player.get('damage') + enemyAttack);

        return wait(5000);
      }).then(() => {
        // Check if player is dead
        if (player.get('currentHealthPoints') <= 0) {
          return alert('your dead bro');
        }
      });
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
