import {
  EN_SENTENCES,
  ZH_SENTENCES,
  PlayIcon,
  enWordSpans,
  RightButtons,
} from "./ensentence-shared";

const LINE_H = 44;
const FONT_SIZE = 30;

export default function EnsentenceBufenping({ onToggleMode }: { onToggleMode: () => void }) {
  return (
    <div className="bg-black relative size-full overflow-hidden" data-name="ensentence-bufenping">
      <div
        className="absolute inset-0 overflow-y-auto overflow-x-hidden"
        style={{
          paddingRight: 75,
          paddingLeft: 50,
          paddingTop: 16,
          paddingBottom: 24,
          touchAction: "pan-y",
          overscrollBehavior: "contain",
        }}
      >
        <div
          className="font-['Noto_Sans_SC:Bold',sans-serif] font-bold"
          style={{ fontSize: FONT_SIZE, lineHeight: `${LINE_H}px`, color: "#cfd6e2" }}
        >
          <span style={{ marginRight: 12, verticalAlign: "middle", display: "inline-block", transform: "translateY(-2px)" }}>
            <PlayIcon />
          </span>
          {EN_SENTENCES.map((s, i) => (
            <span key={i}>{enWordSpans(s)} </span>
          ))}
        </div>

        <div style={{ marginTop: 16, marginBottom: 18 }}>
          <div
            className="inline-flex items-center justify-center rounded-md"
            style={{ background: "#23272e", color: "white", fontSize: 22, padding: "6px 18px" }}
          >
            语法
          </div>
        </div>

        <div
          className="font-['Noto_Sans_SC:Regular',sans-serif]"
          style={{ fontSize: FONT_SIZE, lineHeight: `${LINE_H}px`, color: "#cfd6e2" }}
        >
          <span style={{ marginRight: 12, verticalAlign: "middle", display: "inline-block", transform: "translateY(-2px)" }}>
            <PlayIcon />
          </span>
          {ZH_SENTENCES.join("")}
        </div>

        <div
          style={{
            marginTop: 14,
            color: "#959caa",
            fontSize: 20,
            fontFamily: "Noto Sans SC, sans-serif",
          }}
        >
          以上句子由机器智能翻译
        </div>
      </div>

      <RightButtons mode="bufenping" onToggleMode={onToggleMode} />
    </div>
  );
}
