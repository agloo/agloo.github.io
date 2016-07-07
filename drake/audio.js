// Lovingly sourced from xBytez's github
var call = {
        init: function() {
                call.player = document.createElement('audio');
                if (call.player.play) {
                        call.player.setAttribute('prebuffer', 'auto');
                        call.player.setAttribute('src', 'theCall.ogg');
                        call.player.load();
                        call.player.play();
                }
        }
}
var song = {
        init: function() {
                var delay = 13235;
                song.player = document.createElement('audio');
                if (song.player.play) {
                        song.player.setAttribute('prebuffer', 'auto');
                        song.player.setAttribute('src', 'theSong.ogg');
                        song.player.setAttribute('loop', 'true');
                        song.player.load();
                        setTimeout("song.player.play()", delay);
                }
        }
}
//window.onload = call.init();
//song.init();
