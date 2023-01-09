import React from "react";

import { Stack, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const ScreenFivePage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/productdetailpagemockup");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-end mx-[auto] w-[100%]">
        <Stack className="h-[1024px] relative w-[100%]">
          <Img
            src="images/img_bottle1.png"
            className="absolute h-[30px] left-[20%] max-w-[100%] top-[6%] w-[18%]"
            alt="bottleOne"
          />
          <Stack className="absolute bg-white_A700 h-[8px] sm:px-[15px] md:px-[252px] px-[367px] w-[100%]">
            <Stack className="absolute h-[8px] right-[100%] sm:w-[100%] w-[44%]">
              <Img
                src="images/img_fococlipping20_8X622.png"
                className="absolute h-[8px] max-w-[100%] w-[100%]"
                alt="fococlippingTwenty"
              />
            </Stack>
          </Stack>
          <div
            className="common-pointer absolute bg-gradient  flex flex-col items-center justify-end md:pt-[10px] pt-[15px] sm:pt-[7px] w-[100%]"
            onClick={handleNavigate2}
          >
            <div className="flex flex-col justify-start w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[14px] md:ml-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                <Stack className="h-[243px] sm:mt-[104px] md:mt-[135px] mt-[197px] relative w-[29%]">
                  <div className="absolute bg-gradient6  h-[122px] sm:h-[65px] md:h-[84px] left-[0] rotate-[63deg] rounded-radius50 top-[0] w-[122px] sm:w-[64px] md:w-[83px]"></div>
                  <Stack className="absolute h-[237px] inset-y-[0] my-[auto] right-[0] sm:w-[100%] w-[85%]">
                    <Stack className="absolute bottom-[0] h-[211px] rounded-radius967 w-[100%]">
                      <div className="absolute bg-gradient7  flex flex-col justify-start md:pb-[10px] pb-[15px] sm:pb-[7px] md:px-[10px] px-[15px] sm:px-[7px] rounded-radius967 w-[100%]">
                        <div className="bg-cyan_50 sm:h-[19px] md:h-[24px] h-[34px] md:mb-[110px] mb-[160px] sm:mb-[85px] rounded-radius3095 w-[21%]"></div>
                      </div>
                      <Stack
                        className="absolute bg-cover bg-no-repeat h-[211px] p-[13px] sm:p-[6px] md:p-[8px] rounded-radius967 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group36.png')",
                        }}
                      >
                        <div className="absolute bottom-[8%] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[90%]">
                          <div className="flex flex-col justify-start w-[100%]">
                            <Img
                              src="images/img_music.svg"
                              className="max-w-[100%] w-[14%]"
                              alt="music"
                            />
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[11px] sm:mt-[5px] md:mt-[7px] sm:px-[0] w-[100%]">
                              <Text
                                className="not-italic text-white_A700 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Austin Wade{" "}
                              </Text>
                              <Text
                                className="italic sm:mt-[3px] md:mt-[4px] mt-[6px] text-white_A700 w-[auto]"
                                variant="body13"
                              >
                                ADIDAS
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[8%] flex flex-col inset-x-[0] justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[89%]">
                          <Text
                            className="leading-[normal] not-italic text-white_A700 w-[100%]"
                            variant="body15"
                          >
                            {`Say goodbye to your reusable bottles persistent funk — and hello to this Jetsons-worthy update.  My only regret is that I didn't here about this for my first 3 purchases.`}
                            <br />
                            <br />
                            They did a great job!!
                          </Text>
                          <Text
                            className="sm:mt-[28px] md:mt-[37px] mt-[54px] not-italic text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Athelete
                          </Text>
                        </div>
                      </Stack>
                    </Stack>
                    <Img
                      src="images/img_ellipse2.png"
                      className="absolute sm:h-[31px] md:h-[40px] h-[58px] left-[5%] rounded-radius50 top-[0] sm:w-[30px] md:w-[39px] w-[58px]"
                      alt="EllipseTwo"
                    />
                  </Stack>
                </Stack>
                <Stack className="font-inter h-[566px] sm:ml-[45px] md:ml-[59px] ml-[86px] relative w-[39%]">
                  <div className="absolute bottom-[0] flex flex-col justify-start sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[92%]">
                    <div className="bg-gradient6  sm:h-[122px] md:h-[157px] h-[228px] sm:ml-[129px] md:ml-[167px] ml-[244px] rotate-[63deg] rounded-radius50 sm:w-[121px] md:w-[156px] w-[228px]"></div>
                    <div className="bg-gradient8  md:h-[113px] h-[164px] sm:h-[88px] mt-[122px] sm:mt-[64px] md:mt-[83px] rotate-[63deg] rounded-radius50 md:w-[112px] w-[164px] sm:w-[87px]"></div>
                  </div>
                  <Stack className="absolute bottom-[14%] font-poppins h-[331px] left-[0] sm:w-[100%] w-[89%]">
                    <Stack className="absolute bottom-[0] h-[294px] rounded-radius135 w-[100%]">
                      <div className="absolute bg-gradient7  flex flex-col justify-start sm:pb-[11px] md:pb-[15px] pb-[22px] md:px-[15px] sm:px-[15px] px-[22px] rounded-radius135 w-[100%]">
                        <div className="bg-cyan_50 sm:h-[26px] md:h-[34px] h-[48px] sm:mb-[119px] md:mb-[154px] mb-[224px] rounded-radius4321 w-[21%]"></div>
                      </div>
                      <Stack
                        className="absolute bg-cover bg-no-repeat h-[294px] md:p-[13px] sm:p-[15px] p-[19px] rounded-radius135 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group36.png')",
                        }}
                      >
                        <div className="absolute bottom-[8%] flex flex-col inset-x-[0] justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[89%]">
                          <Img
                            src="images/img_music.svg"
                            className="max-w-[100%] w-[15%]"
                            alt="music One"
                          />
                          <Text
                            className="font-semibold italic sm:ml-[129px] md:ml-[167px] ml-[244px] sm:mt-[16px] md:mt-[21px] mt-[31px] text-white_A700 w-[auto]"
                            variant="body9"
                          >
                            OPRAH MAGAZINE
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[7%] left-[0] not-italic text-white_A700 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Sr. Editor
                        </Text>
                        <Text
                          className="absolute font-normal inset-x-[0] leading-[normal] sm:mx-[0] mx-[auto] not-italic text-white_A700 top-[27%] sm:w-[100%] w-[89%]"
                          variant="body10"
                        >
                          {`Say goodbye to your reusable bottles persistent funk — and hello to this Jetsons-worthy update.  My only regret is that I didn't here about this for my first 3 purchases.`}
                          <br />
                          <br />
                          They did a great job!!
                        </Text>
                        <Text
                          className="absolute bottom-[12%] left-[0] not-italic text-white_A700 w-[auto]"
                          variant="body12"
                        >
                          Jaydon Bator
                        </Text>
                      </Stack>
                    </Stack>
                    <Img
                      src="images/img_ellipse2_82X82.png"
                      className="absolute sm:h-[44px] md:h-[57px] h-[82px] left-[5%] rounded-radius50 top-[0] sm:w-[43px] md:w-[56px] w-[82px]"
                      alt="EllipseTwo One"
                    />
                  </Stack>
                  <Text
                    className="absolute font-bold italic left-[21%] text-white_A700 top-[4%] uppercase w-[auto]"
                    variant="body4"
                  >
                    tESTIMONIALS
                  </Text>
                  <div className="absolute flex flex-col font-lato justify-start sm:mx-[0] sm:pl-[0] md:pr-[12px] sm:pr-[15px] pr-[18px] md:pt-[12px] pt-[18px] sm:pt-[9px] right-[24%] top-[0] sm:w-[100%] w-[8%]">
                    <Text
                      className="mt-[11px] sm:mt-[5px] md:mt-[7px] text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      _
                    </Text>
                  </div>
                </Stack>
                <Stack className="font-poppins h-[276px] sm:ml-[14px] md:ml-[19px] ml-[28px] sm:mt-[107px] md:mt-[139px] mt-[202px] relative w-[25%]">
                  <div className="absolute bg-gradient8  bottom-[0] sm:h-[39px] md:h-[51px] h-[73px] right-[6%] rotate-[63deg] rounded-radius50 sm:w-[38px] md:w-[50px] w-[73px]"></div>
                  <Stack className="absolute h-[237px] w-[100%]">
                    <Stack className="absolute bottom-[0] h-[211px] rounded-radius967 w-[100%]">
                      <div className="absolute bg-gradient7  flex flex-col justify-start md:pb-[10px] pb-[15px] sm:pb-[7px] md:px-[10px] px-[15px] sm:px-[7px] rounded-radius967 top-[0] w-[100%]">
                        <div className="bg-teal_50 sm:h-[18px] md:h-[23px] h-[33px] md:mb-[110px] mb-[161px] sm:mb-[85px] rounded-radius3095 w-[21%]"></div>
                      </div>
                      <Stack
                        className="absolute bg-cover bg-no-repeat bottom-[0] h-[211px] p-[13px] sm:p-[6px] md:p-[8px] rounded-radius967 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group36.png')",
                        }}
                      >
                        <div className="absolute bottom-[9%] flex flex-col items-center justify-start left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start w-[100%]">
                            <Img
                              src="images/img_music.svg"
                              className="max-w-[100%] w-[14%]"
                              alt="music Two"
                            />
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[11px] sm:mt-[5px] md:mt-[7px] sm:px-[0] w-[100%]">
                              <Text
                                className="not-italic text-white_A700 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Sarah
                              </Text>
                              <Text
                                className="italic sm:mt-[2px] md:mt-[3px] mt-[5px] text-white_A700 w-[auto]"
                                variant="body13"
                              >
                                BBC
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="absolute bottom-[7%] left-[4%] not-italic text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Photographer
                        </Text>
                        <Text
                          className="absolute inset-x-[0] leading-[normal] sm:mx-[0] mx-[auto] not-italic text-white_A700 top-[27%] sm:w-[100%] w-[89%]"
                          variant="body15"
                        >
                          {`Say goodbye to your reusable bottles persistent funk — and hello to this Jetsons-worthy update.  My only regret is that I didn't here about this for my first 3 purchases.`}
                          <br />
                          <br />
                          They did a great job!!
                        </Text>
                      </Stack>
                    </Stack>
                    <Img
                      src="images/img_ellipse2_58X58.png"
                      className="absolute sm:h-[31px] md:h-[40px] h-[58px] left-[5%] rounded-radius50 top-[0] sm:w-[30px] md:w-[39px] w-[58px]"
                      alt="EllipseTwo Two"
                    />
                  </Stack>
                </Stack>
              </div>
              <div className="bg-white_A700 flex flex-col font-inter items-center justify-end sm:mt-[18px] md:mt-[24px] mt-[35px] sm:pt-[15px] md:pt-[48px] pt-[70px] w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                      <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body6"
                          >
                            Help
                          </Text>
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body6"
                          >
                            Shop
                          </Text>
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body6"
                          >
                            About
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                          <Text
                            className="font-medium text-gray_901 w-[auto]"
                            variant="body9"
                          >
                            FAQ
                          </Text>
                          <Text
                            className="font-medium text-gray_901 w-[auto]"
                            variant="body9"
                          >
                            PureV
                          </Text>
                          <Text
                            className="font-medium text-gray_901 w-[auto]"
                            variant="body9"
                          >
                            Magazine
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                          <Text
                            className="font-medium text-gray_901 w-[auto]"
                            variant="body9"
                          >
                            Review
                          </Text>
                          <Text
                            className="font-medium md:ml-[125px] ml-[182px] sm:ml-[96px] text-gray_901 w-[auto]"
                            variant="body9"
                          >
                            Gifts
                          </Text>
                          <Text
                            className="font-medium sm:ml-[107px] md:ml-[139px] ml-[202px] text-gray_901 w-[auto]"
                            variant="body9"
                          >
                            Press
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                        <Text
                          className="font-medium text-black_900 w-[auto]"
                          variant="body6"
                        >
                          Sign up for the newsletter
                        </Text>
                        <div className="bg-white_A700 border border-black_900 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] p-[3px] rounded-radius28 w-[100%]">
                          <Text
                            className="font-normal sm:ml-[23px] md:ml-[30px] ml-[44px] not-italic text-gray_600 w-[auto]"
                            variant="body9"
                          >
                            Enter your Email
                          </Text>
                          <Button
                            className="cursor-pointer font-normal min-w-[25%] mr-[1px] not-italic text-[18px] text-center text-white_A700 w-[max-content]"
                            shape="CircleBorder25"
                            variant="OutlineTeal800"
                          >
                            SIGN UP
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Stack className="h-[218px] mt-[10px] sm:mt-[5px] md:mt-[6px] relative w-[100%]">
                      <Text
                        className="absolute font-medium left-[24%] text-gray_901 top-[3%] w-[auto]"
                        variant="body9"
                      >
                        Travel set
                      </Text>
                      <Text
                        className="absolute font-medium left-[7%] text-gray_601 top-[38%] w-[auto]"
                        variant="body9"
                      >
                        Contact Us
                      </Text>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start sm:p-[3px] md:p-[4px] p-[6px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group18.png')",
                        }}
                      >
                        <div className="flex flex-col items-center justify-start sm:mb-[26px] md:mb-[34px] mb-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                          <div className="flex flex-col justify-start w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                              <Text
                                className="font-medium text-gray_901 w-[auto]"
                                variant="body9"
                              >
                                My Account
                              </Text>
                              <Text
                                className="font-medium sm:ml-[205px] md:ml-[264px] ml-[385px] text-gray_800 w-[auto]"
                                variant="body9"
                              >
                                Our Story
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                              <Text
                                className="font-medium text-gray_901 w-[auto]"
                                variant="body9"
                              >
                                Corporate
                              </Text>
                              <Text
                                className="font-medium md:ml-[107px] ml-[156px] sm:ml-[83px] text-gray_901 w-[auto]"
                                variant="body9"
                              >
                                Accesories
                              </Text>
                              <Text
                                className="font-medium md:ml-[101px] ml-[148px] sm:ml-[78px] text-gray_901 w-[auto]"
                                variant="body9"
                              >
                                Tech
                              </Text>
                            </div>
                            <Text
                              className="font-medium md:mt-[11px] mt-[16px] sm:mt-[8px] text-gray_901 w-[auto]"
                              variant="body9"
                            >
                              Contact Us
                            </Text>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[14px] md:mt-[18px] mt-[27px] w-[100%]">
                              <Text
                                className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                Copyright Arachnomesh 2022
                              </Text>
                              <Img
                                src="images/img_group1531.svg"
                                className="max-w-[100%] sm:ml-[163px] md:ml-[211px] ml-[307px] w-[13%]"
                                alt="Group1531"
                              />
                              <Text
                                className="font-medium sm:ml-[190px] md:ml-[246px] ml-[358px] mt-[10px] sm:mt-[5px] md:mt-[6px] text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                T&C
                              </Text>
                              <Text
                                className="font-medium sm:ml-[34px] md:ml-[44px] ml-[64px] mt-[10px] sm:mt-[5px] md:mt-[6px] text-white_A700 w-[auto]"
                                variant="body10"
                              >
                                Privacy Policy
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Stack>
        <div className="bg-white_A700 h-[1024px] sm:h-[546px] md:h-[705px] mt-[1024px] sm:mt-[545px] md:mt-[704px] w-[100%]"></div>
      </div>
    </>
  );
};

export default ScreenFivePage;
