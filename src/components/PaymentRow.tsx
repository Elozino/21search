import { useState } from "react"
import { ellipseImg, paymentRowImg } from "../assets/images"
import { motion } from "framer-motion"

const variant = {
  even: { "backgroundColor": "#25A75C" },
  odd: { "backgroundColor": "#F1F1F1" }
}


const PaymentRow = () => {
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
          <h3 className="text-appDark-1 text-2xl font-semibold">Payment</h3>
          <p className="text-appDark-1 text-lg">No more checks, no more envelopes and stamps, you can pay your employees anytime, anywhere</p>
        </div>
        <div
          onClick={() => changeIndex(1)}
          className={`border-l-4 ${activeIndex === 1 && 'border-pryColor'} pl-6 -ml-1 cursor-pointer`}>
          <h3 className="text-appDark-1 text-2xl font-semibold">Payroll</h3>
          <p className="text-appDark-1 text-lg">End-to-end automation of payroll management for organizations, complying with Nigerian tax law and tax optimizations for the user.</p>
        </div>
        <div
          onClick={() => changeIndex(2)}
          className={`border-l-4 ${activeIndex === 2 && 'border-pryColor'} pl-6 -ml-1 cursor-pointer`}>
          <h3 className="text-appDark-1 text-2xl font-semibold">Payslip</h3>
          <p className="text-appDark-1 text-lg">Generates automated TaxiTPaySlip email notifications for each employee/user.</p>
        </div>
        <div
          onClick={() => changeIndex(3)}
          className={`border-l-4 ${activeIndex === 3 && 'border-pryColor'} pl-6 -ml-1 cursor-pointer`}>
          <h3 className="text-appDark-1 text-2xl font-semibold">Reports</h3>
          <p className="text-appDark-1 text-lg">Generates relevant reports, such as PAYE Returns for easy compliance with filing obligations.</p>
        </div>
      </div>
      <motion.div
        animate={activeIndex % 2 ? "even" : "odd"}
        variants={variant}
        transition={{ duration: 1 }}
        className="flex justify-center items-center h-[711px] overflow-hidden min-w-[50%] bg-appDark-4 ">
        <img src={paymentRowImg} alt="pay bills" />
      </motion.div>
      <img src={ellipseImg} alt="svg" className="absolute top-1/4 right-0 -z-10 hidden md:block" />
    </div >
  )
}

export default PaymentRow