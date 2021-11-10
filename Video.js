export class Video {
  constructor() {
    this.windowWidth = document.body.clientWidth;
    this.$videoList = [...document.querySelectorAll('video')];

    this.initVideo();
  }

  getScreen($el) {
    const media = $el.getAttribute('media');
    const rx = new RegExp('min-device-pixel-ratio', 'g');
    const isRetina = rx.test(media);

    return isRetina ? 99999 : +media.replace(/\D/g, '');
  }

  getList($list) {
    let result = [];

    $list.forEach(($el) => {
      result.push({
        src: $el.getAttribute('srcset'),
        media: $el.getAttribute('media'),
        screen: this.getScreen($el),
      });
    });

    return result;
  }

  appendVideo($video, src) {
    $video.innerHTML = `<source src='${src}' type='video/mp4' >`;
  }

  initVideo() {
    if (!this.$videoList.length) return;

    this.$videoList.forEach(($video) => {
      const $sourceList = [...$video.querySelectorAll('source')];
      const list = this.getList($sourceList);
      const sortList = list.sort((a, b) => a.screen - b.screen);
      // console.log(sortList);

      sortList.forEach((item) => {
        if (window.matchMedia(`${item.media}`).matches) {
          this.appendVideo($video, item.src);
        }
      });
    });
  }
}
