/** @format */

export default function Performance() {
  return (
    <div className="flex flex-col gap-y-7.5 border border-light-grey p-4 rounded-2xl">
      <div className="flex flex-col gap-y-1.5">
        <h3 className="font-semibold text-black">
          Omni-Channel performance breakdown Results across all channels.
        </h3>
        <span className="text-sm font-normal text-grey">
          Results across all channels.
        </span>
      </div>

      <div className="grid grid-cols-6 w-full pb-6 border-b-2 border-b-light-grey">
        <span className="text-sm font-semibold text-light-black">Channel</span>
        <span className="text-sm font-semibold text-light-black">
          Conversations
        </span>
        <span className="text-sm font-semibold text-light-black">
          First Response
        </span>
        <span className="text-sm font-semibold text-light-black">
          Resolution Time{" "}
        </span>
        <span className="text-sm font-semibold text-light-black">
          Resolved by AI
        </span>
        <span className="text-sm font-semibold text-light-black">
          SLA Compliance
        </span>
      </div>
    </div>
  );
}
