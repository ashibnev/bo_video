# video media

## example
html
```
<video autoplay loop muted>
  <source src="assets/video/lg.mp4" screen="(min-width: 1400px)">
  <source src="assets/video/xs.mp4" screen="(min-width: 640px)">
  <source src="assets/video/mob.mp4" screen="(min-width: 0px)">
</video>
```

js
```
import { Video } from 'YOUR_PATH/video.js';

new Video();
```
