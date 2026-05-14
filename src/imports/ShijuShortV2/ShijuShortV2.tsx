import type { CSSProperties } from "react";
import imgGroup121 from "./group121.png";
import imgEllipse8 from "./ellipse8.png";
import imgStar1 from "./star1.png";
import imgGroup122 from "./group122.png";
import imgVector17 from "./vector17.png";
import imgGroup123 from "./group123.png";
import imgShoucang1 from "./shoucang1.png";
import imgShoucang2 from "./shoucang2.png";
import imgPinyinLine from "./pinyin-line.png";
import imgDividerV from "./divider-vertical.png";
import imgBookCorner from "./book-corner.png";
import imgVoiceIcon from "./voice-icon.png";
import imgEllipseCorner from "./ellipse-corner.png";
import imgTranslationArrow from "./translation-arrow.png";
import imgTranslationBadge from "./translation-badge.png";
import imgTranslationWarn from "./translation-warn.png";

type BoxProps = { className?: string; style?: CSSProperties };

function KeyboardIcon({ className, style }: BoxProps) {
  return (
    <div className={className || "relative size-[52px]"} style={style} data-name="键盘录入">
      <div className="absolute h-[52px] left-0 right-0 top-0">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup121} />
      </div>
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
      <div className="absolute aspect-[60/60] left-0 right-0 top-0">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse8} />
      </div>
      <div className="absolute aspect-[29/29] left-[23.08%] right-[23.08%] top-[12px]">
        <div className="absolute inset-[-2.61%_-0.48%_5.72%_-0.48%]">
          <img alt="" className="block max-w-none size-full" src={imgStar1} />
        </div>
      </div>
    </div>
  );
}

function FullscreenIcon({ className, style }: BoxProps) {
  return (
    <div className={className || "relative size-[52px]"} style={style}>
      <div className="absolute h-[52px] left-0 right-0 top-0">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup122} />
      </div>
      <div className="absolute border-[3px] border-[#4edd83] border-solid bottom-[30.77%] left-1/4 right-[23.08%] rounded-[5px] top-[28.85%]" />
      <div className="absolute flex inset-[42.31%_36.54%_57.69%_38.46%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[0px]">
          <div className="relative size-full">
            <div className="absolute inset-[-7.69%_-1px]">
              <img alt="" className="block max-w-none size-full" src={imgVector17} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListIcon({ className, style }: BoxProps) {
  return (
    <div className={className || "relative size-[52px]"} style={style} data-name="列表">
      <div className="absolute h-[52px] left-0 right-0 top-0">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup123} />
      </div>
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
      <img
        alt=""
        src={imgVoiceIcon}
        className="absolute"
        style={{ left: 19, top: 8, width: 28, height: 32 }}
      />
    </div>
  );
}

function FavoriteButton({ className, style }: BoxProps) {
  return (
    <div className={className || "absolute size-[68px]"} style={style} data-name="收藏">
      <div className="absolute inset-0 bg-[rgba(65,188,255,0.14)] border border-[#10d7ff] border-solid" />
      <div
        className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat"
        style={{
          maskImage: `url('${imgShoucang1}')`,
          maskSize: "68px 68px",
          maskPosition: "center",
        }}
      >
        <img alt="" src={imgShoucang2} className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </div>
  );
}

function CornerDot({ className, style }: BoxProps) {
  return (
    <div className={className || "absolute"} style={style} data-name="知识图谱-小绿点">
      <div className="absolute inset-0 border border-[#5d6575] border-dashed rounded-[4px]" />
      <img
        alt=""
        src={imgEllipseCorner}
        className="absolute"
        style={{ left: 2, top: 2, width: 8, height: 8 }}
      />
    </div>
  );
}

export default function ShijuShortV2() {
  return (
    <div className="bg-black relative size-full" data-name="shiju-short-v2">
      {/* 标题：床前明月光 */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#ec9709] text-[64px] leading-[normal]"
        style={{ left: 23, top: 45.5, width: 427, transform: "translateY(-50%)" }}
      >
        床前明月光
      </div>

      {/* 翻页书图标 */}
      <img
        alt=""
        src={imgBookCorner}
        className="absolute"
        style={{ left: 25, top: 121, width: 32, height: 29 }}
      />

      {/* 5 条拼音横线 */}
      {[25, 91, 154, 218, 283].map((x, i) => (
        <img
          key={i}
          alt=""
          src={imgPinyinLine}
          className="absolute"
          style={{ left: x, top: 85, width: 55, height: 2 }}
        />
      ))}

      {/* 语音播放按钮 */}
      <VoiceButton style={{ left: 80, top: 112, width: 65, height: 48 }} />

      {/* 出处：+ 静夜思 */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#7b8396] text-[30px] leading-[normal]"
        style={{ left: 25, top: 218.5, width: 160, transform: "translateY(-50%)" }}
      >
        出处:
      </div>
      <p
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#08c8a5] text-[32px] leading-[41px] m-0"
        style={{ left: 136, top: 195, width: 293 }}
      >
        静夜思
      </p>

      {/* 中间垂直分隔线 */}
      <img
        alt=""
        src={imgDividerV}
        className="absolute"
        style={{ left: 462, top: 0, width: 1, height: 348 }}
      />

      {/* 释义首段 */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#cfd6e2] text-[32px]"
        style={{ left: 411, top: 72.5, width: 801, lineHeight: "41px", transform: "translateY(-50%)" }}
      >
        <p className="m-0 leading-[41px]">
          床:今传五种说法。一指井台。二指井栏。三"床"是"窗"的通假字。四指坐卧的器具。五解释为胡床。
        </p>
      </div>

      {/* 中段释义圆点 + "释义"标签 */}
      <CornerDot style={{ left: 419, top: 192, width: 12, height: 13 }} />
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#7b8396] text-[30px] leading-[normal]"
        style={{ left: 442, top: 198.5, width: 160, transform: "translateY(-50%)" }}
      >
        释义
      </div>

      {/* 中段释义内容 */}
      <p
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#cfd6e2] text-[32px] leading-[41px] m-0"
        style={{ left: 411, top: 248, width: 792 }}
      >
        明亮的月光洒在床前的窗户纸上
      </p>

      {/* 来源 + 更多词典 */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#959caa] text-[24px] leading-[normal]"
        style={{ left: 419, top: 357.5, width: 447, transform: "translateY(-50%)" }}
      >
        来源《古诗文精选》
      </div>
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#d4e0ff] text-[24px] leading-[28px] underline decoration-solid"
        style={{ left: 658, top: 355, width: 247, transform: "translateY(-50%)" }}
      >
        更多词典
      </div>

      {/* 译字徽章底层（PNG 渲染外形） */}
      <img
        alt=""
        src={imgTranslationBadge}
        className="absolute"
        style={{ left: 446, top: 458, width: 37, height: 30 }}
      />
      {/* 译字徽章渐变方块（覆盖在 PNG 上，保证文字清晰） */}
      <div
        className="absolute rounded-[4.5px] border-[1.8px] border-white flex items-center justify-center"
        style={{
          left: 451,
          top: 463,
          width: 19,
          height: 20,
          backgroundImage:
            "linear-gradient(143.36deg, rgb(243, 155, 0) 33.76%, rgb(226, 55, 0) 91.2%)",
        }}
      >
        <span className="text-white text-[12.6px] font-['Noto_Sans_SC:Regular',sans-serif] leading-none">译</span>
      </div>
      {/* 译字徽章右侧的上传箭头 */}
      <img
        alt=""
        src={imgTranslationArrow}
        className="absolute"
        style={{ left: 488, top: 463, width: 22, height: 22 }}
      />
      {/* 汉英翻译标签 */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#cfd6e2] text-[30px] leading-[normal]"
        style={{ left: 505, top: 476.5, width: 185, transform: "translateY(-50%)" }}
      >
        汉英翻译
      </div>

      {/* Before my bed... */}
      <p
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#cfd6e2] text-[32px] leading-[41px] m-0"
        style={{ left: 463, top: 536, width: 956, height: 61 }}
      >
        Before my bed there streams in the moonlight.
      </p>

      {/* 警告小图标 */}
      <img
        alt=""
        src={imgTranslationWarn}
        className="absolute"
        style={{ left: 461, top: 625, width: 18, height: 18 }}
      />

      {/* 以上句子由英语人工专家翻译 */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#959caa] text-[24px] leading-[normal]"
        style={{ left: 488, top: 636.5, width: 447, transform: "translateY(-50%)" }}
      >
        以上句子由英语人工专家翻译
      </div>

      {/* 右上角：注释标签 + 虚线小点 */}
      <CornerDot style={{ left: 1437, top: 22, width: 12, height: 13 }} />
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#08c8a5] text-[28px] leading-[normal]"
        style={{ left: 1448, top: 33.5, width: 79, transform: "translateY(-50%)" }}
      >
        注释
      </div>

      {/* 右上：释义小标签 */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#7b8396] text-[28px] leading-[normal]"
        style={{ left: 1446, top: 82.5, width: 129, transform: "translateY(-50%)" }}
      >
        释义
      </div>

      {/* 右中：详情标签 + 虚线小点 */}
      <CornerDot style={{ left: 1437, top: 509, width: 12, height: 13 }} />
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[#08c8a5] text-[28px] leading-[normal]"
        style={{ left: 1448, top: 520.5, width: 79, transform: "translateY(-50%)" }}
      >
        详情
      </div>

      {/* 右侧固定区：收藏按钮 + 4 图标 */}
      <FavoriteButton className="absolute size-[68px]" style={{ left: 1572, top: 1 }} />
      <ListIcon className="absolute size-[52px]" style={{ left: 1580, top: 78 }} />
      <StarIcon className="absolute size-[52px]" style={{ left: 1580, top: 140 }} />
      <FullscreenIcon className="absolute size-[52px]" style={{ left: 1580, top: 202 }} />
      <KeyboardIcon className="absolute size-[52px]" style={{ left: 1580, top: 264 }} />
    </div>
  );
}
