# CSS Text Reveal Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-text-reveal-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A complete, runnable recreation of the uploaded 18.17-second screen recording.

## Video contents
The video title is **CSS Text Reveal Animation**. The preview text is **Creative Design** and the five effect tabs are:
1. Clip
2. Blur
3. Mask
4. Letters
5. 3D Flip

Selecting a tab replays the corresponding reveal animation and updates the CSS code panel.

## CSS transcribed from visible editor frames

### Clip Reveal
```css
.clip-reveal {
  animation: clipReveal 1.2s ease forwards;
}
@keyframes clipReveal {
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
}
```

### Blur Reveal
```css
.blur-reveal {
  animation: blurReveal 1.2s ease forwards;
}
@keyframes blurReveal {
  from {
    opacity: 0;
    filter: blur(20px);
    transform: scale(1.08);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: scale(1);
  }
}
```

### Letter Reveal
```css
.letter-reveal span {
  display: inline-block;
  opacity: 0;
  transform: translateY(60px);
  animation: letterReveal .6s ease forwards;
}
@keyframes letterReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 3D Flip Reveal
```css
.flip-reveal {
  animation: flipReveal 1.2s cubic-bezier(.2,.8,.2,1) forwards;
  transform-origin: center bottom;
}
@keyframes flipReveal {
  from {
    opacity: 0;
    transform: perspective(600px) rotateX(-90deg) translateY(40px);
  }
  to {
    opacity: 1;
    transform: perspective(600px) rotateX(0) translateY(0);
  }
}
```

### Mask Reveal
The visible editor shows `.mask-container { position: relative; overflow: hidden; }` and the `::after` overlay with `content`, `position`, `inset`, `background: #0f0f12`, and `animation: maskReveal 1.2s cubic-bezier(.77,0,.18,1) forwards`. The exact keyframe body is not fully legible in the recording; this project completes it with a left-to-right overlay slide.

## Project structure
- `index.html` — preview, tabs, and code display.
- `style.css` — five reveal effects and responsive styling.
- `script.js` — tab interaction, animation replay, and code panel updates.
- `README.md` — source notes and run instructions.

## Run
Extract the ZIP and open `index.html` in a modern browser. Or open the folder in VS Code and run with Live Server. No npm install or build step required.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
