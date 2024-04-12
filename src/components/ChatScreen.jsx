import { TextField } from '@mui/material';

const ChatScreen = () => {
  return (
    <main className='bg-gradient-to-r from-blue-300 to-transparent p-3 flex justify-center items-center'>
    <form className="rounded-xl bg-white flex flex-col items-center justify-center">
    <div className="w-[360px] rounded-t-xl rounded-b-none bg-aliceblue-200 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-end justify-between py-2.5 px-5 box-border max-w-full gap-[20px]">
      <div className="w-[191px] flex flex-row items-center justify-start gap-[10px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[50px] w-[50px] relative">
          <img
            className="absolute top-[0px] left-[0px] rounded-11xl w-full h-full object-cover"
            alt=""
            src="/simple-chatbots@2x.png"
          />
          <div className="absolute top-[40px] left-[38.5px] rounded-[50%] bg-limegreen w-2 h-2 z-[1]" />
        </button>
        <div className="flex-1 flex flex-col items-start justify-center py-[5px] px-0">
          <div className="flex flex-row items-center justify-start py-0 pr-12 pl-0 gap-[10px]">
            <div className="h-[25px] flex flex-row items-center justify-start py-0 px-0 box-border">
              <h3 className="m-0 relative text-lg font-semibold font-poppins text-dodgerblue text-left inline-block min-w-[59px]">{`Timpu `}</h3>
            </div>
            <img
              className="h-[15px] w-[14.4px] relative"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 relative text-mini font-medium font-poppins text-dodgerblue text-left">
              Chat assistant
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[15px]">
        <div className="flex flex-row items-end justify-start gap-[5px]">
          <div className="h-2 w-2 relative rounded-[50%] bg-limegreen" />
          <div className="relative text-mini leading-[10px] font-medium font-poppins text-dodgerblue text-left inline-block min-w-[49px]">
            Online
          </div>
        </div>
      </div>
    </div>
    <div className="w-[360px] [background:radial-gradient(50%_50%_at_50%_50%,_#fff_50.47%,_rgba(226,_225,_225,_0))] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-[50px] px-2.5 pb-[31px] box-border gap-[20px] max-w-full mq700:pt-8 mq700:pb-5 mq700:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
          <div className="w-[250px] rounded-mini [background:linear-gradient(100.24deg,_#e6eeff,_#fff)] flex flex-row items-center justify-center py-2.5 px-[15px] box-border">
            <div className="flex-1 relative text-smi font-poppins text-darkslategray text-left">
              Hi Sam! I am your personal shopping assistant , how can i help
              you today ?
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5">
            <div className="flex-1 relative text-3xs font-poppins text-darkslategray text-left whitespace-nowrap">
              4:45 PM
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[5px]">
          <div className="w-[213px] rounded-mini bg-lightgoldenrodyellow box-border flex flex-row items-center justify-center py-2.5 px-3.5 border-[1px] border-solid border-white">
            <div className="flex-1 relative text-smi font-poppins text-darkslategray text-left">
              I am looking for a hand bag, with long strap .
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-2.5">
            <div className="flex-1 relative text-3xs font-poppins text-darkslategray text-right whitespace-nowrap">
              4:46 PM
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch relative text-smi font-poppins text-gray text-left">
            Popular tags for handbag
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[5px]">
            <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[10px] mq950:flex-wrap">
              <button className="cursor-pointer p-0 bg-aliceblue-100 rounded-8xs flex flex-row items-center justify-center border-[1px] border-solid border-dodgerblue">
                <div className="rounded-8xs flex flex-row items-center justify-start py-[5px] px-2.5">
                  <div className="relative text-smi leading-[20px] font-medium font-poppins text-dodgerblue text-left inline-block min-w-[43px]">
                    Clutch
                  </div>
                </div>
              </button>
              <button className="cursor-pointer p-0 bg-aliceblue-100 rounded-8xs flex flex-row items-center justify-center border-[1px] border-solid border-dodgerblue">
                <div className="rounded-8xs flex flex-row items-center justify-start py-[5px] px-2.5">
                  <div className="relative text-smi leading-[20px] font-medium font-poppins text-dodgerblue text-left inline-block min-w-[80px]">
                    Fabric lining
                  </div>
                </div>
              </button>
              <button className="cursor-pointer p-0 bg-aliceblue-100 rounded-8xs flex flex-row items-center justify-center border-[1px] border-solid border-dodgerblue">
                <div className="rounded-8xs flex flex-row items-center justify-start py-[5px] px-2.5">
                  <div className="relative text-smi leading-[20px] font-medium font-poppins text-dodgerblue text-left inline-block min-w-[43px]">{`Baggit `}</div>
                </div>
              </button>
              <TextField
                className="[border:none] bg-[transparent] h-[30px] w-[150px] font-poppins font-medium text-smi text-dodgerblue"
                placeholder="Multi Compartment"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#4c82ef" },
                  "& .MuiInputBase-root": {
                    height: "30px",
                    backgroundColor: "#f2f7ff",
                    borderRadius: "5px",
                    fontSize: "13px",
                  },
                  "& .MuiInputBase-input": { color: "#4c82ef" },
                  width: "150px",
                }}
              />
            </div>
            <div className="flex flex-row flex-wrap items-start justify-start">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/chevronright.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <div className="w-[250px] rounded-xl [background:linear-gradient(114.92deg,_#e6eeff,_#fafcff)] flex flex-col items-start justify-center p-2.5 box-border gap-[10px]">
              <div className="self-stretch rounded-3xs bg-white overflow-hidden flex flex-row flex-wrap items-center justify-center py-2.5 px-[7.8px] gap-[11px]">
                <img
                  className="self-stretch w-[70px] relative rounded-8xs max-h-full overflow-hidden shrink-0 object-cover min-h-[50px]"
                  loading="lazy"
                  alt=""
                  src="/frame-5591@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start py-0 px-[5px] box-border gap-[7px] min-w-[86px]">
                  <div className="flex flex-row items-center justify-center gap-[5px]">
                    <div className="flex flex-row items-center justify-center py-0 px-[2.5px]">
                      <div className="relative text-smi text-darkslategray text-left inline-block min-w-[99px]">
                        <span className="font-medium font-poppins">{`Bags on `}</span>
                        <span className="font-semibold font-poppins">
                          Timpu
                        </span>
                      </div>
                    </div>
                    <img
                      className="h-[15px] w-[14.4px] relative"
                      loading="lazy"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                    <div className="h-6 relative text-xs font-poppins text-gray text-left flex items-center min-w-[79px]">{`1123 products `}</div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/chevronright-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-smi font-poppins text-darkslategray text-left">
                Or set filter and help us choose the best bag for you.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5">
              <div className="flex-1 relative text-3xs font-poppins text-darkslategray text-left whitespace-nowrap">
                4:48 PM
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq700:flex-wrap">
              <div className="relative text-smi font-poppins text-gray text-left inline-block min-w-[79px]">
                Select filters
              </div>
              <div className="flex flex-row items-center justify-center py-0 px-[2.5px] gap-[2px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src="/slidershorizontal.svg"
                />
                <div className="relative text-smi leading-[20px] font-poppins text-dimgray-200 text-left inline-block min-w-[31px]">
                  Filter
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start py-0 pr-[50.5px] pl-0 box-border gap-[10px] min-h-[58px] mq700:pr-[25px] mq700:box-border">
              <div className="w-[120px] rounded-8xs bg-ghostwhite box-border flex flex-row items-center justify-center py-0.5 px-[9px] gap-[5px] border-[1px] border-solid border-dodgerblue">
                <div className="flex-1 flex flex-row items-center justify-center gap-[5px] mq700:flex-wrap">
                  <div className="flex-1 relative text-smi leading-[20px] font-poppins text-dodgerblue text-left inline-block min-w-[23px]">
                    Strap
                  </div>
                  <div className="relative text-smi leading-[20px] font-poppins text-dodgerblue text-left inline-block min-w-[8px] mq700:w-full mq700:h-2">
                    -
                  </div>
                  <div className="flex-1 relative text-smi leading-[20px] font-medium font-poppins text-dodgerblue text-left inline-block min-w-[23px]">
                    Long
                  </div>
                </div>
                <img
                  className="h-[11px] w-[10.2px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/checksquare2.svg"
                />
              </div>
              <button className="cursor-pointer [border:none] py-0.5 px-2.5 bg-whitesmoke rounded-8xs flex flex-row items-center justify-center gap-[5px] hover:bg-gainsboro">
                <div className="relative text-smi leading-[20px] font-poppins text-dimgray-100 text-left inline-block min-w-[44px]">
                  Colour
                </div>
                <img
                  className="h-[11px] w-[10.2px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/checksquare2-1.svg"
                />
              </button>
              <div className="rounded-8xs bg-whitesmoke flex flex-row items-center justify-center py-0.5 px-2.5 gap-[5px]">
                <div className="relative text-smi leading-[20px] font-poppins text-dimgray-100 text-left inline-block min-w-[25px]">
                  Size
                </div>
                <img
                  className="h-[11px] w-[10.2px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/checksquare2-1.svg"
                />
              </div>
              <div className="rounded-8xs [background:linear-gradient(#f4f4f4,_#f4f4f4),_linear-gradient(#f4f4f4,_#f4f4f4),_#f4f4f4] flex flex-row items-center justify-center py-0.5 px-2.5 gap-[5px]">
                <div className="relative text-smi leading-[20px] font-poppins text-dimgray-100 text-left inline-block min-w-[39px]">
                  Brand
                </div>
                <img
                  className="h-[11px] w-[10.2px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/checksquare2-1.svg"
                />
              </div>
              <button className="cursor-pointer [border:none] py-0.5 px-2.5 bg-[transparent] rounded-8xs [background:linear-gradient(#f4f4f4,_#f4f4f4),_linear-gradient(#f4f4f4,_#f4f4f4),_#f4f4f4] flex flex-row items-center justify-center gap-[5px] hover:bg-gainsboro">
                <div className="relative text-smi leading-[20px] font-poppins text-dimgray-100 text-left inline-block min-w-[53px]">
                  Material
                </div>
                <img
                  className="h-[11px] w-[10.2px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/checksquare2-1.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch [background:linear-gradient(100.27deg,_#eff3fd,_rgba(239,_243,_253,_0))] box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-[5px] px-2.5 gap-[5px] min-h-[84px] border-[2px] border-solid border-white">
      <div className="flex-1 flex flex-col items-end justify-start gap-[10px] min-w-[172px]">
        <TextField
          className="[border:none] bg-[transparent] self-stretch h-10 font-poppins text-smi text-gray"
          placeholder="Type your message"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <img width="20px" height="20px" src="/paperclip.svg" alt='img'/>
            ),
          }}
          sx={{
            "& fieldset": { borderColor: "#e3ecff" },
            "& .MuiInputBase-root": {
              height: "40px",
              backgroundColor: "#fff",
              paddingRight: "10px",
              borderRadius: "10px",
              fontSize: "13px",
            },
            "& .MuiInputBase-input": { color: "#949494" },
          }}
        />
        <div className="flex flex-row items-start justify-end py-0 pr-[15.5px] pl-[15px]">
          <div className="flex flex-row items-start justify-start gap-[5px] mq700:flex-wrap">
            <div className="relative text-smi font-poppins text-darkgray text-left inline-block min-w-[76px]">{`Powered by `}</div>
            <div className="relative text-smi font-semibold font-poppins text-slategray text-left inline-block min-w-[55px]">
              Krunk.ai
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-[18px] h-[18px] relative object-cover"
                loading="lazy"
                alt=""
                src="/logo@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 rounded-3xs bg-dodgerblue overflow-hidden flex flex-row items-center justify-center py-2 px-[31px] box-border">
        <img
          className="h-[15px] w-[7.5px] relative"
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
      </div>
    </div>
  </form>
    </main>
  );
}

export default ChatScreen;
