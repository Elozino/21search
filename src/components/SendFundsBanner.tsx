import { Button } from "./ui"

const SendFundsBanner = () => {
  return (
    <div className="py-5 pl-8 sm:pl-14 md:pl-[52px] md:py-10 mx-10 md:mx-[90px] md:my-vertical bg-gradient-1 sm:bg-funds-gradient h-80 md:h-[450px] rounded-lg">
      <div className="h-full flex flex-col justify-center gap-2">
        <h4 className="font-semibold text-white text-2xl md:text-4xl">Send funds</h4>
        <h4 className="text-2xl md:text-4xl text-white opacity-90">Remit taxes</h4>
        <h4 className="text-2xl md:text-4xl text-white opacity-90">Buy utilities</h4>
        <br />
        <Button
          title="Get Started"
          className="w-fit"
        />
      </div>
    </div>
  )
}

export default SendFundsBanner