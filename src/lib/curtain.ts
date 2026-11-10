type Handler = (onCovered: () => void) => void;

let handler: Handler | null = null;

export function registerCurtain(h: Handler) {
  handler = h;
  return () => {
    if (handler === h) handler = null;
  };
}

/** Plays the curtain, then calls onCovered once the screen is fully covered. */
export function runCurtain(onCovered: () => void) {
  if (handler) handler(onCovered);
  else onCovered(); // no curtain mounted: just navigate
}
