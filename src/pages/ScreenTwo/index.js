import React from "react";

import { Text, Stack, Button, Img, List } from "components";
import { useNavigate } from "react-router-dom";

const ScreenTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/screenthree");
  }
  function handleNavigate7() {
    navigate("/productdetailpagemockup");
  }

  return (
    <>
      <div
        className="common-pointer bg-white_A700 flex flex-col font-lato items-center justify-end mx-[auto] overflow-auto sm:pt-[15px] md:pt-[38px] pt-[56px] w-[100%]"
        onClick={handleNavigate6}
      >
        <div className="flex flex-col items-center justify-end pr-[1px] w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end max-w-[1158px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-black font-lato sm:mb-[2px] md:mb-[3px] mb-[5px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-teal_900 w-[auto]"
              variant="body6"
            >
              ARACHNOMESH
            </Text>
            <Text
              className="font-roboto sm:ml-[148px] md:ml-[191px] ml-[278px] sm:my-[4px] md:my-[5px] my-[8px] text-gray_900 w-[auto]"
              variant="body7"
            >
              Home
            </Text>
            <Text
              className="font-roboto sm:ml-[33px] md:ml-[42px] ml-[62px] sm:my-[4px] md:my-[5px] my-[8px] text-gray_900_87 w-[auto]"
              variant="body7"
            >
              About
            </Text>
            <Text
              className="font-roboto sm:ml-[33px] md:ml-[43px] ml-[63px] sm:my-[4px] md:my-[5px] my-[8px] text-gray_900_87 w-[auto]"
              variant="body7"
            >
              Bottles
            </Text>
            <Text
              className="font-roboto sm:ml-[33px] md:ml-[42px] ml-[62px] sm:my-[4px] md:my-[5px] my-[8px] text-gray_900_87 w-[auto]"
              variant="body7"
            >
              About
            </Text>
            <Text
              className="font-roboto sm:ml-[33px] md:ml-[43px] ml-[63px] sm:my-[4px] md:my-[5px] my-[8px] text-gray_900_87 w-[auto]"
              variant="body7"
            >
              Contact
            </Text>
            <Stack className="font-roboto h-[40px] sm:ml-[14px] md:ml-[19px] ml-[28px] relative w-[10%]">
              <Text
                className="absolute h-[max-content] inset-y-[0] my-[auto] right-[22%] text-gray_900_87 w-[auto]"
                variant="body7"
              >
                Login
              </Text>
              <Button
                className="absolute cursor-pointer font-medium text-[18px] text-bluegray_900 text-center w-[100%]"
                size="md"
              >
                Login
              </Button>
            </Stack>
          </div>
          <div className="flex flex-col items-center justify-start md:mt-[120px] mt-[175px] sm:mt-[93px] sm:px-[0] w-[100%]">
            <Stack className="h-[1777px] relative w-[100%]">
              <div className="absolute flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="border-4 border-solid border-teal_900 sm:h-[204px] md:h-[263px] h-[382px] rounded-radius50 sm:w-[203px] md:w-[262px] w-[382px]"></div>
                  <Stack className="h-[1024px] sm:mt-[197px] md:mt-[255px] mt-[371px] relative w-[100%]">
                    <div className="absolute bg-gray_400 flex flex-col justify-start w-[100%]">
                      <div className="bg-white_A700 h-[1024px] sm:h-[546px] md:h-[705px] sm:w-[100%] w-[50%]"></div>
                    </div>
                    <Img
                      src="images/img_rectangle114_1024X720.png"
                      className="absolute h-[1024px] max-w-[100%] right-[0] sm:w-[100%] w-[50%]"
                      alt="Rectangle114"
                    />
                  </Stack>
                </div>
              </div>
              <Stack className="absolute h-[642px] inset-x-[0] mx-[auto] top-[18%] w-[14%]">
                <Img
                  src="images/img_fococlipping20_1.png"
                  className="absolute h-[628px] max-w-[100%] top-[2%] w-[100%]"
                  alt="fococlippingTwenty"
                />
                <Img
                  src="images/img_fococlipping20.png"
                  className="absolute h-[86px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[81%]"
                  alt="fococlippingTwenty One"
                />
              </Stack>
              <Button
                className="absolute flex items-center justify-center md:mt-[455px] min-w-[12%] mt-[662px] sm:mt-[352px] text-center top-[37%] w-[max-content]"
                onClick={handleNavigate7}
                leftIcon={
                  <Img
                    src="images/img_cart.svg"
                    className="mr-[8px] sm:mr-[4px] md:mr-[5px] text-center right-[1%] absolute"
                    alt="cart"
                  />
                }
                variant="FillTeal900"
              >
                <div className="common-pointer bg-transparent cursor-pointer font-bold right-[0] text-[14px] text-white_A700 top-[0] tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                  Add to cart
                </div>
              </Button>
            </Stack>
            <div className="bg-gray_400 flex flex-col justify-start w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[720px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <div className="bg-gradient2  flex flex-col items-center md:p-[56px] p-[82px] sm:px-[15px] sm:py-[43px] w-[100%]">
                  <div className="flex flex-col items-center justify-start sm:mx-[0] sm:my-[139px] md:my-[179px] my-[261px] sm:px-[0] rounded-radius6 sm:w-[100%] w-[97%]">
                    <div className="flex flex-col font-inter items-center justify-start w-[100%]">
                      <Text className="text-gray_50 w-[auto]" variant="body2">
                        All-new Filtered Tech.
                      </Text>
                      <Text
                        className="font-normal leading-[normal] sm:mt-[25px] md:mt-[33px] mt-[48px] not-italic text-gray_50 w-[100%]"
                        variant="body6"
                      >
                        A revolutionary portable water filtration system
                        combining high-performance Nano Zero filter with a
                        seamless, low-pressure drinking experience. Take
                        hydration into your own hands.
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium font-roboto min-w-[21%] sm:mt-[25px] md:mt-[32px] mt-[47px] text-[18px] text-bluegray_900 text-center w-[max-content]"
                      size="md"
                    >
                      BUY NOW
                    </Button>
                  </div>
                </div>
                <Img
                  src="images/img_rectangle117_1024X720.png"
                  className="max-w-[100%] w-[100%]"
                  alt="Rectangle117"
                />
              </div>
            </div>
            <div className="bg-cyan_900 flex flex-col font-inter justify-end sm:p-[15px] md:p-[64px] p-[94px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1151px] md:mb-[12px] mb-[18px] sm:mb-[9px] ml-[auto] mr-[auto] sm:mt-[33px] md:mt-[43px] mt-[63px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                  <Stack className="h-[655px] relative w-[100%]">
                    <div className="absolute bg-gradient3  bottom-[0] sm:h-[333px] md:h-[430px] h-[624px] right-[5%] rounded-radius50 sm:w-[332px] md:w-[429px] w-[624px]"></div>
                    <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start my-[auto] sm:w-[295px] md:w-[381px] w-[554px]">
                      <Img
                        src="images/img_pngtreesplash.png"
                        className="max-w-[100%] w-[100%]"
                        alt="Pngtreesplash"
                      />
                      <Img
                        src="images/img_pngtreesplash_232X554.png"
                        className="max-w-[100%] w-[100%]"
                        alt="Pngtreesplash One"
                      />
                    </div>
                    <Text
                      className="absolute text-bluegray_50 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      Drinking
                    </Text>
                    <div className="absolute flex flex-col justify-start left-[0] sm:mx-[0] sm:px-[0] top-[17%] sm:w-[100%] w-[28%]">
                      <Text
                        className="text-gray_200 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        Made
                      </Text>
                      <Text
                        className="text-gray_100 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        Safer
                      </Text>
                    </div>
                    <Text
                      className="absolute bottom-[14%] font-bold leading-[normal] left-[0] sm:mx-[0] text-gray_51 sm:w-[100%] w-[42%]"
                      variant="body6"
                    >
                      A revolutionary portable water filtration system combining
                      high-performance Nano Zero filter with a seamless,
                      low-pressure drinking experience. Take hydration into your
                      own hands.
                    </Text>
                  </Stack>
                  <Stack className="h-[56px] sm:ml-[44px] md:ml-[57px] ml-[83px] sm:mt-[23px] md:mt-[30px] mt-[44px] relative sm:w-[100%] w-[60%]">
                    <div className="absolute bg-white_A700 border border-solid border-white_A700 flex flex-col justify-start md:p-[11px] sm:p-[15px] p-[17px] right-[0] rounded-radius28 w-[100%]">
                      <Text
                        className="font-normal sm:ml-[15px] md:ml-[20px] ml-[30px] not-italic text-gray_600 w-[auto]"
                        variant="body9"
                      >
                        Enter your Email
                      </Text>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-normal min-w-[30%] not-italic text-[18px] text-center text-white_A700 w-[max-content]"
                      shape="CircleBorder28"
                      variant="OutlineWhiteA700"
                    >
                      SIGN UP
                    </Button>
                  </Stack>
                </div>
                <List
                  className="sm:gap-[25px] md:gap-[33px] gap-[48.75px] grid min-h-[auto] sm:ml-[17px] md:ml-[22px] ml-[32px] w-[15%]"
                  orientation="vertical"
                >
                  <Stack className="h-[187px] relative rotate-[-30deg] w-[100%]">
                    <Stack className="absolute h-[187px] left-[0] sm:w-[100%] w-[96%]">
                      <Img
                        src="images/img_pngtreesplash_232X554.png"
                        className="absolute bottom-[0] h-[105px] left-[0] max-w-[100%] sm:w-[100%] w-[82%]"
                        alt="Pngtreesplash Two"
                      />
                      <Img
                        src="images/img_fococlipping20_176X132.png"
                        className="absolute h-[176px] max-w-[100%] right-[0] top-[0] sm:w-[100%] w-[84%]"
                        alt="fococlippingTwenty Two"
                      />
                    </Stack>
                    <Img
                      src="images/img_pngtreesplash.png"
                      className="absolute h-[123px] max-w-[100%] right-[0] top-[9%] sm:w-[100%] w-[84%]"
                      alt="Pngtreesplash One"
                    />
                  </Stack>
                  <Stack className="h-[187px] relative rotate-[-30deg] w-[100%]">
                    <Stack className="absolute h-[187px] left-[0] sm:w-[100%] w-[96%]">
                      <Img
                        src="images/img_pngtreesplash_232X554.png"
                        className="absolute bottom-[0] h-[105px] left-[0] max-w-[100%] sm:w-[100%] w-[82%]"
                        alt="Pngtreesplash Three"
                      />
                      <Img
                        src="images/img_fococlipping20_176X132.png"
                        className="absolute h-[176px] max-w-[100%] right-[0] top-[0] sm:w-[100%] w-[84%]"
                        alt="fococlippingTwenty Three"
                      />
                    </Stack>
                    <Img
                      src="images/img_pngtreesplash.png"
                      className="absolute h-[123px] max-w-[100%] right-[0] top-[9%] sm:w-[100%] w-[84%]"
                      alt="Pngtreesplash One One"
                    />
                  </Stack>
                  <Stack className="h-[187px] relative rotate-[-30deg] w-[100%]">
                    <Stack className="absolute h-[187px] left-[0] sm:w-[100%] w-[96%]">
                      <Img
                        src="images/img_pngtreesplash_232X554.png"
                        className="absolute bottom-[0] h-[105px] left-[0] max-w-[100%] sm:w-[100%] w-[82%]"
                        alt="Pngtreesplash Four"
                      />
                      <Img
                        src="images/img_fococlipping20_176X132.png"
                        className="absolute h-[176px] max-w-[100%] right-[0] top-[0] sm:w-[100%] w-[84%]"
                        alt="fococlippingTwenty Four"
                      />
                    </Stack>
                    <Img
                      src="images/img_pngtreesplash.png"
                      className="absolute h-[123px] max-w-[100%] right-[0] top-[9%] sm:w-[100%] w-[84%]"
                      alt="Pngtreesplash One Two"
                    />
                  </Stack>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenTwoPage;
