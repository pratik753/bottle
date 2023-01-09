import React from "react";

import { Text, Stack, Button, Img, List } from "components";
import { useNavigate } from "react-router-dom";

const ScreenOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/screentwo");
  }
  function handleNavigate5() {
    navigate("/productdetailpagemockup");
  }

  return (
    <>
      <div
        className="common-pointer bg-white_A700 flex flex-col font-lato items-center justify-end mx-[auto] overflow-auto sm:pt-[15px] md:pt-[38px] pt-[56px] w-[100%]"
        onClick={handleNavigate4}
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
          <div className="flex flex-col items-center justify-start mt-[128px] sm:mt-[68px] md:mt-[88px] sm:px-[0] w-[100%]">
            <Stack className="h-[1824px] relative w-[100%]">
              <div className="absolute bottom-[0] flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="border-4 border-solid border-teal_900 sm:h-[149px] md:h-[192px] h-[278px] rounded-radius50 sm:w-[148px] md:w-[191px] w-[278px]"></div>
                  <Stack className="h-[1024px] sm:mt-[225px] md:mt-[291px] mt-[423px] relative w-[100%]">
                    <div className="absolute bg-gray_400 flex flex-col justify-start w-[100%]">
                      <div className="bg-white_A700 h-[1024px] sm:h-[546px] md:h-[705px] sm:w-[100%] w-[50%]"></div>
                    </div>
                    <Img
                      src="images/img_rectangle114.png"
                      className="absolute h-[1024px] max-w-[100%] right-[0] sm:w-[100%] w-[50%]"
                      alt="Rectangle114"
                    />
                  </Stack>
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] top-[0] sm:w-[100%] w-[14%]">
                <Img
                  src="images/img_fococlipping20.png"
                  className="max-w-[100%] sm:w-[100%] w-[81%]"
                  alt="fococlippingTwenty"
                />
                <Img
                  src="images/img_fococlipping20_628X191.png"
                  className="max-w-[100%] sm:mt-[158px] md:mt-[205px] mt-[298px] w-[100%]"
                  alt="fococlippingTwenty One"
                />
              </div>
              <Button
                className="absolute flex items-center justify-center md:mt-[487px] min-w-[12%] mt-[709px] sm:mt-[377px] text-center top-[39%] w-[max-content]"
                onClick={handleNavigate5}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenOnePage;
