import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const timeUpdate = throttle(data => {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}, 1000);

player.on('timeupdate', timeUpdate);

player.on('loaded', async () => {
  const savedTimeUpdate = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedTimeUpdate) {
    try {
      await player.setCurrentTime(Number.parseFloat(savedTimeUpdate));
    } catch (error) {
      switch (error.name) {
        case 'RangeError':
          break;
        default:
          break;
      }
    }
  }
});

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
