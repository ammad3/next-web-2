export default function Hero() {
  return (
    <>
    <div className="flex justify-center items-center flex-col  montserrat bg-[#252B42] w-[699px] h-[496px] py-10 gap-[40]">
      <h5 className="text-[#23A6F0] font-bold text-base tracking-[0.10000000149011612px]">
        Welcome
      </h5>
      <br />
      <h1 className="font-bold text-[58px] leading-[80px] tracking-[0.20000000298023224px] text-center">
        Selling on the <br />internet like a pro
      </h1>
      <h4 className="w-[536px] h-[60px] font-normal text-[20px] leading-[30px] tracking-[0.2px] text-center">
        We know how large objects will act, but things on a <br />small scale just do
        not act that way.
      </h4>
      <br />
      <div className="flex items-center justify-center w-[365px] h-[52px] gap-[10px]">
        <button className="flex items-center justify-center w-[193px] h-[52px] bg-[#23A6F0] py-[15px] px-10 rounded-[5px] text-sm font-bold">Get Quote Now</button>
        <button className="flex  items-center text-center w-[162px] h-[52px] border border-solid border-[#23A6F0] py-[15px] px-9 rounded-[5px]  gap-[10px] text-[14px] text-[#23A6F0] leading-[22px] font-bold tracking-[0.2px]">Learn More</button>
      </div>
    </div>
    </>
  );
}


