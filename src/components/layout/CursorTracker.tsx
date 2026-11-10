"use client";

import { useEffect } from "react";
import { initCursorTracking } from "@/lib/cursor-position";

export default function CursorTracker() {
  useEffect(() => {
    initCursorTracking();
  }, []);
  return null;
}