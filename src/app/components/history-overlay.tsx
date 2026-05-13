import type { FrameId } from "../App";

const ROW_TOP_PCT = [5.91, 14.32, 22.74, 31.15, 39.57, 47.99, 56.4, 64.82, 73.23, 81.65, 90.06];
const ROW_H_PCT = 0.0707;

const LEFT_ITEMS: (FrameId | null)[] = [
  "hanzi-shan-fenping",
  "ciyu-meili",
  "xiehouyu-short",
  "poem-jingyesi",
  "shiju-long",
  "word-present",
  "word-presen",
  "pinyin+word-a",
  "pinyin+fanyi-zhuang",
  "ensentence-short-fenping",
  "cnsentence-fenping",
];

const RIGHT_ITEMS: (FrameId | null)[] = [
  "hanzi-he",
  "ciyu-zhaoyang",
  "xiehouyu-long",
  "shiju-short",
  "shiju-long-houxuan",
  "longword",
  "duanyu",
  "pinyin-hao",
  "pinyin-meili",
  "ensentence-fenping",
  null,
];

export function HistoryOverlay({
  onNavigate,
  canvasWidth,
  canvasHeight,
}: {
  onNavigate: (f: FrameId) => void;
  canvasWidth: number;
  canvasHeight: number;
}) {
  const LEFT_X = canvasWidth * 0.0463;
  const RIGHT_X = canvasWidth * 0.5049;
  const COL_W = canvasWidth * 0.4421;
  const ROW_H = canvasHeight * ROW_H_PCT;

  return (
    <>
      {ROW_TOP_PCT.map((tp, i) => {
        const top = (tp / 100) * canvasHeight;
        const left = LEFT_ITEMS[i];
        const right = RIGHT_ITEMS[i];
        return (
          <div key={i}>
            {left && (
              <button
                onClick={() => onNavigate(left)}
                className="absolute cursor-pointer hover:bg-white/5 active:bg-white/10 rounded-sm"
                style={{ left: LEFT_X, top, width: COL_W, height: ROW_H }}
                aria-label={left}
              />
            )}
            {right && (
              <button
                onClick={() => onNavigate(right)}
                className="absolute cursor-pointer hover:bg-white/5 active:bg-white/10 rounded-sm"
                style={{ left: RIGHT_X, top, width: COL_W, height: ROW_H }}
                aria-label={right}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
