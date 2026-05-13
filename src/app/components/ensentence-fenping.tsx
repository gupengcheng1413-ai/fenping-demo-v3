import { useRef, useState, useEffect } from "react";
import {
  EN_SENTENCES,
  ZH_SENTENCES,
  PlayIcon,
  enWordSpans,
  RightButtons,
} from "./ensentence-shared";

const LINE_H = 44;
const FONT_SIZE = 30;
const COL_TOP = 16;
const COL_H = 316;

export default function EnsentenceFenping({ onToggleMode }: { onToggleMode: () => void }) {
  const [active, setActive] = useState(0);
  const lockedRef = useRef<"en" | "zh" | null>(null);
  const enRef = useRef<HTMLDivElement | null>(null);
  const zhRef = useRef<HTMLDivElement | null>(null);
  const enSentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const zhSentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const syncingRef = useRef(false);

  const findActiveIdx = (side: "en" | "zh") => {
    const container = side === "en" ? enRef.current : zhRef.current;
    const refs = side === "en" ? enSentRefs.current : zhSentRefs.current;
    if (!container) return 0;
    const scrollTop = container.scrollTop;
    let bestIdx = 0;
    let bestDist = Infinity;
    refs.forEach((el, i) => {
      if (!el) return;
      const dist = Math.abs(el.offsetTop - scrollTop);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = i;
      }
    });
    return bestIdx;
  };

  const handleScroll = (side: "en" | "zh") => {
    if (syncingRef.current) return;
    if (lockedRef.current && lockedRef.current !== side) return;
    const idx = findActiveIdx(side);
    setActive(idx);
    const otherContainer = side === "en" ? zhRef.current : enRef.current;
    const otherRefs = side === "en" ? zhSentRefs.current : enSentRefs.current;
    const targetEl = otherRefs[idx];
    if (otherContainer && targetEl) {
      syncingRef.current = true;
      otherContainer.scrollTop = targetEl.offsetTop;
      requestAnimationFrame(() => {
        syncingRef.current = false;
      });
    }
  };

  const onPointerDown = (side: "en" | "zh") => {
    if (lockedRef.current === null) lockedRef.current = side;
  };
  const onPointerUp = (side: "en" | "zh") => {
    if (lockedRef.current === side) lockedRef.current = null;
  };

  useEffect(() => {
    enSentRefs.current = enSentRefs.current.slice(0, EN_SENTENCES.length);
    zhSentRefs.current = zhSentRefs.current.slice(0, ZH_SENTENCES.length);
  }, []);

  return (
    <div className="bg-black relative size-full overflow-hidden" data-name="ensentence-fenping">
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{
          left: 820,
          width: 0,
          borderLeft: "1px dashed #545454",
        }}
      />

      <div className="absolute" style={{ left: 40, top: COL_TOP, width: 740, height: COL_H }}>
        <div
          ref={enRef}
          onScroll={() => handleScroll("en")}
          onPointerDown={() => onPointerDown("en")}
          onPointerUp={() => onPointerUp("en")}
          onPointerCancel={() => onPointerUp("en")}
          onTouchStart={() => onPointerDown("en")}
          onTouchEnd={() => onPointerUp("en")}
          className="overflow-y-auto overflow-x-hidden"
          style={{
            width: "100%",
            height: "100%",
            touchAction: "pan-y",
            overscrollBehavior: "contain",
          }}
        >
          <div style={{ paddingBottom: COL_H - LINE_H }}>
            {EN_SENTENCES.map((s, i) => {
              const isActive = active === i;
              const isOrange = i === 0;
              const color = isActive ? "#ffd34d" : isOrange ? "#ec9709" : "#cfd6e2";
              return (
                <div
                  key={i}
                  ref={(el) => {
                    enSentRefs.current[i] = el;
                  }}
                  className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold"
                  style={{
                    fontSize: FONT_SIZE,
                    lineHeight: `${LINE_H}px`,
                    color,
                    padding: "2px 0",
                  }}
                  onClick={() => {
                    lockedRef.current = "en";
                    setActive(i);
                    const c = enRef.current;
                    const el = enSentRefs.current[i];
                    if (c && el) c.scrollTop = el.offsetTop;
                    requestAnimationFrame(() => {
                      lockedRef.current = null;
                    });
                  }}
                >
                  {i === 0 && (
                    <span style={{ marginRight: 12, verticalAlign: "middle", display: "inline-block", transform: "translateY(-2px)" }}>
                      <PlayIcon />
                    </span>
                  )}
                  {enWordSpans(s)}
                </div>
              );
            })}
            <div style={{ marginTop: 18, marginBottom: 24 }}>
              <div
                className="inline-flex items-center justify-center rounded-md"
                style={{ background: "#23272e", color: "white", fontSize: 22, padding: "6px 18px" }}
              >
                语法
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute" style={{ left: 850, top: COL_TOP, width: 740, height: COL_H }}>
        <div
          ref={zhRef}
          onScroll={() => handleScroll("zh")}
          onPointerDown={() => onPointerDown("zh")}
          onPointerUp={() => onPointerUp("zh")}
          onPointerCancel={() => onPointerUp("zh")}
          onTouchStart={() => onPointerDown("zh")}
          onTouchEnd={() => onPointerUp("zh")}
          className="overflow-y-auto overflow-x-hidden"
          style={{
            width: "100%",
            height: "100%",
            touchAction: "pan-y",
            overscrollBehavior: "contain",
          }}
        >
          <div style={{ paddingBottom: COL_H - LINE_H }}>
            {ZH_SENTENCES.map((s, i) => {
              const isActive = active === i;
              const isOrange = i === 0;
              const color = isActive ? "#ffd34d" : isOrange ? "#ec9709" : "#cfd6e2";
              return (
                <div
                  key={i}
                  ref={(el) => {
                    zhSentRefs.current[i] = el;
                  }}
                  className="font-['Noto_Sans_SC:Regular',sans-serif]"
                  style={{
                    fontSize: FONT_SIZE,
                    lineHeight: `${LINE_H}px`,
                    color,
                    padding: "2px 0",
                  }}
                  onClick={() => {
                    lockedRef.current = "zh";
                    setActive(i);
                    const c = zhRef.current;
                    const el = zhSentRefs.current[i];
                    if (c && el) c.scrollTop = el.offsetTop;
                    requestAnimationFrame(() => {
                      lockedRef.current = null;
                    });
                  }}
                >
                  {i === 0 && (
                    <span style={{ marginRight: 12, verticalAlign: "middle", display: "inline-block", transform: "translateY(-2px)" }}>
                      <PlayIcon />
                    </span>
                  )}
                  {s}
                </div>
              );
            })}
            <div
              style={{
                marginTop: 14,
                marginBottom: 24,
                color: "#959caa",
                fontSize: 20,
                fontFamily: "Noto Sans SC, sans-serif",
              }}
            >
              以上句子由机器智能翻译
            </div>
          </div>
        </div>
      </div>

      <RightButtons mode="fenping" onToggleMode={onToggleMode} />
    </div>
  );
}
