import React from "react";

import { Text, Stack, Img } from "components";
import { useNavigate } from "react-router-dom";

const DesktopOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate8() {
    navigate("/screenfive");
  }

  return (
    <>
      <div
        className="common-pointer bg-white_A700 flex flex-col font-lato items-center justify-start mx-[auto] sm:p-[3px] md:p-[4px] p-[6px] w-[100%]"
        onClick={handleNavigate8}
      >
        <div className="flex flex-col justify-start max-w-[1230px] mb-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:px-[0] w-[100%]">
            <Text
              className="italic sm:mt-[19px] md:mt-[24px] mt-[36px] text-teal_900 w-[auto]"
              variant="body1"
            >
              OUR WORK
            </Text>
            <div className="flex flex-col justify-start ml-[3px] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] pr-[11px] md:pr-[7px] pt-[11px] sm:pt-[5px] md:pt-[7px] sm:px-[0] sm:w-[100%] w-[4%]">
              <Text
                className="sm:mt-[15px] md:mt-[20px] mt-[30px] text-teal_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                _
              </Text>
            </div>
            <Stack className="h-[216px] sm:ml-[13px] md:ml-[17px] ml-[26px] relative w-[30%]">
              <Stack className="absolute h-[216px] left-[0] sm:w-[100%] w-[59%]">
                <Text
                  className="absolute text-gray_300 w-[auto]"
                  variant="body8"
                >
                  01
                </Text>
                <Text
                  className="absolute h-[max-content] inset-y-[0] leading-[normal] left-[19%] sm:mx-[0] my-[auto] text-teal_900 sm:w-[100%] w-[50%]"
                  variant="body5"
                >
                  Get
                  <br />
                  Inspired
                </Text>
              </Stack>
              <Text
                className="absolute bottom-[10%] font-medium leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] right-[0] text-gray_500 sm:w-[100%] w-[89%]"
                variant="body9"
              >
                Satisfy all of your inspiration needs in one place. .
              </Text>
            </Stack>
            <div className="flex flex-col items-center justify-start md:ml-[106px] ml-[155px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
                <Text className="text-gray_300 w-[auto]" variant="body8">
                  02
                </Text>
                <div className="flex flex-col justify-start sm:mt-[39px] md:mt-[51px] mt-[75px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                  <Text
                    className="leading-[normal] md:ml-[28px] ml-[42px] sm:mx-[0] text-teal_900 sm:w-[100%] w-[36%]"
                    variant="body5"
                  >
                    Nano
                    <br />
                    Zero Filtration
                  </Text>
                  <Text
                    className="font-medium leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 w-[100%]"
                    variant="body9"
                  >
                    Nano Zero Filtration is a completely reimagined plant-based
                    filter.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
            <Stack className="h-[216px] relative sm:w-[100%] w-[47%]">
              <Stack className="absolute h-[216px] left-[0] sm:w-[100%] w-[53%]">
                <Text
                  className="absolute text-gray_300 w-[auto]"
                  variant="body8"
                >
                  03
                </Text>
                <Text
                  className="absolute h-[max-content] inset-y-[0] leading-[normal] sm:mx-[0] my-[auto] right-[12%] text-teal_900 sm:w-[100%] w-[69%]"
                  variant="body5"
                >
                  PureV
                  <br />
                  Technology
                </Text>
              </Stack>
              <Text
                className="absolute bottom-[10%] font-medium leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] right-[0] text-gray_500 sm:w-[100%] w-[91%]"
                variant="body9"
              >
                Proprietary PureV™ technology improves the quality of your water
                by preventing water.
              </Text>
            </Stack>
            <div className="flex flex-col items-center ml-[104px] md:ml-[71px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
                <Text className="text-gray_300 w-[auto]" variant="body8">
                  04
                </Text>
                <div className="flex flex-col justify-start sm:mt-[39px] md:mt-[51px] mt-[75px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                  <Text
                    className="leading-[normal] md:ml-[28px] ml-[42px] sm:mx-[0] text-teal_900 sm:w-[100%] w-[32%]"
                    variant="body5"
                  >
                    Self-Cleaning <br />
                    Worry-Free
                  </Text>
                  <Text
                    className="font-medium leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_500 w-[100%]"
                    variant="body9"
                  >
                    Neutralizes up to 99%* of bacteria such as E.coli using
                    PureV technology.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[41px] md:mt-[52px] mt-[77px] w-[100%]">
            <Stack className="h-[468px] mb-[1px] relative w-[34%]">
              <Stack className="absolute bg-gray_101 h-[234px] sm:p-[4px] md:p-[6px] p-[9px] top-[0] w-[100%]">
                <Text
                  className="absolute h-[max-content] inset-[0] justify-center m-[auto] text-bluegray_100 w-[max-content]"
                  variant="body8"
                >
                  A
                </Text>
                <Text
                  className="absolute font-bold h-[max-content] inset-[0] justify-center leading-[normal] m-[auto] sm:mx-[0] text-center text-teal_900 sm:w-[100%] w-[73%]"
                  variant="body6"
                >
                  One million single use plastic bottles are thrown out every
                  minute!
                </Text>
              </Stack>
              <Img
                src="images/img_elanaloo571.png"
                className="absolute bottom-[0] h-[234px] max-w-[100%] w-[100%]"
                alt="ElanaLoo571"
              />
            </Stack>
            <Stack className="h-[468px] relative w-[34%]">
              <Img
                src="images/img_rectangle136.png"
                className="absolute h-[234px] max-w-[100%] top-[0] w-[100%]"
                alt="Rectangle136"
              />
              <Stack className="absolute bg-gray_101 bottom-[0] h-[234px] sm:p-[4px] md:p-[6px] p-[9px] w-[100%]">
                <Text
                  className="absolute h-[max-content] inset-[0] justify-center m-[auto] text-bluegray_100 w-[max-content]"
                  variant="body8"
                >
                  B
                </Text>
                <Text
                  className="absolute font-bold h-[max-content] inset-[0] justify-center leading-[normal] m-[auto] sm:mx-[0] text-center text-teal_900 sm:w-[100%] w-[73%]"
                  variant="body6"
                >
                  The Plastic free year Challenges is Here.
                  <br />
                  REGISTER NOW!
                </Text>
              </Stack>
            </Stack>
            <Stack className="h-[468px] mb-[1px] relative w-[34%]">
              <Stack className="absolute bg-gray_101 h-[234px] sm:p-[4px] md:p-[6px] p-[9px] top-[0] w-[100%]">
                <Text
                  className="absolute h-[max-content] inset-[0] justify-center m-[auto] text-bluegray_100 w-[max-content]"
                  variant="body8"
                >
                  C
                </Text>
                <Text
                  className="absolute font-bold h-[max-content] inset-[0] justify-center leading-[normal] m-[auto] sm:mx-[0] text-center text-teal_900 sm:w-[100%] w-[73%]"
                  variant="body6"
                >
                  <span className="text-teal_900 text-[24px] font-lato sm:text-[20px] md:text-[22px]">
                    How to live sustainably during a pandemic.
                    <br />
                  </span>
                  <a
                    href="javascript:"
                    className="text-teal_900 text-[24px] font-lato sm:text-[20px] md:text-[22px] underline"
                  >
                    Read More.
                  </a>
                </Text>
              </Stack>
              <Img
                src="images/img_elanaloo1511.png"
                className="absolute bottom-[0] h-[234px] max-w-[100%] w-[100%]"
                alt="ElanaLoo1511"
              />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
