
exports.config = {
   seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect: true,
specs: ['test_spec.js'],

capabilities: {
    'browserName': 'chrome',

},
useAllAngular2AppRoots: true,
framework: 'jasmine'
};
