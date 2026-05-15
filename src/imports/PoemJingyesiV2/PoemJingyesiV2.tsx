import { useRef, useState } from "react";
import imgGroup121 from "./group121.svg";
import imgEllipse8 from "./ellipse8.svg";
import imgStar1 from "./star1.svg";
import imgGroup122 from "./group122.svg";
import imgVector17 from "./vector17.svg";
import imgGroup123 from "./group123.svg";
import imgEllipseCorner from "./ellipse-corner.svg";
import imgVoiceIcon from "./voice-icon.svg";
import imgDividerV from "./divider-vertical.svg";
import imgPinyinLine from "./pinyin-line.svg";
import imgInfoIcon from "./info-icon.svg";
import imgBookCorner from "./book-corner.svg";
import imgArrowCollapse from "./arrow-collapse.svg";
import imgArrowCollapseInner from "./arrow-collapse-inner.svg";
import imgPathDivider from "./path-divider.svg";
import imgGroup44 from "./group44.svg";
import imgGroup53 from "./group53.svg";
import imgCardBg from "./card-bg.svg";
import imgGroup72 from "./group72.svg";
import imgShoucang from "./shoucang.png";

function KeyboardIcon({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[52px]"} data-name="键盘录入">
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

function StarBadgeIcon({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[52px]"}>
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

function FullscreenIcon({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[52px]"}>
      <div className="absolute h-[52px] left-0 right-0 top-0">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup122} />
      </div>
      <div className="absolute border-[3px] border-[#4edd83] border-solid bottom-[30.77%] left-1/4 right-[23.08%] rounded-[5px] top-[28.85%]" />
      <div
        className="absolute flex inset-[42.31%_36.54%_57.69%_38.46%] items-center justify-center"
        style={{ containerType: "size" }}
      >
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

function ListIcon({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[52px]"} data-name="列表">
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

// 4 行诗词 ↔ 4 段释义的数据映射
const POEM_LINES = [
  "床前明月光,",
  "疑是地上霜。",
  "举头望明月,",
  "低头思故乡。",
];

const MEANING_GROUPS: { lines: { text: string; dim?: boolean }[] }[] = [
  {
    lines: [
      { text: "1.床前明月光," },
      { text: "明亮的月光洒在床前的窗户纸上," },
      {
        text: "床:今传五种说法。一指井台。二指井栏。三“床”是“窗”的通假字。四指坐卧的器具。五解释为胡床。",
        dim: true,
      },
    ],
  },
  {
    lines: [
      { text: "2.疑是地上霜。", dim: true },
      { text: "好像地上泛起了一层霜。" },
      { text: "疑:好像。", dim: true },
    ],
  },
  {
    lines: [
      { text: "3.举头望明月,", dim: true },
      { text: "我禁不住抬起头来,看天上的那轮明月," },
      { text: "举头:抬头。", dim: true },
    ],
  },
  {
    lines: [
      { text: "4.低头思故乡。", dim: true },
      { text: "不由得低头沉思,想起远方的家乡。" },
    ],
  },
];

function findScrollParent(el: HTMLElement | null): HTMLElement | null {
  let p = el?.parentElement ?? null;
  while (p && p !== document.body) {
    const overflow = getComputedStyle(p).overflowY;
    if (overflow === "auto" || overflow === "scroll") return p;
    p = p.parentElement;
  }
  return null;
}

export default function PoemJingyesiV2() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const meaningRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const handlePoemClick = (idx: number) => {
    setActiveIdx(idx);
    const target = meaningRefs.current[idx];
    const scroller = findScrollParent(target);
    if (!scroller || !target) return;
    scroller.scrollTo({ top: Math.max(0, target.offsetTop - 30), behavior: "smooth" });
  };

  const handleMeaningClick = (idx: number) => {
    setActiveIdx(idx);
    const target = lineRefs.current[idx];
    const scroller = findScrollParent(target);
    if (!scroller || !target) return;
    scroller.scrollTo({ top: Math.max(0, target.offsetTop - 30), behavior: "smooth" });
  };

  return (
    <div className="bg-black relative size-full" data-name="poem-jingyesi-v2">
      {/* ===== 右上角标签:诗词释义 / 作者简介 / 诗词赏析 ===== */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+626px)] text-[#08c8a5] text-[28px] top-[calc(50%-1382.5px)] w-[124px]">
        <p className="leading-[normal]">诗词释义</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+628px)] text-[#7b8396] text-[28px] top-[calc(50%-1327.5px)] w-[115px]">
        <p className="leading-[normal]">作者简介</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+627px)] text-[#7b8396] text-[28px] top-[calc(50%-1268.5px)] w-[115px]">
        <p className="leading-[normal]">诗词赏析</p>
      </div>

      {/* 右上角小绿点装饰 */}
      <div className="absolute border border-[#5d6575] border-dashed inset-[0.85%_12.38%_93.53%_87.56%]" />
      <div className="absolute inset-[0.88%_12.07%_98.73%_87.26%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipseCorner} />
      </div>
      <div className="absolute inset-[3.96%_11.83%_95.62%_88.11%]" />

      {/* 语音播放按钮 */}
      <div className="absolute contents inset-[0.99%_79.82%_97.31%_16.22%]">
        <div className="absolute bg-[#23272e] inset-[0.99%_79.82%_97.31%_16.22%] rounded-[6px]" />
        <div className="absolute inset-[1.27%_80.94%_97.6%_17.38%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVoiceIcon} />
        </div>
      </div>

      {/* 背诵按钮(深灰圆角矩形 + "背诵"文字) */}
      <div className="absolute bg-[#23272e] inset-[4.13%_82.44%_94.28%_13.66%] rounded-[6px]" />
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal h-[38.438px] justify-center leading-[0] text-[24px] text-white"
        style={{ left: 232, top: 138.22, width: 63.03 }}
      >
        <p className="leading-[41px]">背诵</p>
      </div>

      {/* 中间垂直分隔线 */}
      <div className="absolute flex inset-[0.18%_71.52%_87.53%_28.41%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full">
            <div className="absolute inset-[0_0.82%_0_-0.14%]">
              <img alt="" className="block max-w-none size-full" src={imgDividerV} />
            </div>
          </div>
        </div>
      </div>

      {/* 顶部标题区:"静夜思" 64px */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-798px)] text-[#ec9709] text-[64px] top-[48.5px] w-[277px]">
        <p className="leading-[normal]">静夜思</p>
      </div>

      {/* 3 条拼音线 */}
      <div className="absolute inset-[3%_95.12%_96.96%_1.52%]">
        <div className="absolute inset-[0_0_0_-0.91%]">
          <img alt="" className="block max-w-none size-full" src={imgPinyinLine} />
        </div>
      </div>
      <div className="absolute inset-[3%_91.1%_96.96%_5.55%]">
        <div className="absolute inset-[0_0_0_-0.91%]">
          <img alt="" className="block max-w-none size-full" src={imgPinyinLine} />
        </div>
      </div>
      <div className="absolute inset-[3.04%_86.89%_96.93%_9.76%]">
        <div className="absolute inset-[0_0_0_-0.91%]">
          <img alt="" className="block max-w-none size-full" src={imgPinyinLine} />
        </div>
      </div>

      {/* 翻页书图标 */}
      <div className="absolute inset-[1.2%_84.39%_97.77%_13.66%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBookCorner} />
      </div>

      {/* ===== 左侧固定区:全文(标题 + 朝代 + 4 句诗) ===== */}
      {/* 容器在 (左 25, top 256.5) — 对应 calc(50%-1158.5px) */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[0]"
        style={{ left: 22, top: 235, width: 291 }}
      >
        <p className="leading-[normal] mb-[3px] text-[40px] text-[#cfd6e2]">静夜思</p>
        <p className="leading-[normal] mb-[3px] text-[28px] text-[rgba(207,214,226,0.7)]">[唐代]李白</p>
        {POEM_LINES.map((line, i) => (
          <p
            key={i}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            onClick={() => handlePoemClick(i)}
            className={`leading-[normal] mb-[3px] text-[40px] cursor-pointer transition-colors select-none ${
              activeIdx === i ? "text-[#ec9709]" : "text-[#cfd6e2]"
            }`}
          >
            {line}
          </p>
        ))}
      </div>

      {/* ===== 中间主区:诗词释义标签 + 4 段(可点击) ===== */}
      {/* "诗词释义"圆点 + 文字 — Figma:left[calc(50%-305px)] top[calc(50%-1378.5px)] => (515, 36.5) */}
      <div className="absolute contents left-[492px] top-[5px]">
        <div className="absolute contents inset-[1.04%_69.27%_98.53%_30%]">
          <div className="absolute bg-[#08c8a5] inset-[1.04%_69.27%_98.53%_30%] opacity-40 rounded-[15px]" />
        </div>
        <div className="absolute contents inset-[1.04%_69.02%_98.53%_30.24%]">
          <div className="absolute bg-[#08c8a5] inset-[1.04%_69.02%_98.53%_30.24%] rounded-[15px]" />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-305px)] text-[#7b8396] text-[30px] top-[calc(50%-1378.5px)] w-[160px]">
          <p className="leading-[normal]">诗词释义</p>
        </div>
      </div>

      {/* 4 段释义 — 起点 y=70 (calc(50%-1345px) = 1415-1345),宽 949 */}
      <div
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal text-[32px]"
        style={{ left: 486, top: 70, width: 949 }}
      >
        {MEANING_GROUPS.map((group, i) => (
          <div
            key={i}
            ref={(el) => {
              meaningRefs.current[i] = el;
            }}
            onClick={() => handleMeaningClick(i)}
            className="cursor-pointer select-none"
          >
            {group.lines.map((ln, j) => (
              <p
                key={j}
                className={`leading-[41px] mb-[3px] transition-colors ${
                  activeIdx === i
                    ? "text-[#ec9709]"
                    : ln.dim
                    ? "text-[rgba(207,214,226,0.7)]"
                    : "text-[#cfd6e2]"
                }`}
              >
                {ln.text}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* "作者简介"标签(中间区,y=646.5) */}
      <div className="absolute contents left-[492px] top-[615px]">
        <div className="absolute contents inset-[22.6%_69.27%_76.98%_30%]">
          <div className="absolute bg-[#08c8a5] inset-[22.6%_69.27%_76.98%_30%] opacity-40 rounded-[15px]" />
        </div>
        <div className="absolute contents inset-[22.6%_69.02%_76.98%_30.24%]">
          <div className="absolute bg-[#08c8a5] inset-[22.6%_69.02%_76.98%_30.24%] rounded-[15px]" />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-305px)] text-[#7b8396] text-[30px] top-[calc(50%-768.5px)] w-[160px]">
          <p className="leading-[normal]">作者简介</p>
        </div>
        <div className="-translate-y-1/2 absolute aspect-[26/26] left-[39.94%] right-[57.62%] top-[calc(50%-769px)]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowCollapse} />
          <div className="absolute flex inset-[30.58%_38.3%_32.05%_38.3%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <div className="relative size-full">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowCollapseInner} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 作者简介正文 */}
      <p
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[41px] text-[#cfd6e2] text-[32px] m-0"
        style={{ left: 491, top: 691, width: 939, height: 385 }}
      >
        李白(701-762),字太白,号青莲居士;祖籍陇西成纪(待考),出生于西域碎叶城,4岁再随父迁至剑南道绵州。李白存世诗文千余篇,有《李太白集》传世。762年病逝,享年61岁。其墓在今安徽当涂,四川江油、湖北安陆有纪念馆。与杜甫并称为"李杜",为了与另两位诗人李商隐与杜牧即"小李杜"区别,杜甫与李白又合称"大李杜"。其人爽朗大方,爱饮酒作诗,喜交友。李白深受黄老列庄思想影响,有《李太白集》传世,诗作中多以醉时写的,代表作有《望庐山瀑布》《行路难》、《蜀道难》《将进酒》、《梁甫吟》《早发白帝城》等多首。李白所作词赋,宋人已有传记(如文莹《湘山野录》卷上),就其开创意义及艺术成就而言,"李白词"享有极为崇高的地位。
      </p>

      {/* "诗词赏析"标签(y=1196.5) */}
      <div className="absolute contents left-[492px] top-[1165px]">
        <div className="absolute contents inset-[42.03%_69.27%_57.54%_30%]">
          <div className="absolute bg-[#08c8a5] inset-[42.03%_69.27%_57.54%_30%] opacity-40 rounded-[15px]" />
        </div>
        <div className="absolute contents inset-[42.03%_69.02%_57.54%_30.24%]">
          <div className="absolute bg-[#08c8a5] inset-[42.03%_69.02%_57.54%_30.24%] rounded-[15px]" />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-305px)] text-[#7b8396] text-[30px] top-[calc(50%-218.5px)] w-[160px]">
          <p className="leading-[normal]">诗词赏析</p>
        </div>
        <div className="-translate-y-1/2 absolute aspect-[26/26] left-[39.94%] right-[57.62%] top-[calc(50%-219px)]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowCollapse} />
          <div className="absolute flex inset-[30.58%_38.3%_32.05%_38.3%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <div className="relative size-full">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowCollapseInner} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 诗词赏析正文 */}
      <p
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[41px] text-[#cfd6e2] text-[32px] m-0"
        style={{ left: 491, top: 1241, width: 944, height: 266 }}
      >
        本诗是首千古传诵的名篇。平实朴素的语言,生动地表现出游子的思乡之情,全诗仅20个字,已从时间、环境、气氛及对人物的细微动作的描绘,写出了游子对故乡的深切思念。语言明白,音韵流利自然,似信手拈来,毫不费力,但却含蓄深沉,引人深思。这首小诗,既没有奇特新颖的想象,也没有精工华美的辞藻;它只是用叙述的语气,写客居他乡的作者的思乡之情,然而它却意味深长,耐人寻味,千百年来,那份美好的情感感染着一代又一代读者。
      </p>

      {/* "古代释义"卡片 — y≈1670 */}
      <div className="absolute contents left-[496px] top-[1670px]">
        <div className="absolute inset-[59.26%_53.6%_39.03%_42.74%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup44} />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-253px)] text-[#cfd6e2] text-[30px] top-[calc(50%+286.5px)] w-[185px]">
          <p className="leading-[normal]">古代释义</p>
        </div>
        <div className="-translate-y-1/2 absolute aspect-[37/30] left-[30.24%] overflow-clip right-[66.1%] top-[calc(50%+286.5px)]">
          <div className="absolute contents inset-0">
            <div
              className="absolute inset-[6.66%_0_6.67%_21.62%] opacity-20 rounded-[15px]"
              style={{ backgroundImage: "linear-gradient(156.01deg, rgb(243, 155, 0) 4.08%, rgb(226, 97, 0) 94.17%)" }}
            />
            <div
              className="absolute inset-[0_18.92%_0_0] rounded-[15px]"
              style={{ backgroundImage: "linear-gradient(143.36deg, rgb(243, 155, 0) 33.76%, rgb(226, 55, 0) 91.2%)" }}
            />
          </div>
          <div className="absolute border-[1.8px] border-solid border-white inset-[16.67%_32.43%_16.66%_13.28%] rounded-[4.5px]" />
          <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] text-[12.6px] text-white w-[13px]" style={{ left: "calc(50% - 10.34px)", top: "calc(50% + 0.7px)" }}>
            <p className="leading-[normal]">古</p>
          </div>
          <div className="absolute bg-white border-[#e85a00] border-[0.9px] border-solid inset-[59.09%_79.32%_34.85%_10.81%] rounded-[0.9px]" />
          <div className="absolute bg-white border-[#eb6c00] border-[0.9px] border-solid inset-[34.85%_79.32%_59.09%_10.81%] rounded-[0.9px]" />
        </div>
      </div>

      {/* "释义"标签(右中,y≈1813) */}
      <div className="absolute contents left-[496px] top-[1753px]">
        <div className="absolute contents inset-[62.81%_69.02%_36.77%_30.24%]">
          <div className="absolute bg-[#08c8a5] inset-[62.81%_69.02%_36.77%_30.24%] opacity-40 rounded-[15px]" />
        </div>
        <div className="absolute contents inset-[62.81%_68.78%_36.77%_30.49%]">
          <div className="absolute bg-[#08c8a5] inset-[62.81%_68.78%_36.77%_30.49%] rounded-[15px]" />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-301px)] text-[#7b8396] text-[30px] top-[calc(50%+369.5px)] w-[160px]">
          <p className="leading-[normal]">释义</p>
        </div>
        <div className="-translate-y-1/2 absolute aspect-[26/26] left-[36.52%] right-[61.04%] top-[calc(50%+369px)]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowCollapse} />
          <div className="absolute flex inset-[30.58%_38.3%_32.05%_38.3%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <div className="relative size-full">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowCollapseInner} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 古代释义正文 */}
      <p
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[41px] text-[#cfd6e2] text-[32px] m-0"
        style={{ left: 491, top: 1835, width: 937, height: 131 }}
      >
        诗篇名。唐李白作。见《李太白全集》。此诗用南朝乐府体格,抓住月夜的一个错觉,即景即情,赋成千古思乡名曲。清沈德潜所谓"旅中情思,虽说明却不说尽"(《唐诗别裁》),正道出其自然真切、含蕴无穷的特点。
      </p>

      {/* 来源《古诗文精选》+ 更多词典 (y≈1584.5) */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-329px)] text-[#959caa] text-[24px] top-[calc(50%+169.5px)] w-[447px]">
        <p className="leading-[normal]">来源《古诗文精选》</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-90px)] text-[#d4e0ff] text-[24px] top-[calc(50%+167px)] w-[247px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[28px] underline">更多词典</p>
      </div>

      {/* 来源《中国文学大辞典》 */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-320px)] text-[#959caa] text-[24px] top-[calc(50%+641.5px)] w-[447px]">
        <p className="leading-[normal]">来源《中国文学大辞典》</p>
      </div>

      {/* 来源《语文讲解》 */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-322px)] text-[#959caa] text-[24px] top-[calc(50%+996.5px)] w-[447px]">
        <p className="leading-[normal]">来源《语文讲解》</p>
      </div>

      {/* 3 处段间虚线分隔(path-divider) */}
      <div className="absolute inset-[57.42%_13.54%_42.37%_29.76%]">
        <div className="absolute inset-[41.67%_0]">
          <img alt="" className="block max-w-none size-full" src={imgPathDivider} />
        </div>
      </div>
      <div className="absolute inset-[74.06%_14.21%_25.72%_29.09%]">
        <div className="absolute inset-[41.67%_0]">
          <img alt="" className="block max-w-none size-full" src={imgPathDivider} />
        </div>
      </div>
      <div className="absolute inset-[87.07%_13.17%_12.72%_30.12%]">
        <div className="absolute inset-[41.67%_0]">
          <img alt="" className="block max-w-none size-full" src={imgPathDivider} />
        </div>
      </div>

      {/* "语文讲解"卡片 (y≈2125) */}
      <div className="absolute contents left-[492px] top-[2125px]">
        <div className="absolute inset-[75.34%_53.84%_22.95%_42.5%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup44} />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-257px)] text-[#cfd6e2] text-[30px] top-[calc(50%+741.5px)] w-[185px]">
          <p className="leading-[normal]">语文讲解</p>
        </div>
        <div className="-translate-y-1/2 absolute aspect-[37/30] left-[30%] overflow-clip right-[66.34%] top-[calc(50%+741.5px)]">
          <div className="absolute contents left-0 top-0">
            <div
              className="absolute inset-[6.66%_0_6.67%_21.62%] opacity-20 rounded-[15px]"
              style={{ backgroundImage: "linear-gradient(156.01deg, rgb(243, 155, 0) 4.08%, rgb(226, 97, 0) 94.17%)" }}
            />
            <div
              className="absolute inset-[0_18.92%_0_0] rounded-[15px]"
              style={{ backgroundImage: "linear-gradient(143.36deg, rgb(243, 155, 0) 33.76%, rgb(226, 55, 0) 91.2%)" }}
            />
          </div>
          <div className="absolute border-[1.8px] border-solid border-white inset-[16.67%_32.43%_16.66%_13.28%] rounded-[4.5px]" />
          <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] text-[12.6px] text-white w-[13px]" style={{ left: "calc(50% - 10.34px)", top: "calc(50% + 0.7px)" }}>
            <p className="leading-[normal]">语</p>
          </div>
          <div className="absolute bg-white border-[#e85a00] border-[0.9px] border-solid inset-[59.09%_79.32%_34.85%_10.81%] rounded-[0.9px]" />
          <div className="absolute bg-white border-[#eb6c00] border-[0.9px] border-solid inset-[34.85%_79.32%_59.09%_10.81%] rounded-[0.9px]" />
        </div>
      </div>

      {/* "《静夜思》"播放卡片(y≈2216) */}
      <div className="absolute contents left-[497px] top-[2216px]">
        <div className="absolute inset-[78.3%_36.71%_17.07%_30.3%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCardBg} />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-287px)] text-[#f39b00] text-[28px] top-[calc(50%+838px)] w-[182px]">
          <p className="leading-[26px]">《静夜思》</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-277px)] text-[#cfd6e2] text-[28px] top-[calc(50%+893px)] w-[263px]">
          <p className="leading-[26px]">出处:一年级下册</p>
        </div>
        <div className="absolute inset-[78.83%_53.72%_19.61%_43.6%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup72} />
        </div>
      </div>

      {/* 汉英翻译正文(英文) */}
      <p
        className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[41px] text-[#cfd6e2] text-[32px] m-0"
        style={{ left: 535, top: 2589, width: 900, height: 61 }}
      >
        Thoughts in the still of the night
      </p>

      {/* "以上句子由英语人工专家翻译" */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-308px)] text-[#959caa] text-[24px] top-[calc(50%+1274.5px)] w-[447px]">
        <p className="leading-[normal]">以上句子由英语人工专家翻译</p>
      </div>

      {/* "汉英翻译"标签(y≈2498) */}
      <div className="absolute contents left-[506px] top-[2498px]">
        <div className="absolute inset-[88.52%_52.99%_9.77%_43.35%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup44} />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-243px)] text-[#cfd6e2] text-[30px] top-[calc(50%+1114.5px)] w-[185px]">
          <p className="leading-[normal]">汉英翻译</p>
        </div>
        <div className="-translate-y-1/2 absolute aspect-[37/30] left-[30.85%] overflow-clip right-[65.49%] top-[calc(50%+1114.5px)]">
          <div className="absolute contents inset-0">
            <div className="absolute inset-[6.66%_0_6.67%_21.62%] opacity-20 rounded-[15px]" style={{ backgroundImage: "linear-gradient(156.01deg, rgb(243, 155, 0) 4.08%, rgb(226, 97, 0) 94.17%)" }} />
            <div className="absolute inset-[0_18.92%_0_0] rounded-[15px]" style={{ backgroundImage: "linear-gradient(143.36deg, rgb(243, 155, 0) 33.76%, rgb(226, 55, 0) 91.2%)" }} />
          </div>
          <div className="absolute border-[1.8px] border-solid border-white inset-[16.67%_32.43%_16.66%_13.28%] rounded-[4.5px]" />
          <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] text-[12.6px] text-white w-[13px]" style={{ left: "calc(50% - 10.34px)", top: "calc(50% + 0.7px)" }}>
            <p className="leading-[normal]">译</p>
          </div>
          <div className="absolute bg-white border-[#e85a00] border-[0.9px] border-solid inset-[59.09%_79.32%_34.85%_10.81%] rounded-[0.9px]" />
          <div className="absolute bg-white border-[#eb6c00] border-[0.9px] border-solid inset-[34.85%_79.32%_59.09%_10.81%] rounded-[0.9px]" />
        </div>
      </div>

      {/* group53 上传/分享图标(y≈2596) */}
      <div className="absolute inset-[91.77%_67.8%_7.17%_30.24%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup53} />
      </div>

      {/* info-icon (汉英翻译图标外框) — y≈2748 */}
      <div className="absolute inset-[97.14%_65.98%_1.57%_31.59%]">
        <div className="absolute inset-[-5.45%_-5%_-4.55%_-5%]">
          <img alt="" className="block max-w-none size-full" src={imgInfoIcon} />
        </div>
      </div>

      {/* ===== 右侧固定区:释义/详情/详情 等标签 ===== */}
      {/* 释义 (y≈1941.5) */}
      <div className="absolute contents left-[1439px] top-[1912px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+636px)] text-[#08c8a5] text-[28px] top-[calc(50%+526.5px)] w-[79px]">
          <p className="leading-[normal]">释义</p>
        </div>
        <div className="absolute border border-[#5d6575] border-dashed inset-[67.81%_11.89%_30.6%_88.05%]" />
        <div className="absolute inset-[68.3%_11.59%_31.31%_87.74%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipseCorner} />
        </div>
      </div>

      {/* 详情 (y≈2368.5) */}
      <div className="absolute contents left-[1439px] top-[2339px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+636px)] text-[#08c8a5] text-[28px] top-[calc(50%+953.5px)] w-[79px]">
          <p className="leading-[normal]">详情</p>
        </div>
        <div className="absolute border border-[#5d6575] border-dashed inset-[82.9%_11.89%_15.51%_88.05%]" />
        <div className="absolute inset-[83.39%_11.59%_16.22%_87.74%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipseCorner} />
        </div>
      </div>

      {/* 详情 (y≈2686.5) */}
      <div className="absolute contents left-[1439px] top-[2657px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+636px)] text-[#08c8a5] text-[28px] top-[calc(50%+1271.5px)] w-[79px]">
          <p className="leading-[normal]">详情</p>
        </div>
        <div className="absolute border border-[#5d6575] border-dashed inset-[94.13%_11.89%_4.28%_88.05%]" />
        <div className="absolute inset-[94.63%_11.59%_4.98%_87.74%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipseCorner} />
        </div>
      </div>

      {/* 收藏按钮(68×68,无蓝边) */}
      <div
        className="absolute"
        style={{
          left: 1572,
          top: 1,
          width: 68,
          height: 68,
          backgroundImage: `url('${imgShoucang}')`,
          backgroundSize: "110px 101px",
          backgroundPosition: "-15px -13px",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* 右侧 4 个图标 */}
      <ListIcon className="absolute left-[1580px] size-[52px] top-[58px]" />
      <FullscreenIcon className="absolute left-[1580px] size-[52px] top-[182px]" />
      <StarBadgeIcon className="absolute left-[1580px] size-[52px] top-[120px]" />
      <KeyboardIcon className="absolute left-[1580px] size-[52px] top-[244px]" />
    </div>
  );
}
