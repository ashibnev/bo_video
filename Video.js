export class Video {
  constructor() {
    this.windowWidth = document.body.clientWidth;
    this.$videoList = [...document.querySelectorAll('video')];

    this.initVideo();
  }

  getList($list) {
    let result = [];

    $list.forEach(($el) => {
      result.push({
        src: $el.getAttribute('src'),
        screen: Number($el.getAttribute('screen')),
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

      sortList.forEach((item) => {
        if (window.matchMedia(`(min-width: ${item.screen}px)`).matches) {
          this.appendVideo($video, item.src);
        }
      });
    });
  }
}
