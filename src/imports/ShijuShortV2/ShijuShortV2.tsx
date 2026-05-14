import type { CSSProperties } from "react";
import imgShoucang2 from "./shoucang2.png";

type BoxProps = { className?: string; style?: CSSProperties };

function KeyboardIcon({ className, style }: BoxProps) {
  return (
    <div className={className || "relative size-[52px]"} style={style} data-name="键盘录入">
      <svg viewBox="0 0 52 52" className="absolute inset-0 size-full" fill="none">
        <rect width="52" height="52" rx="6" fill="#23272e" />
      </svg>
      {/* 键盘按键 */}
      <div className="absolute contents inset-[32.69%_19.23%_23.08%_17.31%]">
        <div className="absolute bg-[#cfd6e2] inset-[69.23%_36.54%_23.08%_34.62%] rounded-[1px]" />
        <div className="absolute bg-[#cfd6e2] inset-[32.69%_71.15%_55.77%_17.31%] rounded-[1px]" />
        <div className="absolute bg-[#cfd6e2] inset-[32.69%_53.85%_55.77%_34.62%] rounded-[1px]" />
        <div className="absolute bg-[#cfd6e2] inset-[32.69%_36.54%_55.77%_51.92%] rounded-[1px]" />
        <div className="absolute bg-[#cfd6e2] inset-[32.69%_19.23%_55.77%_69.23%] rounded-[1px]" />
        <div className="absolute bg-[#cfd6e2] bottom-[38.46%] left-[17.31%] right-[71.15%] rounded-[1px] top-1/2" />
        <div className="absolute bg-[#cfd6e2] bottom-[38.46%] left-[34.62%] right-[53.85%] rounded-[1px] top-1/2" />
        <div className="absolute bg-[#cfd6e2] bottom-[38.46%] left-[51.92%] right-[36.54%] rounded-[1px] top-1/2" />
        <div className="absolute bg-[#cfd6e2] bottom-[38.46%] left-[69.23%] right-[19.23%] rounded-[1px] top-1/2" />
      </div>
    </div>
  );
}

function StarIcon({ className, style }: BoxProps) {
  return (
    <div className={className || "relative size-[52px]"} style={style}>
      <svg viewBox="0 0 52 52" className="absolute inset-0 size-full" fill="none">
        <circle cx="26" cy="26" r="25" fill="#23272e" />
        <path
          d="M26 14 L29.4 22.4 L38.5 23.1 L31.6 29.1 L33.6 38 L26 33.2 L18.4 38 L20.4 29.1 L13.5 23.1 L22.6 22.4 Z"
          fill="#fbc02d"
        />
      </svg>
    </div>
  );
}

function FullscreenIcon({ className, style }: BoxProps) {
  return (
    <div className={className || "relative size-[52px]"} style={style}>
      <svg viewBox="0 0 52 52" className="absolute inset-0 size-full" fill="none">
        <rect width="52" height="52" rx="6" fill="#23272e" />
        <rect x="13" y="15" width="26" height="22" rx="5" stroke="#4edd83" strokeWidth="3" />
        <path d="M26 22 V30 M22 26 L26 30 L30 26" stroke="#4edd83" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ListIcon({ className, style }: BoxProps) {
  return (
    <div className={className || "relative size-[52px]"} style={style} data-name="列表">
      <svg viewBox="0 0 52 52" className="absolute inset-0 size-full" fill="none">
        <rect width="52" height="52" rx="6" fill="#23272e" />
      </svg>
      <div className="absolute contents inset-[30.77%_28.85%_30.77%_30.77%]">
        <div className="absolute bg-[#86f0fd] inset-[30.77%_61.54%_61.54%_30.77%] rounded-[1px]" />
        <div className="absolute bg-[#86f0fd] inset-[30.77%_28.85%_61.54%_44.23%] rounded-[1px]" />
        <div className="absolute bg-[#86f0fd] inset-[46.15%_61.54%_46.15%_30.77%] rounded-[1px]" />
        <div className="absolute bg-[#86f0fd] inset-[46.15%_28.85%_46.15%_44.23%] rounded-[1px]" />
        <div className="absolute bg-[#86f0fd] inset-[61.54%_61.54%_30.77%_30.77%] rounded-[1px]" />
        <div className="absolute bg-[#86f0fd] inset-[61.54%_28.85%_31.73%_44.23%] rounded-[1px]" />
      </div>
    </div>
  );
}

function VoiceButton({ className, style }: BoxProps) {
  return (
    <div className={className || "absolute"} style={style} data-name="语音播放按钮">
      <div className="absolute inset-0 bg-[#23272e] rounded-[6px]" />
      <svg
        viewBox="0 0 28 32"
        className="absolute"
        style={{ left: 18, top: 8, width: 28, height: 32 }}
        fill="none"
      >
        <rect x="7.4" y="1" width="13" height="22" rx="5" stroke="white" strokeWidth="2" />
        <path
          d="M27.6 19.2 C26.1 26.5 20.5 32 13.8 32 C7.1 32 1.5 26.5 0 19.2 H2.8 C4.3 24.8 8.6 28.8 13.8 28.8 C19 28.8 23.4 24.8 24.8 19.2 Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function BookCornerIcon({ className, style }: BoxProps) {
  return (
    <svg
      viewBox="0 0 32 29.09"
      className={className || "absolute"}
      style={style}
      fill="none"
    >
      <rect width="32" height="29.09" rx="5.6" fill="#16181c" />
      <path
        d="M11.2 9.4 C11.2 9.4 14.1 11.0 14.1 14.4 C14.1 17.8 11.2 19.6 11.2 19.6"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M16.4 4.8 C16.4 4.8 21.4 8.2 21.4 14.5 C21.4 20.8 16.4 23.7 16.4 23.7"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PinyinLine({ className, style }: BoxProps) {
  return (
    <svg
      viewBox="0 0 56 2"
      preserveAspectRatio="none"
      className={className || "absolute"}
      style={style}
      fill="none"
    >
      <line x1="0.5" y1="1" x2="55.5" y2="1" stroke="#EC9709" strokeLinecap="round" />
    </svg>
  );
}

function DividerVertical({ className, style }: BoxProps) {
  return (
    <svg
      viewBox="0 0 1 346"
      preserveAspectRatio="none"
      className={className || "absolute"}
      style={style}
      fill="none"
    >
      <line
        x1="0.5"
        y1="0.5"
        x2="0.5"
        y2="345.5"
        stroke="#545454"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

function CornerDot({ className, style }: BoxProps) {
  return (
    <svg
      viewBox="0 0 11 11"
      className={className || "absolute"}
      style={style}
      fill="none"
    >
      <circle cx="5.5" cy="5.5" r="4" fill="#0BC8A6" stroke="black" strokeWidth="3" />
    </svg>
  );
}

function TranslationBadge({ className, style }: BoxProps) {
  return (
    <div className={className || "absolute"} style={style} data-name="译字徽章">
      <div
        className="absolute inset-0 rounded-[6px]"
        style={{
          backgroundImage:
            "linear-gradient(143.36deg, #f39b00 33.76%, #e23700 91.2%)",
        }}
      />
      <div
        className="absolute border-[1.8px] border-white rounded-[4.5px] flex items-center justify-center"
        style={{ left: 6, top: 5, width: 14, height: 14 }}
      >
        <span
          className="text-white font-['Noto_Sans_SC:Regular',sans-serif] leading-none"
          style={{ fontSize: 9 }}
        >
          译
        </span>
      </div>
    </div>
  );
}

function FavoriteButton({ className, style }: BoxProps) {
  return (
    <div className={className || "absolute size-[68px]"} style={style} data-name="收藏">
      <div className="absolute inset-0 bg-[rgba(65,188,255,0.14)] border border-[#10d7ff] border-solid" />
      <div
        className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat flex items-center justify-center"
      >
        <img alt="" src={imgShoucang2} className="w-[44px] h-[40px] object-contain" />
      </div>
    </div>
  );
}

export default function ShijuShortV2() {
  return (
    <div className="bg-black relative size-full" data-name="shiju-short-v2">
      {/* ===== 左侧固定区 (x: 0 ~ 462) ===== */}

      {/* 标题:床前明月光 */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#ec9709] text-[64px] leading-[normal]"
        style={{ left: 23, top: 14, width: 427 }}
      >
        床前明月光
      </div>

      {/* 5 条拼音横线 */}
      {[23, 89, 153, 217, 281].map((x, i) => (
        <PinyinLine
          key={i}
          className="absolute"
          style={{ left: x, top: 96, width: 56, height: 2 }}
        />
      ))}

      {/* 翻页书图标 */}
      <BookCornerIcon
        className="absolute"
        style={{ left: 23, top: 127, width: 32, height: 29 }}
      />

      {/* 语音播放按钮 */}
      <VoiceButton style={{ left: 80, top: 119, width: 60, height: 44 }} />

      {/* 出处:静夜思 */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#7b8396] text-[30px] leading-[normal]"
        style={{ left: 25, top: 207, width: 160 }}
      >
        出处:
      </div>
      <p
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#08c8a5] text-[32px] leading-[normal] m-0"
        style={{ left: 136, top: 205, width: 293 }}
      >
        静夜思
      </p>

      {/* ===== 中间垂直分隔线 (x=462) ===== */}
      <DividerVertical
        className="absolute"
        style={{ left: 462, top: 0, width: 1, height: 348 }}
      />

      {/* ===== 中间主区 (x: 463 ~ 1564) ===== */}

      {/* 释义首段 (顶部 0-115) */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#cfd6e2] text-[32px]"
        style={{ left: 480, top: 20, width: 940, lineHeight: "41px" }}
      >
        <p className="m-0 leading-[41px]">
          床:今传五种说法。一指井台。二指井栏。三"床"是"窗"的通假字。四指坐卧的器具。五解释为胡床。
        </p>
      </div>

      {/* 中段释义圆点 + "释义"标签 */}
      <CornerDot
        className="absolute"
        style={{ left: 480, top: 200, width: 14, height: 14 }}
      />
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#08c8a5] text-[28px] leading-[normal]"
        style={{ left: 506, top: 194, width: 160 }}
      >
        释义
      </div>

      {/* 中段释义内容 */}
      <p
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#cfd6e2] text-[32px] leading-[41px] m-0"
        style={{ left: 480, top: 240, width: 792 }}
      >
        明亮的月光洒在床前的窗户纸上
      </p>

      {/* 来源 + 更多词典 */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#959caa] text-[24px] leading-[normal]"
        style={{ left: 480, top: 308, width: 447 }}
      >
        来源《古诗文精选》
      </div>
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#d4e0ff] text-[24px] leading-[28px] underline decoration-solid"
        style={{ left: 720, top: 308, width: 247 }}
      >
        更多词典
      </div>

      {/* === 滚动后:汉英翻译区(>= 348) === */}

      {/* 译字徽章 + 标签 */}
      <TranslationBadge
        className="absolute"
        style={{ left: 480, top: 405, width: 37, height: 30 }}
      />
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#cfd6e2] text-[30px] leading-[normal]"
        style={{ left: 530, top: 408, width: 185 }}
      >
        汉英翻译
      </div>

      {/* 英文翻译 */}
      <p
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#cfd6e2] text-[32px] leading-[41px] m-0"
        style={{ left: 480, top: 470, width: 956 }}
      >
        Before my bed there streams in the moonlight.
      </p>

      {/* 以上句子... */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#959caa] text-[24px] leading-[normal]"
        style={{ left: 480, top: 555, width: 447 }}
      >
        以上句子由英语人工专家翻译
      </div>

      {/* ===== 右侧固定区 (x: 1565 ~ 1640) ===== */}

      {/* 右上:虚线小绿点 + 注释 */}
      <CornerDot
        className="absolute"
        style={{ left: 1490, top: 27, width: 14, height: 14 }}
      />
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#08c8a5] text-[28px] leading-[normal]"
        style={{ left: 1515, top: 20, width: 79 }}
      >
        注释
      </div>

      {/* 右中:详情(对应中间汉英翻译位置) */}
      <CornerDot
        className="absolute"
        style={{ left: 1490, top: 414, width: 14, height: 14 }}
      />
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#08c8a5] text-[28px] leading-[normal]"
        style={{ left: 1515, top: 407, width: 79 }}
      >
        详情
      </div>

      {/* 收藏按钮 + 4 个图标 */}
      <FavoriteButton style={{ left: 1568, top: 0, width: 72, height: 72 }} />
      <ListIcon className="absolute size-[52px]" style={{ left: 1578, top: 82 }} />
      <StarIcon className="absolute size-[52px]" style={{ left: 1578, top: 144 }} />
      <FullscreenIcon className="absolute size-[52px]" style={{ left: 1578, top: 206 }} />
      <KeyboardIcon className="absolute size-[52px]" style={{ left: 1578, top: 268 }} />
    </div>
  );
}
