import { appStoreImg, playStoreImg, transactImg } from "../assets/images"

const TransactOnTheGo = () => {
  return (
    <div className='py-mobile-vertical px-mobile-horizontal md:py-vertical md:px-horizontal
    flex flex-col md:flex-row md:justify-between md:items-center gap-10
    '>
      <div className="h-[771px] overflow-hidden min-w-[50%] bg-appDark-4 flex justify-center items-end">
        <img src={transactImg} alt="transact" />
      </div>
      <div className="md:w-[40%] grid gap-5 place-items-center md:place-items-start">
        <h4 className="text-appDark-1 text-4xl font-semibold">Transact on the go</h4>
        <p className="text-appDark-1 text-lg md:w-[395px]">Stay on top of your business with our easy-to-use app</p>
        <button
          className="bg-pryColor text-appWhite w-fit px-5 py-[13px] outline-none rounded-lg my-5"
        >
          Get Started
        </button>
        <div className="flex gap-6">
          <img src={appStoreImg} alt="app store btn" />
          <img src={playStoreImg} alt="play store button" />
        </div>
      </div>
    </div>
  )
}

export default TransactOnTheGo