import type { ReactNode } from "react";

export const EN_SENTENCES: string[] = [
  "The Power of Small Changes.",
  "Many people believe that they need to do something extraordinary to change the world.",
  "However, the truth is that small actions can make a big difference.",
  "For example, reducing the use of plastic bags or turning off the lights when leaving a room may seem like small things, but they are essential for protecting our environment.",
  "In our daily lives, we can also help others with simple acts of kindness.",
  "A warm smile or a helpful hand can brighten someone's day.",
  "As the saying goes, \"Great things are done by a series of small things brought together.\"",
  "If everyone contributes a little effort, our world will become a much better place to live in.",
];

export const ZH_SENTENCES: string[] = [
  "微小改变的力量。",
  "许多人认为，他们需要做一些非凡的事情才能改变世界。",
  "然而，事实是微小的行动也能产生巨大的影响。",
  "例如，减少塑料袋的使用或离开房间时随手关灯，这些看似是小事，但对于保护我们的环境至关重要。",
  "在日常生活中，我们也可以通过简单的善举来帮助他人。",
  "一个温暖的微笑或一次援手都能点亮他人的一天。",
  "正如俗话所说：“伟大的成就由一系列小事汇聚而成。”",
  "如果每个人都贡献一点点努力，我们的世界将变成一个更美好的宜居之地。",
];

export function PlayIcon() {
  return (
    <svg
      viewBox="0 0 32 30"
      width={36}
      height={34}
      fill="none"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <rect width="32" height="30" rx="5.6" fill="#16181C" />
      <path
        d="M8.5 12 L12.5 12 L17 7.5 L17 22.5 L12.5 18 L8.5 18 Z"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M20.5 10.5 C 23.5 12.5 23.5 17.5 20.5 19.5"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function enWordSpans(sentence: string) {
  return sentence.split(/(\s+)/).map((token, i) => {
    if (/^\s+$/.test(token)) return <span key={i}>{token}</span>;
    return (
      <span
        key={i}
        style={{
          borderBottom: "1px solid #5b5448",
          paddingBottom: 1,
          cursor: "pointer",
        }}
      >
        {token}
      </span>
    );
  });
}

function CircleBtn({
  top,
  bg,
  onClick,
  children,
}: {
  top: number;
  bg: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <div
      onClick={onClick}
      className="absolute flex items-center justify-center"
      style={{
        left: 1578,
        top,
        width: 52,
        height: 52,
        borderRadius: 26,
        background: bg,
        border: "1px solid #2A2B2D",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
        cursor: onClick ? "pointer" : undefined,
      }}
    >
      {children}
    </div>
  );
}

function ListGridIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ position: "absolute", inset: 0 }}>
      <rect x="16" y="16" width="4" height="4" rx="1" fill="#86f0fd" />
      <rect x="23" y="16" width="14" height="4" rx="1" fill="#86f0fd" />
      <rect x="16" y="24" width="4" height="4" rx="1" fill="#86f0fd" />
      <rect x="23" y="24" width="14" height="4" rx="1" fill="#86f0fd" />
      <rect x="16" y="32" width="4" height="4" rx="1" fill="#86f0fd" />
      <rect x="23" y="32" width="14" height="4" rx="1" fill="#86f0fd" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="28" height="27" viewBox="0 0 28.27 27.13" fill="none">
      <path
        d="M14.13 1.5 L17.65 9.4 L26.27 10.3 L19.77 16.1 L21.68 24.6 L14.13 20.3 L6.58 24.6 L8.49 16.1 L1.99 10.3 L10.61 9.4 Z"
        stroke="#7C8394"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function ToggleSplitIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ position: "absolute", inset: 0 }}>
      <rect x="13" y="15" width="27" height="22" rx="5" stroke="#4edd83" strokeWidth="3" fill="none" />
      <line x1="26" y1="22" x2="26" y2="33" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ToggleStackIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ position: "absolute", inset: 0 }}>
      <rect x="13" y="15" width="27" height="22" rx="5" stroke="#4edd83" strokeWidth="3" fill="none" />
      <line x1="18" y1="26" x2="34" y2="26" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function KeyboardIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ position: "absolute", inset: 0 }}>
      {[9, 18, 27, 36].map((x) => (
        <rect key={`r1-${x}`} x={x} y={17} width="6" height="4" rx="1" fill="#cfd6e2" />
      ))}
      {[9, 18, 27, 36].map((x) => (
        <rect key={`r2-${x}`} x={x} y={26} width="6" height="4" rx="1" fill="#cfd6e2" />
      ))}
      <rect x="18" y="35" width="16" height="4" rx="1" fill="#cfd6e2" />
    </svg>
  );
}

export function RightButtons({
  mode,
  onToggleMode,
}: {
  mode: "fenping" | "bufenping";
  onToggleMode: () => void;
}) {
  return (
    <>
      <CircleBtn top={10} bg="linear-gradient(180deg,#153C40,#0C1518 19%,#0C1518 60%,#0F1D1F 79%,#22737B)">
        <ListGridIcon />
      </CircleBtn>
      <CircleBtn top={72} bg="linear-gradient(180deg,#16181C,#141619 60%,#3C3D3E 93%,#313335)">
        <StarIcon />
      </CircleBtn>
      <CircleBtn
        top={134}
        bg="linear-gradient(180deg,#396660,#16181B 17%,#141619 82%,#257F52)"
        onClick={onToggleMode}
      >
        {mode === "fenping" ? <ToggleSplitIcon /> : <ToggleStackIcon />}
      </CircleBtn>
      <CircleBtn top={196} bg="linear-gradient(180deg,#16181C,#141619 60%,#505050)">
        <KeyboardIcon />
      </CircleBtn>
    </>
  );
}
