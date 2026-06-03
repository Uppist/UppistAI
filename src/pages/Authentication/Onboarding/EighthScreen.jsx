/** @format */
import { useNavigate } from "react-router-dom";
import check from "../../../assets/Onboarding/check.svg";
import Loader from "../../../components/Animation/Loader";
export default function EighthScreen({ appLoading, setAppLoading }) {
  const socials = [
    {
      img: check,
      p: "Channels connected",
    },
    {
      img: check,
      p: "AI trained on your data",
    },
    {
      img: check,
      p: "Automation rules active",
    },
  ];

  const navigate = useNavigate();

  if (appLoading) {
    return <Loader />;
  }
  function Next() {
    setAppLoading(true);

    setTimeout(() => {
      setAppLoading(false);
      navigate("/signin");
    }, 2000);
  }

  return (
    <div className='flex flex-col h-screen justify-center gap-y-10 p-20 animate-fade-up overflow-scroll no-scrollbar'>
      {/* */}
      <div className='flex flex-col gap-y-6'>
        <div className='flex flex-col gap-y-2'>
          <h2 className='m-0px text-black text-3xl font-bold'>
            Ready to go Live
          </h2>
          <span className='text-light text-base font-normal'>
            Everything looks good, let's launch{" "}
          </span>
        </div>
        <div className='flex flex-col gap-y-6'>
          {socials.map((item) => (
            <div className='flex items-center p-4 border border-light-grey  rounded-lg gap-x-3'>
              <img src={item.img} alt='' />

              <p className='text-sm text-light font-normal'>{item.p}</p>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={Next}
            className='bg-bg  w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg'
          >
            Go Live
          </button>
        </div>
      </div>
    </div>
  );
}
