const grunt = require("grunt");
require('load-grunt-tasks')(grunt);
 
grunt.initConfig({
    eslint: {
        target: ['file.js']
    }
});
 
grunt.registerTask('lint', ['eslint']);