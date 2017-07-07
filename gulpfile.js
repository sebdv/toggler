/**
 *
 * Entorno para desarrollo, corre nodemon + browserSync
 *
 * uso: gulp
 *
 */

'use strict';

let gulp = require('gulp');
let browserSync = require('browser-sync');
let nodemon = require('gulp-nodemon');


gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:9191",
        files: ["web/**/*.*", "database/**/*.*"],
        port: 7000,
        notify: false
    });
});
gulp.task('nodemon', function (cb) {

    let started = false;
    process.env.PORT= 7000;
    return nodemon({
        script: 'server.js',
        watch: 'server.js'
        // ext: 'js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});
