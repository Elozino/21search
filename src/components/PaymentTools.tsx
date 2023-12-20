import { fastIcon, secureIcon, userFriendlyIcon } from "../assets/icons"

const PaymentTools = ({ isIndividual }: { isIndividual: boolean }) => {
  return (
    <div className={`py-mobile-vertical px-mobile-horizontal md:px-horizontal ${!isIndividual ? "md:pt-0 md:pb-vertical" : "md:py-vertical"}`}>
      <h3 className="text-center text-appDark-1 text-2xl md:text-4xl font-semibold">Payments tools designed for you</h3>
      <p className="text-center text-base md:text-lg text-appDark-1 mt-3">Explore payment features that provides you with every possible solution</p>
      <br />
      <br />
      <div className="flex flex-col md:flex-row md:justify-between gap-5">
        <div className="md:w-1/3 h-[388px] px-10 py-7 flex flex-col justify-center gap-2 rounded-lg border border-tertiaryColor">
          <img src={userFriendlyIcon} alt="icon"
            className="w-[80px] h-[80px]"
          />
          <h5 className="text-appDark-5 font-semibold text-xl opacity-80">User Friendly</h5>
          <p className="text-appDark-2 text-lg ">Highly responsive and easy to navigate</p>
        </div>
        <div className="md:w-1/3 h-[388px] px-10 py-7 flex flex-col justify-center gap-2 rounded-lg border border-tertiaryColor">
          <img src={secureIcon} alt="icon"
            className="w-[80px] h-[80px]"
          />
          <h5 className="text-appDark-5 font-semibold text-xl opacity-80">Secure</h5>
          <p className="text-appDark-2 text-lg ">Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.</p>
        </div>
        <div className="md:w-1/3 h-[388px] px-10 py-7 flex flex-col justify-center gap-2 rounded-lg border border-tertiaryColor">
          <img src={fastIcon} alt="icon"
            className="w-[80px] h-[80px]"
          />
          <h5 className="text-appDark-5 font-semibold text-xl opacity-80">Fast</h5>
          <p className="text-appDark-2 text-lg ">Transacting takes only a few seconds - it's convenient and safe.</p>
        </div>
      </div>
    </div>
  )
}

export default PaymentTools