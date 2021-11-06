import Player from "@vimeo/player";
import { throttle } from "lodash";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time";
const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

const onPlay = function({seconds}) {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

    player.on('timeupdate', throttle(onPlay, 1000));

    player.setCurrentTime(currentTime).then(function() {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
    



