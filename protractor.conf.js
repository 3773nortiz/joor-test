exports.config = {
  baseUrl: 'http://localhost:9090',
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
  	'./app/controller/music/controller.spec.js',
  	'./app/controller/collection/controller.spec.js',
  ]
}