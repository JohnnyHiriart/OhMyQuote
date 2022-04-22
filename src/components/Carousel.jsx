import React, { useState } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [isActiveSlide1, setIsActiveSlide1] = useState(true);
  const [isActiveSlide2, setIsActiveSlide2] = useState(false);
  const [isActiveSlide3, setIsActiveSlide3] = useState(false);
  const [isActiveSlide4, setIsActiveSlide4] = useState(false);

  function handleClickActiveSlide1() {
    setIsActiveSlide1(!isActiveSlide1);
    setIsActiveSlide2(false);
    setIsActiveSlide3(false);
    setIsActiveSlide4(false);
  }

  function handleClickActiveSlide2() {
    setIsActiveSlide2(!isActiveSlide2);
    setIsActiveSlide1(false);
    setIsActiveSlide3(false);
    setIsActiveSlide4(false);
  }

  function handleClickActiveSlide3() {
    setIsActiveSlide3(!isActiveSlide3);
    setIsActiveSlide1(false);
    setIsActiveSlide2(false);
    setIsActiveSlide4(false);
  }

  function handleClickActiveSlide4() {
    setIsActiveSlide4(!isActiveSlide4);
    setIsActiveSlide1(false);
    setIsActiveSlide2(false);
    setIsActiveSlide3(false);
  }

  return (
    <div className="flex flex-col w-full justify-center h-[50vh] items-center text-[#dbe4ee]">
      <div className="flex">
        <Link to={isActiveSlide1 && "/category"}>
          <div
            className={
              isActiveSlide1
                ? "shadow-shadowcarousel1 cursor-pointer h-80 rounded-[2rem] m-2 bg-[end] bg-no-repeat bg-cover overflow-hidden w-[30rem] transition-[width] duration-200 ease-linear"
                : "shadow-shadowcarousel1 cursor-pointer h-80 w-16 rounded-[2rem] m-2 bg-[end] bg-no-repeat bg-cover overflow-hidden transition-[width] duration-200 ease-linear"
            }
            onClick={!isActiveSlide1 && handleClickActiveSlide1}
          >
            <div
              className={
                isActiveSlide1
                  ? "bg-[url('../src/assets/categories1.jpg')] scale-1 w-[30rem] h-80 shadow-shadowcarousel2 bg-bottom bg-no-repeat bg-cover overflow-hidden transition-[all] duration-200 ease-linear"
                  : "bg-[url('../src/assets/categories3.jpg')] scale-150 w-16 h-80 bg-bottom bg-no-repeat bg-cover overflow-hidden transition-[all] duration-200 ease-linear"
              }
              onClick={!isActiveSlide1 && handleClickActiveSlide1}
            >
              <div
                className={
                  isActiveSlide1
                    ? "flex scale-1 flex-col justify-end h-full transition-[all] duration-200 ease-linear"
                    : "flex flex-col justify-end h-full scale-[0.6666666666666] transition-[all] duration-200 ease-linear"
                }
                onClick={!isActiveSlide1 && handleClickActiveSlide1}
              >
                <div className="flex w-[1000rem]">
                  <div className="shadow-shadowcarousel1 bg-white w-10 h-10 m-[0.7rem] rounded-[50%] flex justify-center items-center">
                    <img
                      className="w-1/2"
                      src="../src/assets/smal-logo-oh-my-quote.png"
                      alt="logoohmyquote"
                    />
                  </div>
                  <div
                    className={
                      isActiveSlide1
                        ? "opacity-100 ml-0 mt-3 transition-[all] duration-200 ease-linear text-white"
                        : "mt-3 ml-4 transition-[all] duration-200 ease-linear text-white opacity-0"
                    }
                    onClick={!isActiveSlide1 && handleClickActiveSlide1}
                  >
                    <h4 className="text-[1.5rem] drop-shadow-[0_1px_1px_black] [line-height:0.9rem]">
                      Categories
                    </h4>
                    <p className="text-[1.1rem] drop-shadow-[0_1px_1px_black] [line-height:2.5rem]">
                      Choose the theme of your quote
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={isActiveSlide2 && "/quote-me"}>
          <div
            className={
              isActiveSlide2
                ? "shadow-shadowcarousel1 cursor-pointer h-80 rounded-[2rem] m-2 bg-[end] bg-no-repeat bg-cover overflow-hidden transition-[width] duration-200 ease-linear w-[30rem]"
                : "shadow-shadowcarousel1 cursor-pointer h-80 w-16 rounded-[2rem] m-2 bg-[end] bg-no-repeat bg-cover overflow-hidden transition-[width] duration-200 ease-linear"
            }
            onClick={!isActiveSlide2 && handleClickActiveSlide2}
          >
            <div
              className={
                isActiveSlide2
                  ? "bg-[url('../src/assets/quoteme1.jpg')] scale-1 w-[30rem] h-80 shadow-shadowcarousel3 bg-bottom bg-no-repeat bg-cover overflow-hidden transition-[all] duration-200 ease-linear"
                  : "bg-[url('../src/assets/quoteme2.jpg')] scale-150 w-16 h-80 bg-bottom bg-no-repeat bg-cover overflow-hidden transition-[all] duration-200 ease-linear"
              }
              onClick={!isActiveSlide2 && handleClickActiveSlide2}
            >
              <div
                className={
                  isActiveSlide2
                    ? "flex scale-1 flex-col justify-end h-full transition-[all] duration-200 ease-linear"
                    : "flex flex-col justify-end h-full scale-[0.6666666666666] transition-[all] duration-200 ease-linear"
                }
                onClick={!isActiveSlide2 && handleClickActiveSlide2}
              >
                <div className="flex w-[1000rem]">
                  <div className="shadow-shadowcarousel1 bg-white w-10 h-10 m-[0.7rem] rounded-[50%] flex justify-center items-center">
                    <svg
                      className="w-1/2 fill-current text-redquote"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z" />
                    </svg>
                  </div>
                  <div
                    className={
                      isActiveSlide2
                        ? "opacity-100 ml-0 mt-3 transition-[all] duration-200 ease-linear text-white"
                        : "mt-3 ml-4 transition-[all] duration-200 ease-linear text-white opacity-0"
                    }
                    onClick={!isActiveSlide2 && handleClickActiveSlide2}
                  >
                    <h4 className="text-[1.5rem] drop-shadow-[0_1px_1px_black] [line-height:0.9rem]">
                      Quote Me
                    </h4>
                    <p className="text-[1.1rem] drop-shadow-[0_1px_1px_black] [line-height:2.5rem]">
                      Edit and share your quote
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={isActiveSlide3 && "/top-quotes"}>
          <div
            className={
              isActiveSlide3
                ? "shadow-shadowcarousel1 cursor-pointer h-80 rounded-[2rem] m-2 bg-[end] bg-no-repeat bg-cover overflow-hidden transition-[width] duration-200 ease-linear w-[30rem]"
                : "shadow-shadowcarousel1 cursor-pointer h-80 w-16 rounded-[2rem] m-2 bg-[end] bg-no-repeat bg-cover overflow-hidden transition-[width] duration-200 ease-linear"
            }
            onClick={!isActiveSlide3 && handleClickActiveSlide3}
          >
            <div
              className={
                isActiveSlide3
                  ? "bg-[url('../src/assets/top1.jpg')] scale-1 w-[30rem] h-80 shadow-shadowcarousel3 bg-bottom bg-no-repeat bg-cover overflow-hidden transition-[all] duration-200 ease-linear"
                  : "bg-[url('../src/assets/top2.jpg')] scale-150 w-16 h-80 bg-bottom bg-no-repeat bg-cover overflow-hidden transition-[all] duration-200 ease-linear"
              }
              onClick={!isActiveSlide3 && handleClickActiveSlide3}
            >
              <div
                className={
                  isActiveSlide3
                    ? "flex scale-1 flex-col justify-end h-full transition-[all] duration-200 ease-linear"
                    : "flex flex-col justify-end h-full scale-[0.6666666666666] transition-[all] duration-200 ease-linear"
                }
                onClick={!isActiveSlide3 && handleClickActiveSlide3}
              >
                <div className="flex w-[1000rem]">
                  <div className="shadow-shadowcarousel1 bg-white w-10 h-10 m-[0.7rem] rounded-[50%] flex justify-center items-center">
                    <svg
                      className="w-1/2 fill-current text-redquote"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                    </svg>
                  </div>
                  <div
                    className={
                      isActiveSlide3
                        ? "opacity-100 ml-0 mt-3 transition-[all] duration-200 ease-linear text-white"
                        : "mt-3 ml-4 transition-[all] duration-200 ease-linear text-white opacity-0"
                    }
                    onClick={!isActiveSlide3 && handleClickActiveSlide3}
                  >
                    <h4 className="text-[1.5rem] drop-shadow-[0_1px_1px_black] [line-height:0.9rem]">
                      Top Quotes
                    </h4>
                    <p className="text-[1.1rem] drop-shadow-[0_1px_1px_black] [line-height:2.5rem]">
                      Your favorite quotes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={isActiveSlide4 && "/the-crew"}>
          <div
            className={
              isActiveSlide4
                ? "shadow-shadowcarousel1 cursor-pointer h-80 rounded-[2rem] m-2 bg-[end] bg-no-repeat bg-cover overflow-hidden transition-[width] duration-200 ease-linear w-[30rem]"
                : "shadow-shadowcarousel1 cursor-pointer h-80 w-16 rounded-[2rem] m-2 bg-[end] bg-no-repeat bg-cover overflow-hidden transition-[width] duration-200 ease-linear"
            }
            onClick={!isActiveSlide4 && handleClickActiveSlide4}
          >
            <div
              className={
                isActiveSlide4
                  ? "bg-[url('../src/assets/crew1.jpg')] scale-1 w-[30rem] h-80 shadow-shadowcarousel3 bg-bottom bg-no-repeat bg-cover overflow-hidden transition-[all] duration-200 ease-linear"
                  : "bg-[url('../src/assets/crew2.jpg')] scale-150 w-16 h-80 bg-bottom bg-no-repeat bg-cover overflow-hidden transition-[all] duration-200 ease-linear"
              }
              onClick={!isActiveSlide4 && handleClickActiveSlide4}
            >
              <div
                className={
                  isActiveSlide4
                    ? "flex scale-1 flex-col justify-end h-full transition-[all] duration-200 ease-linear"
                    : "flex flex-col justify-end h-full scale-[0.6666666666666] transition-[all] duration-200 ease-linear"
                }
                onClick={!isActiveSlide4 && handleClickActiveSlide4}
              >
                <div className="flex w-[1000rem]">
                  <div className="shadow-shadowcarousel1 bg-white w-10 h-10 m-[0.7rem] rounded-[50%] flex justify-center items-center">
                    <svg
                      className="w-1/2 fill-current text-redquote"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z" />
                    </svg>
                  </div>
                  <div
                    className={
                      isActiveSlide4
                        ? "opacity-100 ml-0 mt-3 transition-[all] duration-200 ease-linear text-white"
                        : "mt-3 ml-4 transition-[all] duration-200 ease-linear text-white opacity-0"
                    }
                    onClick={!isActiveSlide4 && handleClickActiveSlide4}
                  >
                    <h4 className="text-[1.5rem] drop-shadow-[0_1px_1px_black] [line-height:0.9rem]">
                      The Crew
                    </h4>
                    <p className="text-[1.1rem] drop-shadow-[0_1px_1px_black] [line-height:2.5rem]">
                      Know us and contact us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Carousel;
