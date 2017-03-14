    'use strict';

    var socket = io(),
        video1 = document.querySelector('#video1'),
        video2 = document.querySelector('#video2'),
        alert = document.querySelector('#alert'),
        trigger;

    function statusCheck() {

    }
    socket.on('box1', function(trigger) {
        // console.log('trigger!');
        video1.play();
        video1.onended = function() {
            alert.innerHTML = "Please step On Second platform";
            io.emit('done', trigger);
        };
    });
    socket.on('box2', function(trigger) {
        // console.log('trigger!');
        video2.play();
    });
