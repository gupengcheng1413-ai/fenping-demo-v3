import imgGroup121 from "./group121.png";
import imgEllipse8 from "./ellipse8.png";
import imgStar1 from "./star1.png";
import imgGroup122 from "./group122.png";
import imgVector17 from "./vector17.png";
import imgGroup123 from "./group123.png";
import imgShoucang1 from "./shoucang1.png";
import imgShoucang2 from "./shoucang2.png";

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

function StarIcon({ className }: { className?: string }) {
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

export default function ShijuShortV2() {
  return (
    <div className="bg-black relative size-full" data-name="shiju-short-v2">
      {/* 左侧固定区：诗句标题 + 出处 + 操作按钮 */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[40px] text-[#ec9709] text-[64px] top-[62px] w-[427px]">
        <p className="leading-[normal]">床前明月光</p>
      </div>

      {/* 拼音点 - 5个圆点 */}
      <div className="absolute h-[2px] left-[44px] top-[100px] w-[60px] bg-[#ec9709] opacity-70" />
      <div className="absolute h-[2px] left-[114px] top-[100px] w-[60px] bg-[#ec9709] opacity-70" />
      <div className="absolute h-[2px] left-[184px] top-[100px] w-[60px] bg-[#ec9709] opacity-70" />
      <div className="absolute h-[2px] left-[254px] top-[100px] w-[60px] bg-[#ec9709] opacity-70" />
      <div className="absolute h-[2px] left-[324px] top-[100px] w-[60px] bg-[#ec9709] opacity-70" />

      {/* 语音播放按钮 */}
      <div className="absolute left-[40px] top-[140px] w-[52px] h-[52px] bg-[#23272e] rounded-[6px] flex items-center justify-center">
        <span className="text-white text-[24px]">🔊</span>
      </div>

      {/* 麦克风按钮 */}
      <div className="absolute left-[100px] top-[140px] w-[52px] h-[52px] bg-[#23272e] rounded-[6px] flex items-center justify-center">
        <span className="text-white text-[20px]">🎤</span>
      </div>

      {/* 出处 */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[40px] text-[#7b8396] text-[30px] top-[230px] w-[160px]">
        <p className="leading-[normal]">出处：</p>
      </div>
      <p className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[normal] left-[140px] text-[#08c8a5] text-[32px] top-[214px] w-[293px]">
        静夜思
      </p>

      {/* 注释 - 右上角 */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] right-[200px] text-[#08c8a5] text-[28px] top-[20px] w-[79px]">
        <p className="leading-[normal]">注释</p>
      </div>
      <div className="absolute border border-[#08c8a5] border-dashed top-[10px] right-[280px] w-[100px] h-[30px] rounded-[15px]" />

      {/* 释义内容 */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[490px] text-[#cfd6e2] text-[32px] top-[60px] w-[801px]">
        <p className="leading-[41px]">床:今传五种说法。一指井台。二指井栏。三"床"是"窗"的通假字。四指坐卧的器具。五解释为胡床。</p>
      </div>

      {/* 释义标签 */}
      <div className="absolute left-[490px] top-[170px] flex items-center gap-[10px]">
        <div className="w-[14px] h-[14px] bg-[#08c8a5] rounded-full" />
        <span className="font-['Noto_Sans_SC:Regular',sans-serif] text-[#08c8a5] text-[28px]">释义</span>
      </div>

      {/* 释义文本 */}
      <p className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[41px] left-[490px] text-[#cfd6e2] text-[32px] top-[210px] w-[792px]">
        明亮的月光洒在床前的窗户纸上
      </p>

      {/* 来源和更多词典 */}
      <div className="absolute left-[490px] top-[280px] flex gap-[40px] items-center">
        <span className="font-['Noto_Sans_SC:Regular',sans-serif] text-[#959caa] text-[24px]">来源《古诗文精选》</span>
        <span className="font-['Noto_Sans_SC:Regular',sans-serif] text-[#d4e0ff] text-[24px] underline">更多词典</span>
      </div>

      {/* 右侧固定区：图标按钮组 */}
      {/* 收藏图标（带图片背景） */}
      <div className="absolute right-[8px] top-[1px] w-[68px] h-[68px] bg-[rgba(65,188,255,0.14)] border border-[#10d7ff]">
        <div
          className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat"
          style={{
            maskImage: `url('${imgShoucang1}')`,
            maskSize: '68px 68px',
            maskPosition: 'center',
          }}
        >
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgShoucang2} />
        </div>
      </div>

      <ListIcon className="absolute right-[8px] size-[52px] top-[78px]" />
      <StarIcon className="absolute right-[8px] size-[52px] top-[140px]" />
      <FullscreenIcon className="absolute right-[8px] size-[52px] top-[202px]" />
      <KeyboardIcon className="absolute right-[8px] size-[52px] top-[264px]" />

      {/* 详情 - 右下角 */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] right-[120px] text-[#08c8a5] text-[28px] top-[300px] w-[79px]">
        <p className="leading-[normal]">详情</p>
      </div>

      {/* 中间分隔线 */}
      <div className="absolute left-[470px] top-[40px] w-[1px] h-[260px] bg-[#5d6575] opacity-50" />

      {/* 汉英翻译区 - 滚动后显示 */}
      <div className="absolute left-[490px] top-[420px] flex items-center gap-[16px]">
        <div className="w-[37px] h-[30px] rounded-[6px]" style={{ backgroundImage: "linear-gradient(143deg, #f39b00 33%, #e23700 91%)" }}>
          <div className="flex items-center justify-center h-full">
            <span className="text-white text-[12.6px]">译</span>
          </div>
        </div>
        <span className="font-['Noto_Sans_SC:Regular',sans-serif] text-[#cfd6e2] text-[30px]">汉英翻译</span>
      </div>

      <p className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[41px] left-[490px] text-[#cfd6e2] text-[32px] top-[490px] w-[956px]">
        Before my bed there streams in the moonlight.
      </p>

      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[490px] text-[#959caa] text-[24px] top-[600px] w-[447px]">
        <p className="leading-[normal]">以上句子由英语人工专家翻译</p>
      </div>
    </div>
  );
}
