import React from "react";

import { Stack, Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const ScreenFourPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/desktopone");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-inter h-[1024px] mx-[auto] relative w-[100%]">
        <Stack className="absolute h-[372px] inset-x-[0] max-w-[191px] mx-[auto] sm:pl-[15px] sm:pr-[15px] top-[0] w-[100%]">
          <Img
            src="images/img_fococlipping20_372X191.png"
            className="absolute h-[372px] max-w-[100%] w-[100%]"
            alt="fococlippingTwenty"
          />
        </Stack>
        <Stack className="absolute bg-white_A700 h-[1024px] w-[100%]">
          <div className="absolute bg-gradient4  sm:h-[407px] md:h-[526px] h-[764px] inset-y-[13%] w-[100%]"></div>
          <Stack
            className="common-pointer absolute h-[1024px] w-[100%]"
            onClick={handleNavigate3}
          >
            <Stack className="absolute h-[1024px] left-[0] sm:w-[100%] w-[75%]">
              <Stack className="absolute h-[929px] left-[0] top-[0] sm:w-[100%] w-[84%]">
                <Img
                  src="images/img_fococlipping20_807X476.png"
                  className="absolute bottom-[0] h-[807px] left-[0] max-w-[100%] sm:w-[100%] w-[54%]"
                  alt="fococlippingTwenty One"
                />
                <Img
                  src="images/img_fococlipping20_792X606.png"
                  className="absolute h-[792px] max-w-[100%] right-[0] top-[0] sm:w-[100%] w-[68%]"
                  alt="fococlippingTwenty Two"
                />
              </Stack>
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col items-center justify-start sm:mx-[0] sm:p-[2px] md:p-[3px] p-[5px] right-[0] sm:w-[100%] w-[59%]"
                style={{ backgroundImage: "url('images/img_group22.png')" }}
              >
                <Text
                  className="leading-[normal] sm:mb-[222px] md:mb-[287px] mb-[418px] sm:mx-[0] text-center text-white_A700 sm:w-[100%] w-[78%]"
                  as="h1"
                  variant="h1"
                >
                  A smart
                  <br />
                  way to sip
                </Text>
              </div>
            </Stack>
            <Img
              src="images/img_fococlipping20_834X443.png"
              className="absolute h-[834px] max-w-[100%] right-[0] top-[2%] w-[31%]"
              alt="fococlippingTwenty Three"
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ScreenFourPage;
