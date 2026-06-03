/** @format */

export default function Uploaded({ fileName }) {
  return (
    <div className='relative rounded-lg px-4 py-2 mt-5'>
      <svg className='absolute inset-0 w-full h-full pointer-events-none'>
        <rect
          x='1'
          y='1'
          width='calc(100% - 2px)'
          height='calc(100% - 2px)'
          fill='none'
          opacity='0.5'
          stroke='var(--color-bg)'
          strokeWidth='2'
          strokeDasharray='16 8'
          rx='8'
        />
      </svg>
      <div className='flex items-center justify-between rounded-lg px-4 py-2 gap-x-4'>
        <div>
          <span className='text-black text-sm font-normal'>
            {fileName.name}
          </span>
          <p className='text-light-black text-xs font-normal'>
            {fileName.name.split(".").slice(-1)[0].toLowerCase()} .{" "}
            {fileName.size} bytes
          </p>
        </div>
        <div className='flex items-center gap-x-3'>
          <label
            htmlFor='upload-file'
            className='text-black text-sm font-semibold cursor-pointer'
          >
            change
          </label>
        </div>
      </div>
    </div>
  );
}
