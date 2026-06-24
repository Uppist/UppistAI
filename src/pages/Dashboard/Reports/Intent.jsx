/** @format */

export default function Intent() {
  return (
    <div className='border border-light-grey rounded-2xl p-4 flex flex-col gap-y-9 '>
      <h3 className='text-base font-semibold text-black'>Top Intent Tags</h3>

      <div className='flex flex-col gap-y-4'>
        <div className='flex items-center justify-between text-sm text-grey'>
          <span className='font-medium'>Order Status</span>
          <p className='font-normal'>2140</p>
        </div>
        <div className='flex items-center justify-between text-sm text-grey'>
          <span className='font-medium'>Pricing Inquiry</span>
          <p className='font-normal'>920</p>
        </div>
        <div className='flex items-center justify-between text-sm text-grey'>
          <span className='font-medium'>Refund Request</span>
          <p className='font-normal'>612</p>
        </div>
        <div className='flex items-center justify-between text-sm text-grey'>
          <span className='font-medium'>Technical Support</span>
          <p className='font-normal'>540</p>
        </div>
        <div className='flex items-center justify-between text-sm text-grey'>
          <span className='font-medium'>Product Question</span>
          <p className='font-normal'>410</p>
        </div>
      </div>
    </div>
  );
}
