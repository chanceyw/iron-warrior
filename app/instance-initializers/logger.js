export function initialize(applicationInstance) {
  debugger;
  var logger = applicationInstance.lookup('logger:main');
  logger.log('Hello from the instance initializer!');
}

export default {
  name: 'logger',
  initialize: initialize,
};
