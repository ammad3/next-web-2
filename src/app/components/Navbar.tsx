import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#252B42] w-[1322px] h-[91px] ml-[50px] flex montserrat">
        <div className="flex ml-[136px] mt-[10px] w-[187px] h-[58px] p-[13px] pr-[35px]">
          <h3 className="mt-[13px] gap-[10px] font-bold text-2xl tracking-[0.2px]">
            BrandName
          </h3>
        </div>
        <div className="flex items-center w-[815px] h-[58px] mt-[16px] ml-[36px]">
          <nav className="bg-[#252B42] mt-[17px]">
            <ul className="flex text-white gap-[21px] font-bold text-[14px] leading-6 tracking-[0.2px] ">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="flex  w-[189px] gap-[45px] mt-[3px] ml-[364px]">
            <button className="text-[14px] font-bold leading-[22px] tracking-[0.0125em] text-right">
              Login
            </button>
            <button className="bg-[#23A6F0]  w-[110px] h-[52px] rounded-l-[5px] gap-[15px] py-[15px]  font-bold text-[14px] leading-[22px] tracking-[0.2px] ">
              JOIN US
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
