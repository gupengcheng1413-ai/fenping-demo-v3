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
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+628px)] text-[#08c8a5] text-[28px] top-[calc(50%-305px)] w-[79px]">
        <p className="leading-[normal]">注释</p>
      </div>

      {/* 释义(右上小标签) */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+626px)] text-[#7b8396] text-[28px] top-[calc(50%-256px)] w-[129px]">
        <p className="leading-[normal]">释义</p>
      </div>

      {/* 注释:虚线圆角矩形 */}
      <div className="absolute border border-[#5d6575] border-dashed inset-[3.55%_12.38%_72.97%_87.56%]" />
      {/* 注释:小绿点 */}
      <div className="absolute inset-[3.69%_12.07%_94.68%_87.26%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipseCorner} />
      </div>
      {/* 释义:小标记矩形(右上) */}
      <div className="absolute inset-[16.54%_11.83%_81.68%_88.11%]" />

      {/* 释义首段(中间主区,加宽至 989) */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-409px)] text-[#cfd6e2] text-[32px] top-[calc(50%-286.5px)] w-[989px]">
        <p className="leading-[41px]">
          床:今传五种说法。一指井台。二指井栏。三"床"是"窗"的通假字。四指坐卧的器具。五解释为胡床。
        </p>
      </div>

      {/* 语音播放按钮 */}
      <div className="absolute contents inset-[16.54%_91.16%_76.37%_4.88%]">
        <div className="absolute bg-[#23272e] inset-[16.54%_91.16%_76.37%_4.88%] rounded-[6px]" />
        <div className="absolute inset-[17.73%_92.28%_77.55%_6.03%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVoiceIcon} />
        </div>
      </div>

      {/* 中间垂直分隔线 */}
      <div className="absolute flex inset-[0_77.07%_48.6%_22.87%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full">
            <div className="absolute inset-[0_0.82%_0_-0.14%]">
              <img alt="" className="block max-w-none size-full" src={imgDividerV} />
            </div>
          </div>
        </div>
      </div>

      {/* 标题:床前明月光 */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-797px)] text-[#ec9709] text-[64px] top-[45.5px] w-[427px]">
        <p className="leading-[normal]">床前明月光</p>
      </div>

      {/* 5 条拼音横线 */}
      <div className="absolute inset-[12.56%_95.12%_87.3%_1.52%]">
        <div className="absolute inset-[0_0_0_-0.91%]">
          <img alt="" className="block max-w-none size-full" src={imgPinyinLine} />
        </div>
      </div>
      <div className="absolute inset-[12.56%_91.1%_87.3%_5.55%]">
        <div className="absolute inset-[0_0_0_-0.91%]">
          <img alt="" className="block max-w-none size-full" src={imgPinyinLine} />
        </div>
      </div>
      <div className="absolute inset-[12.56%_87.26%_87.3%_9.39%]">
        <div className="absolute inset-[0_0_0_-0.91%]">
          <img alt="" className="block max-w-none size-full" src={imgPinyinLine} />
        </div>
      </div>
      <div className="absolute inset-[12.56%_83.35%_87.3%_13.29%]">
        <div className="absolute inset-[0_0_0_-0.91%]">
          <img alt="" className="block max-w-none size-full" src={imgPinyinLine} />
        </div>
      </div>
      <div className="absolute inset-[12.56%_79.33%_87.3%_17.32%]">
        <div className="absolute inset-[0_0_0_-0.91%]">
          <img alt="" className="block max-w-none size-full" src={imgPinyinLine} />
        </div>
      </div>

      {/* 标题旁的翻页书图标 */}
      <div className="absolute inset-[17.87%_96.52%_77.83%_1.52%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBookCorner} />
      </div>

      {/* 释义圆点 + 文字(中段) */}
      <div className="absolute contents left-[419px] top-[111px]">
        <div className="absolute contents inset-[20.01%_73.72%_78.21%_25.55%]">
          <div className="absolute bg-[#08c8a5] inset-[20.01%_73.72%_78.21%_25.55%] opacity-40 rounded-[15px]" />
        </div>
        <div className="absolute contents inset-[20.01%_73.48%_78.21%_25.79%]">
          <div className="absolute bg-[#08c8a5] inset-[20.01%_73.48%_78.21%_25.79%] rounded-[15px]" />
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-378px)] text-[#7b8396] text-[30px] top-[calc(50%-196px)] w-[160px]">
          <p className="leading-[normal]">释义</p>
        </div>
      </div>

      {/* 出处: */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-795px)] text-[#7b8396] text-[30px] top-[calc(50%-120px)] w-[160px]">
        <p className="leading-[normal]">出处:</p>
      </div>

      {/* 中段释义:明亮的月光... (加宽至 963) */}
      <p className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[41px] left-[calc(50%-409px)] text-[#cfd6e2] text-[32px] top-[calc(50%-156.5px)] w-[963px] m-0">
        明亮的月光洒在床前的窗户纸上
      </p>

      {/* 静夜思 */}
      <p className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[41px] left-[calc(50%-684px)] text-[#08c8a5] text-[32px] top-[calc(50%-143.5px)] w-[293px] m-0">
        静夜思
      </p>

      {/* 汉英翻译块 */}
      <div className="absolute contents left-[411px] top-[330px]">
        {/* 框 */}
        <div className="absolute inset-[90.69%_70.37%_3.89%_27.2%]">
          <div className="absolute inset-[-5.45%_-5%_-4.55%_-5%]">
            <img alt="" className="block max-w-none size-full" src={imgInfoIcon} />
          </div>
        </div>
        {/* 翻页虚线路径 */}
        <div className="absolute inset-[48.74%_18.23%_50.37%_25.06%]">
          <div className="absolute inset-[41.67%_0]">
            <img alt="" className="block max-w-none size-full" src={imgTranslationPath} />
          </div>
        </div>
        {/* 译字徽章(组53) */}
        <div className="absolute inset-[68.39%_72.56%_27.18%_25.49%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup53} />
        </div>
        {/* 上传图标(组55) */}
        <div className="absolute inset-[54.65%_57.38%_38.17%_38.96%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup55} />
        </div>
        {/* 汉英翻译标签 */}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-315px)] text-[#cfd6e2] text-[30px] top-[calc(50%+56px)] w-[185px]">
          <p className="leading-[normal]">汉英翻译</p>
        </div>
        {/* 英文译文 */}
        <p className="absolute font-['Noto_Sans_SC:Regular',sans-serif] font-normal h-[61px] leading-[41px] left-[calc(50%-357px)] text-[#cfd6e2] text-[32px] top-[calc(50%+115.5px)] w-[956px] m-0">
          Before my bed there streams in the moonlight.
        </p>
        {/* 注脚 */}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-380px)] text-[#959caa] text-[24px] top-[calc(50%+216px)] w-[447px]">
          <p className="leading-[normal]">以上句子由英语人工专家翻译</p>
        </div>
        {/* 译字渐变方块(双层) */}
        <div className="-translate-y-1/2 absolute aspect-[37/30] left-[26.46%] overflow-clip right-[69.88%] top-[calc(50%+56px)]">
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
      <div className="absolute contents left-[1448px] top-[409px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+645px)] text-[#08c8a5] text-[28px] top-[calc(50%+100px)] w-[79px]">
          <p className="leading-[normal]">详情</p>
        </div>
        <div className="absolute border border-[#5d6575] border-dashed inset-[61.45%_11.34%_31.91%_88.6%]" />
        <div className="absolute inset-[63.52%_11.04%_34.86%_88.29%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipseCorner} />
        </div>
      </div>

      {/* 来源《古诗文精选》 */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-401px)] text-[#959caa] text-[24px] top-[calc(50%-63px)] w-[447px]">
        <p className="leading-[normal]">来源《古诗文精选》</p>
      </div>

      {/* 更多词典(下划线) */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Noto_Sans_SC:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-162px)] text-[#d4e0ff] text-[24px] top-[calc(50%-65.5px)] w-[247px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[28px] underline">更多词典</p>
      </div>

      {/* 收藏按钮(顶部右上 68×68) */}
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
