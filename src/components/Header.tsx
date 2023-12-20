import { motion } from "framer-motion"
import { animateCircleImg, appLogo, groupImg, groupPicsImg } from "../assets/images"

const variants = {
  open: { opacity: 0, scale: .5 },
  closed: { opacity: 1, scale: 1 },
}
const variants1 = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0 },
}

const headerTextVariant = {
  open: { x: 0 },
  closed: { x: "38%", y: "-25%" }
}

const ellipseVariant = {
  open: { top: "28%", scale: 1, width: "38%", left: "10%" },
  closed: { top: "60%", left: "10%", scale: 1.5, width: "100%", "z-index": "0" }
}

const Header = ({
  isIndividual,
  setIsIndividual
}: {
  isIndividual: boolean,
  setIsIndividual: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const headerText = isIndividual ? "Secure & seamless online transactions" : `Manage payroll, compliance & HR in real time`
  const headerSubText = isIndividual ? "Providing you with the best online payment experience" : "Make income tax remittances to the state internal revenue service for your employees."


  return (
    <div className="overflow-hidden">
      <div className='px-mobile-horizontal md:px-horizontal bg-appDark-6 min-h-screen text-appWhite overflow-hidden'>
        <nav className="md:flex md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-10">
            <img src={appLogo} alt="logo" />
            <ul className="hidden sm:flex items-center gap-10">
              <li
                onClick={() => setIsIndividual(true)}
                className={`font-semibold border-b-4 ${isIndividual ? "border-pryColor" : "border-transparent"} hover:border-pryColor p-3 cursor-pointer`}>For Individuals</li>
              <li
                onClick={() => setIsIndividual(false)}
                className={`font-semibold border-b-4 ${!isIndividual ? "border-pryColor" : "border-transparent"} hover:border-pryColor p-3 cursor-pointer`}>For Business</li>
            </ul>
          </div>
          <div className="hidden md:block w-[40%]">
            <ul className="md:flex md:flex-row md:items-center md:justify-between">
              <li>About Us</li>
              <li>Contact</li>
              <div className="w-[2px] bg-appWhite h-[27px]" />
              <li>Login</li>
              <li>
                <button
                  className="bg-pryColor text-appWhite w-fit px-5 py-[13px] outline-none rounded-lg"
                >
                  Create free account
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <header className="text-white h-screen flex items-center justify-between">
          <motion.div
            animate={isIndividual ? "open" : "closed"}
            variants={headerTextVariant}
            transition={{ duration: 1 }}
            className="grid gap-7 relative z-50">
            <h2 className={`${isIndividual ? 'w-full md:w-[543px]' : "w-['68%'] text-center"} text-lg md:text-5xl font-semibold leading-[24px] md:leading-[64px]`}>{headerText}</h2>
            <p className={`${isIndividual ? "" : "text-center z-50 w-[70%] mx-auto"}`}>{headerSubText}</p>
            <div className={`${isIndividual ? "" : "w-full text-center"}`}>
              <button
                className="bg-pryColor text-appWhite w-fit px-5 py-[13px] outline-none rounded-lg"
              >
                Create free account
              </button>
            </div>
          </motion.div>
          <div className="relative hidden sm:block">
            <motion.img
              animate={isIndividual ? "open" : "closed"}
              variants={ellipseVariant}
              transition={{ duration: 1 }}
              src={animateCircleImg} alt="svg"
              className="absolute z-20"
            />
            <motion.img
              animate={isIndividual ? "open" : "closed"}
              variants={variants1}
              transition={{ duration: 1 }}
              src={groupImg} alt="group of people" className="relative z-20" />
          </div>
        </header>
      </div>
      <motion.div
        className={`flex items-center justify-center relative -top-[180px] ${isIndividual && "hidden"}`}>
        <motion.img
          animate={isIndividual ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 1 }}
          src={groupPicsImg} alt="people" className="w-3/4 md:w-auto" />
      </motion.div>
    </div>
  )
}

export default Header