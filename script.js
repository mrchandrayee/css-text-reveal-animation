const effects = {
  clip: { title: "CLIP REVEAL", code: `.clip-reveal {
  animation: clipReveal 1.2s ease forwards;
}
@keyframes clipReveal {
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0 0 0); }
}` },
  blur: { title: "BLUR REVEAL", code: `.blur-reveal {
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
}` },
  mask: { title: "MASK REVEAL", code: `.mask-container {
  position: relative;
  overflow: hidden;
}
.mask-container::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #0f0f12;
  animation: maskReveal 1.2s
    cubic-bezier(.77,0,.18,1) forwards;
}
@keyframes maskReveal {
  from { transform: translateX(0); }
  to   { transform: translateX(105%); }
}` },
  letters: { title: "LETTER REVEAL", code: `.letter-reveal span {
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
}` },
  flip: { title: "3D FLIP REVEAL", code: `.flip-reveal {
  animation: flipReveal 1.2s
    cubic-bezier(.2,.8,.2,1) forwards;
  transform-origin: center bottom;
}
@keyframes flipReveal {
  from {
    opacity: 0;
    transform: perspective(600px)
      rotateX(-90deg) translateY(40px);
  }
  to {
    opacity: 1;
    transform: perspective(600px)
      rotateX(0) translateY(0);
  }
}` }
};

const tabs = [...document.querySelectorAll(".tab")];
const stage = document.getElementById("previewStage");
const wrap = document.getElementById("textWrap");
const text = document.getElementById("revealText");
const mask = document.getElementById("maskLayer");
const codeHeading = document.getElementById("codeHeading");
const codeOutput = document.getElementById("codeOutput");
const phrase = "Creative Design";

function replayAnimation(effect) {
  wrap.className = "text-wrap";
  text.className = "reveal-text";
  text.textContent = phrase;
  mask.style.display = "none";
  mask.style.animation = "none";

  // Force a reflow so clicking the same tab replays its animation.
  void text.offsetWidth;

  if (effect === "clip") {
    text.classList.add("clip-reveal");
  } else if (effect === "blur") {
    text.classList.add("blur-reveal");
  } else if (effect === "mask") {
    wrap.classList.add("mask-reveal");
    mask.style.display = "block";
    void mask.offsetWidth;
    mask.style.animation = "";
  } else if (effect === "letters") {
    text.classList.add("letter-reveal");
    text.innerHTML = [...phrase].map((letter, index) => {
      const safeLetter = letter === " " ? "&nbsp;" : letter;
      return `<span style="animation-delay:${index * 0.055}s">${safeLetter}</span>`;
    }).join("");
  } else if (effect === "flip") {
    text.classList.add("flip-reveal");
  }
}

function selectEffect(effect) {
  tabs.forEach((tab) => {
    const selected = tab.dataset.effect === effect;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-pressed", String(selected));
  });
  codeHeading.textContent = effects[effect].title;
  codeOutput.textContent = effects[effect].code;
  replayAnimation(effect);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => selectEffect(tab.dataset.effect));
});

selectEffect("clip");
