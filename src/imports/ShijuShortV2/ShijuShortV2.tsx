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
import imgBookCorner from "./book-corner.svg";
import imgInfoIcon from "./info-icon.svg";
import imgTranslationPath from "./translation-path.svg";
import imgGroup53 from "./group53.svg";
import imgGroup55 from "./group55.svg";
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

export default function ShijuShortV2() {
  return (
    <div className="bg-black relative size-full" data-name="shiju-short-v2">
      {/* 注释 */}
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+628px)] text-[#08c8a5] text-[28px] top-[calc(50%-354.5px)] w-[79px]"
      >
        <p className="leading-[normal]">注释</p>
      </div>

      {/* 释义(右上小标签) */}
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+626px)] text-[#7b8396] text-[28px] top-[calc(50%-305.5px)] w-[129px]"
      >
        <p className="leading-[normal]">释义</p>
      </div>

      {/* 注释:虚线圆角矩形 */}
      <div className="absolute border border-[#5d6575] border-dashed inset-[3.09%_12.38%_76.42%_87.56%]" />
      {/* 注释:小绿点 */}
      <div className="absolute inset-[3.22%_12.07%_95.36%_87.26%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipseCorner} />
      </div>
      {/* 释义:小标记矩形(右上) */}
      <div className="absolute inset-[14.43%_11.83%_84.02%_88.11%]" />

      {/* 释义首段(中间主区) */}
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-409px)] text-[#cfd6e2] text-[32px] top-[calc(50%-315.5px)] w-[801px]"
      >
        <p className="leading-[41px]">
          床:今传五种说法。一指井台。二指井栏。三"床"是"窗"的通假字。四指坐卧的器具。五解释为胡床。
        </p>
      </div>

      {/* 语音播放按钮(深灰底+图标) */}
      <div className="absolute contents inset-[14.43%_91.16%_79.38%_4.88%]">
        <div className="absolute bg-[#23272e] inset-[14.43%_91.16%_79.38%_4.88%] rounded-[6px]" />
        <div className="absolute inset-[15.46%_92.28%_80.41%_6.03%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVoiceIcon} />
        </div>
      </div>

      {/* 中间垂直分隔线(竖直,旋转 -90°) */}
      <div
        className="absolute flex inset-[0_77.07%_55.15%_22.87%] items-center justify-center"
        style={{ containerType: "size" }}
      >
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full">
            <div className="absolute inset-[0_0.82%_0_-0.14%]">
              <img alt="" className="block max-w-none size-full" src={imgDividerV} />
            </div>
          </div>
        </div>
      </div>

      {/* 标题:床前明月光 */}
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-797px)] text-[#ec9709] text-[64px] top-[45.5px] w-[427px]"
      >
        <p className="leading-[normal]">床前明月光</p>
      </div>

      {/* 5 条拼音横线 */}
      <div className="absolute inset-[10.95%_95.12%_88.92%_1.52%]">
        <div className="absolute inset-[0_0_0_-0.91%]">
          <img alt="" className="block max-w-none size-full" src={imgPinyinLine} />
        </div>
      </div>
      <div className="absolute inset-[10.95%_91.1%_88.92%_5.55%]">
        <div className="absolute inset-[0_0_0_-0.91%]">
          <img alt="" className="block max-w-none size-full" src={imgPinyinLine} />
        </div>
      </div>
      <div className="absolute inset-[10.95%_87.26%_88.92%_9.39%]">
        <div className="absolute inset-[0_0_0_-0.91%]">
          <img alt="" className="block max-w-none size-full" src={imgPinyinLine} />
        </div>
      </div>
      <div className="absolute inset-[10.95%_83.35%_88.92%_13.29%]">
        <div className="absolute inset-[0_0_0_-0.91%]">
          <img alt="" className="block max-w-none size-full" src={imgPinyinLine} />
        </div>
      </div>
      <div className="absolute inset-[10.95%_79.33%_88.92%_17.32%]">
        <div className="absolute inset-[0_0_0_-0.91%]">
          <img alt="" className="block max-w-none size-full" src={imgPinyinLine} />
        </div>
      </div>

      {/* 标题旁的翻页书图标 */}
      <div className="absolute inset-[15.59%_96.52%_80.66%_1.52%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBookCorner} />
      </div>

      {/* 释义圆点 + 文字(中段)— 蒙版+绿色矩形 */}
      <div className="absolute contents left-[419px] top-[167px]">
        <div className="absolute contents inset-[24.68%_73.72%_73.78%_25.55%]">
          <div className="absolute bg-[#08c8a5] inset-[24.68%_73.72%_73.78%_25.55%] opacity-40 rounded-[15px]" />
        </div>
        <div className="absolute contents inset-[24.68%_73.48%_73.78%_25.79%]">
          <div className="absolute bg-[#08c8a5] inset-[24.68%_73.48%_73.78%_25.79%] rounded-[15px]" />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-378px)] text-[#7b8396] text-[30px] top-[calc(50%-189.5px)] w-[160px]">
          <p className="leading-[normal]">释义</p>
        </div>
      </div>

      {/* 出处: */}
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-795px)] text-[#7b8396] text-[30px] top-[calc(50%-169.5px)] w-[160px]"
      >
        <p className="leading-[normal]">出处:</p>
      </div>

      {/* 中段释义:明亮的月光... */}
      <p className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[41px] left-[calc(50%-409px)] text-[#cfd6e2] text-[32px] top-[calc(50%-140px)] w-[792px] m-0">
        明亮的月光洒在床前的窗户纸上
      </p>

      {/* 静夜思 */}
      <p className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[41px] left-[calc(50%-684px)] text-[#08c8a5] text-[32px] top-[calc(50%-193px)] w-[293px] m-0">
        静夜思
      </p>

      {/* 汉英翻译块(整个组) */}
      <div className="absolute contents left-[411px] top-[412px]">
        {/* 框 */}
        <div className="absolute inset-[89.69%_70.37%_5.58%_27.2%]">
          <div className="absolute inset-[-5.45%_-5%_-4.55%_-5%]">
            <img alt="" className="block max-w-none size-full" src={imgInfoIcon} />
          </div>
        </div>
        {/* 翻页虚线路径 */}
        <div className="absolute inset-[53.09%_18.23%_46.13%_25.06%]">
          <div className="absolute inset-[41.67%_0]">
            <img alt="" className="block max-w-none size-full" src={imgTranslationPath} />
          </div>
        </div>
        {/* 译字徽章 */}
        <div className="absolute inset-[70.23%_72.56%_25.9%_25.49%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup53} />
        </div>
        {/* 上传图标 */}
        <div className="absolute inset-[58.25%_57.38%_35.49%_38.96%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup55} />
        </div>
        {/* 汉英翻译标签 */}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-315px)] text-[#cfd6e2] text-[30px] top-[calc(50%+88.5px)] w-[185px]">
          <p className="leading-[normal]">汉英翻译</p>
        </div>
        {/* 英文译文 */}
        <p className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal h-[61px] leading-[41px] left-[calc(50%-357px)] text-[#cfd6e2] text-[32px] top-[calc(50%+148px)] w-[956px] m-0">
          Before my bed there streams in the moonlight.
        </p>
        {/* 注脚 */}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-380px)] text-[#959caa] text-[24px] top-[calc(50%+248.5px)] w-[447px]">
          <p className="leading-[normal]">以上句子由英语人工专家翻译</p>
        </div>
        {/* 译字渐变方块(双层) */}
        <div className="-translate-y-1/2 absolute aspect-[37/30] left-[26.46%] overflow-clip right-[69.88%] top-[calc(50%+88.5px)]">
          <div className="absolute contents inset-0">
            <div
              className="absolute inset-[6.66%_0_6.67%_21.62%] opacity-20 rounded-[15px]"
              style={{
                backgroundImage:
                  "linear-gradient(156.01deg, rgb(243, 155, 0) 4.08%, rgb(226, 97, 0) 94.17%)",
              }}
            />
            <div
              className="absolute inset-[0_18.92%_0_0] rounded-[15px]"
              style={{
                backgroundImage:
                  "linear-gradient(143.36deg, rgb(243, 155, 0) 33.76%, rgb(226, 55, 0) 91.2%)",
              }}
            />
          </div>
          <div className="absolute border-[1.8px] border-solid border-white inset-[16.67%_32.43%_16.66%_13.28%] rounded-[4.5px]" />
          <div
            className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] text-[12.6px] text-white w-[13px]"
            style={{ left: "calc(50% - 10.34px)", top: "calc(50% + 0.7px)" }}
          >
            <p className="leading-[normal]">译</p>
          </div>
          <div className="absolute bg-white border-[#e85a00] border-[0.9px] border-solid inset-[59.09%_79.32%_34.85%_10.81%] rounded-[0.9px]" />
          <div className="absolute bg-white border-[#eb6c00] border-[0.9px] border-solid inset-[34.85%_79.32%_59.09%_10.81%] rounded-[0.9px]" />
        </div>
      </div>

      {/* 详情(右中) + 虚线小绿点 */}
      <div className="absolute contents left-[1448px] top-[491px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+645px)] text-[#08c8a5] text-[28px] top-[calc(50%+132.5px)] w-[79px]">
          <p className="leading-[normal]">详情</p>
        </div>
        <div className="absolute border border-[#5d6575] border-dashed inset-[64.18%_11.34%_30.03%_88.6%]" />
        <div className="absolute inset-[65.98%_11.04%_32.6%_88.29%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipseCorner} />
        </div>
      </div>

      {/* 来源《古诗文精选》 */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-401px)] text-[#959caa] text-[24px] top-[calc(50%-30.5px)] w-[447px]">
        <p className="leading-[normal]">来源《古诗文精选》</p>
      </div>

      {/* 更多词典(下划线) */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-162px)] text-[#d4e0ff] text-[24px] top-[calc(50%-33px)] w-[247px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[28px] underline">更多词典</p>
      </div>

      {/* 收藏按钮(顶部右上 68×68)— 仅图像,无边框 */}
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

      {/* 右侧 4 图标 */}
      <ListIcon className="absolute left-[1580px] size-[52px] top-[58px]" />
      <FullscreenIcon className="absolute left-[1580px] size-[52px] top-[182px]" />
      <StarBadgeIcon className="absolute left-[1580px] size-[52px] top-[120px]" />
      <KeyboardIcon className="absolute left-[1580px] size-[52px] top-[244px]" />
    </div>
  );
}
