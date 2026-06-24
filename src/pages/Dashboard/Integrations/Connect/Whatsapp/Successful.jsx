/** @format */

export default function Successful({ onClose, onConnect, detail }) {
  function Okay() {
    onClose();
    onConnect();
  }

  let title = "";

  if (detail === "WhatsApp Business API") {
    title = "Whatsapp";
  } else if (detail === "Website Chat") {
    title = "Website";
  } else if (detail === "Facebook Messenger") {
    title =
      "After clicking Connect with Facebook, you will be redirected to Facebook to select the account you want to connect and grant Partner permissions. Once completed, you will be redirected to select a Facebook page to connect. Then, you're all set up and ready to go!";
  } else if (detail === "Instagram") {
    title =
      "After clicking Connect with Instagram, you will be redirected to Instagram to select the account you want to connect and grant Partner permissions. Then, you're all set up and ready to go!";
  } else if (detail === "X") {
    title =
      "After clicking Connect with X, you will be redirected to X to select the account you want to connect and grant Partner permissions. Then, you're all set up and ready to go!";
  } else {
    title =
      "After clicking Connect with Email, you will be redirected to Email to select the account you want to connect and grant Partner permissions. Then, you're all set up and ready to go!";
  }
  return (
    <div className='flex flex-col gap-y-3 items-center'>
      <svg
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M39.9997 3.33398C19.753 3.33398 3.33301 19.754 3.33301 40.0006C3.33301 60.2473 19.753 76.6673 39.9997 76.6673C60.2463 76.6673 76.6663 60.2473 76.6663 40.0006C76.6663 19.754 60.2463 3.33398 39.9997 3.33398ZM34.9997 55.0006L19.9997 40.0006L24.9997 35.0006L34.9997 45.0006L54.853 25.1473L59.853 29.8573L34.9997 55.0006Z'
          fill='#21CA97'
        />
      </svg>

      <h2 className='text-xl font-semibold text-bg'>
        {title} Connection Successful 🎉
      </h2>
      <p className='text-center font-normal text-grey'>
        Send a message to this account. Check and see if you can start receiving
        messages on the WhatsApp Channel.
      </p>

      <button type='button' className='button mt-5' onClick={Okay}>
        Okay
      </button>
    </div>
  );
}
