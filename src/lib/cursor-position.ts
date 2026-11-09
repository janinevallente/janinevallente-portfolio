type Point = { x: number; y: number };

let last: Point | null = null;
let started = false;

export function initCursorTracking() {
  if (started || typeof window === "undefined") return;
  started = true;

  const update = (e: PointerEvent) => {
    last = { x: e.clientX, y: e.clientY };
    try {
      // pointerdown is what triggers navigation, so persist it for hard reloads
      if (e.type === "pointerdown") {
        sessionStorage.setItem("cursor-pos", JSON.stringify(last));
      }
    } catch {}
  };

  window.addEventListener("pointermove", update, { passive: true });
  window.addEventListener("pointerdown", update, { passive: true });
}

export function getCursorPosition(): Point {
  if (last) return last;
  try {
    const saved = sessionStorage.getItem("cursor-pos");
    if (saved) return JSON.parse(saved) as Point;
  } catch {}
  return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
}
