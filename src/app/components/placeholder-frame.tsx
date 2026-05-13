import type { FrameId } from "../App";

export function PlaceholderFrame({
  frameId,
  onBack,
}: {
  frameId: FrameId;
  onBack: () => void;
}) {
  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="text-[#ec9709] text-[24px] mb-2">frame: {frameId}</div>
        <div className="text-[#cfd6e2]/60 text-[14px]">等待下一批设计稿</div>
        <button
          onClick={onBack}
          className="mt-4 px-4 py-1 border border-[#cfd6e2]/40 text-[#cfd6e2] text-[14px] rounded"
        >
          返回历史记录
        </button>
      </div>
    </div>
  );
}
