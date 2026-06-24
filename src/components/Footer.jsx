// Ui Elements
import { Input, CurvedButton } from "./ui/UiElements";

export default function Footer() {
  return (
    <footer className="py-30 bg-linear-to-r from-slate to-charcoal">
      <div className="container px-5">
        <div className="pb-13 border-b border-white flex justify-between items-center gap-30.5 max-xl:flex-col">
          <div className="news-letter">
            <h2 className="font-medium text-5xl text-white mb-6.25  max-xl:text-center">
              Newsletter
            </h2>
            <div className="relative md:w-fit px-2">
              <Input placeHolder="Enter your email" />
              <CurvedButton
                buttonContent="Subscribe"
                style="md:absolute md:right-5 md:top-2.5 max-sm:m-auto max-sm:mt-5"
              />
            </div>
          </div>
          <nav className="flex gap-21.75 whitespace-nowrap max-[1600px]:flex-wrap ">
            <ul className="text-white flex flex-col gap-4">
              <li className="font-bold text-2xl mb-4.25">Support</li>
              <li>
                <a href="#" className="font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="font-medium">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="font-medium">
                  Blog
                </a>
              </li>
            </ul>
            <ul className="text-white flex flex-col gap-4">
              <li className="font-bold text-2xl mb-4.25">Useful Link</li>
              <li>
                <a href="#" className="font-medium">
                  Payment & Tax
                </a>
              </li>
              <li>
                <a href="#" className="font-medium">
                  Team of service
                </a>
              </li>
              <li>
                <a href="#" className="font-medium">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul className="text-white flex flex-col gap-4">
              <li className="font-bold text-2xl mb-4.25">Our Menu</li>
              <li>
                <a href="#" className="font-medium">Best Product</a>
              </li>
              <li>
                <a href="#" className="font-medium">Category</a>
              </li>
            </ul>
            <ul className="text-white flex flex-col gap-4">
              <li className="font-bold text-2xl mb-4.25">Address</li>
              <li className="font-medium">
                JL. Setiabudhi No. 193 Sukasari, Bandung<br/> West Java, Indonesia
              </li>
              <li>
                <a href="mailto:hallo@daunku.com" className="font-medium">
                  hallo@daunku.com
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="text-center text-2xl text-white pt-13">
          © 2026 Daunku - All rights reserved.
        </p>
      </div>
    </footer>
  );
}
