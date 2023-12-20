import { useState } from "react"
import { ellipseImg, payBillsIcons, paymentRowImg } from "../assets/images"
import { motion } from "framer-motion"

const variant = {
  even: { "backgroundColor": "#25A75C" },
  odd: {
    "backgroundColor": "#F1F1F1"
  }
}

const imgVariant = {
  even: { top: "0px", right: "0px" },
  odd: {
    top: "50px", right: "-48px"
  }
}

const PayBills = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const changeIndex = (index: number) => {
    setActiveIndex(index)
  }
  return (
    <div className="relative
    px-mobile-horizontal py-mobile-vertical md:px-horizontal md:py-vertical
    flex flex-col md:flex-row items-center md:justify-between">
      <div className="md:w-[40%] grid gap-10 md:place-items-start border-l-4">
        <div
          onClick={() => changeIndex(0)}
          className={`border-l-4 ${activeIndex === 0 && 'border-pryColor'} pl-6 -ml-1 cursor-pointer`}>
          <h3 className="text-appDark-1 text-2xl font-semibold">Pay bills</h3>
          <p className="text-appDark-1 text-lg">Paying your bills has never been so easy.</p>
        </div>
        <div
          onClick={() => changeIndex(1)}
          className={`border-l-4 ${activeIndex === 1 && 'border-pryColor'} pl-6 -ml-1 cursor-pointer`}>
          <h3 className="text-appDark-1 text-2xl font-semibold">Buy Airtime & Data</h3>
          <p className="text-appDark-1 text-lg">Never get caught with low airtime and data again!</p>
        </div>
        <div
          onClick={() => changeIndex(2)}
          className={`border-l-4 ${activeIndex === 2 && 'border-pryColor'} pl-6 -ml-1 cursor-pointer`}>
          <h3 className="text-appDark-1 text-2xl font-semibold">Money Transfer</h3>
          <p className="text-appDark-1 text-lg">Transferring money is now hassle-free.</p>
        </div>
        <div
          onClick={() => changeIndex(3)}
          className={`border-l-4 ${activeIndex === 3 && 'border-pryColor'} pl-6 -ml-1 cursor-pointer`}>
          <h3 className="text-appDark-1 text-2xl font-semibold">Pay Toll Fee</h3>
          <p className="text-appDark-1 text-lg">Never worry about getting a toll ticket again.</p>
        </div>
      </div>
      <motion.div
        animate={activeIndex % 2 ? "even" : "odd"}
        variants={variant}
        transition={{ duration: 1 }}
        className="mt-10 md:mt-0 flex justify-center items-center h-[450px] md:h-[711px] overflow-hidden w-full md:min-w-[50%]">
        <motion.img
          animate={activeIndex % 2 ? "even" : "odd"}
          variants={imgVariant}
          transition={{ duration: 1 }}
          src={activeIndex % 2 ? paymentRowImg : payBillsIcons} alt="pay bills" className="object-cover relative" />
      </motion.div>
      <img src={ellipseImg} alt="svg" className="absolute top-1/4 right-0 -z-10 hidden md:block" />
    </div>
  )
}

export default PayBills