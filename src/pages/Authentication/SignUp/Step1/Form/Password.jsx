/** @format */

export default function Password({ details, handleChange }) {
  const password = details?.password;

  const hasMinLength = password.length >= 8;
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return (
    <div className='flex flex-col gap-y-4 '>
      <div className='flex flex-col gap-y-3 '>
        <h3 className='text-base text-black font-bold'>Password</h3>
        <input
          className=' border border-light-grey text-black text-base p-3 rounded-lg outline-none'
          placeholder='Enter your password'
          type='password'
          name='password'
          id=''
          value={password}
          onChange={handleChange}
        />

        <div className='text-sm'>
          <p className={hasMinLength ? "text-green-500" : "text-gray-500"}>
            At least 8 characters
          </p>

          <p
            className={hasSpecialCharacter ? "text-green-500" : "text-gray-500"}
          >
            At least one special character
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-y-3 '>
        <h3 className='text-base text-black font-bold'>Confirm Password</h3>
        <input
          className=' border border-light-grey text-black text-base p-3 rounded-lg outline-none'
          placeholder='Confirm your password'
          type='password'
          name='confirm_password'
          id=''
          value={details?.confirm_password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
