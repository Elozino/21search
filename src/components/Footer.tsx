import { facebookIcon, instagramIcon, twitterIcon } from "../assets/icons"
import { appLogo } from "../assets/images"


const Footer = () => {
  return (
    <footer className="text-appDark-1 py-10 px-14 md:py-vertical md:px-horizontal">
      <section className="flex flex-col-reverse lg:flex-row justify-between">
        <div className="grid gap-5">
          <div className="flex items-center gap-5 justify-center md:justify-start">
            <img src={appLogo} alt="logo" />
          </div>
          <div className="flex items-center gap-5 justify-center md:justify-start">
            <span><img src={instagramIcon} alt="instagram" /></span>
            <span><img src={facebookIcon} alt="facebook" /></span>
            <span><img src={twitterIcon} alt="twitter" /></span>
          </div>
        </div>
        <div className="sm:flex sm:justify-between min-w-[50%] md:min-w-[25%] mb-10 sm:mb-0">
          <ul className="mb-10 sm:mb-0">
            <h5 className="font-semibold text-appBlack text-lg mb-4">About Us</h5>
            <div className="grid gap-4 text-appDark-3 font-medium">
              <li>About</li>
              <li>Legal & privacy</li>
            </div>
          </ul>
          <ul>
            <h5 className="font-semibold text-appBlack text-lg mb-4">Products</h5>
            <div className="grid gap-4 text-appDark-3 font-medium">
              <li>TBook®</li>
              <li>TaxiTWithhold®</li>
              <li>TaxiTPayroll®</li>
            </div>
          </ul>
        </div>
      </section>
      <div className="text-center md:text-left mt-4 text-appDark-3">2015-{new Date().getFullYear()} Taxaide Technologies Limited. All rights reserved</div>
    </footer>
  )
}

export default Footer