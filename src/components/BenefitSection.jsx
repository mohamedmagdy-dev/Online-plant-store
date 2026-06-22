// icons
import freeShappingIcon from "../assets/icons/freeshappingIcon.svg";
import quickPaymentIcon from "../assets/icons/quickPaymentIcon.svg";
import supportIcon from "../assets/icons/supportIcon.svg";
export default function BenefitSection() {
  return (
    <section className="bg-white">
      <div className="container flex items-center justify-between flex-wrap gap-20 py-25.5 px-5">
        <div className="benefit flex gap-8">
          <img src={freeShappingIcon} alt="free shapping Icon" />
          <div className="info">
            <span className="block mb-4 text-abyss font-medium text-[32px]">
              Free Shapping
            </span>
            <span className="text-gray text-[20px] font-medium">
              No charge for each delivery
            </span>
          </div>
        </div>

        <div className="benefit flex gap-8">
          <img src={quickPaymentIcon} alt="quick Payment Icon" />
          <div className="info">
            <span className="block mb-4 text-abyss font-medium text-[32px]">
              Quick Payment
            </span>
            <span className="text-gray text-[20px] font-medium">
              100% secure payment
            </span>
          </div>
        </div>

        <div className="benefit flex gap-8">
          <img src={supportIcon} alt="support Icon" />
          <div className="info">
            <span className="block mb-4 text-abyss font-medium text-[32px]">
              24/7 Support
            </span>
            <span className="text-gray text-[20px] font-medium">
              Quick support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
