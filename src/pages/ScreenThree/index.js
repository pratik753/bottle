import React from "react";

import { Stack, Text, Button, Img } from "components";
import { useNavigate } from "react-router-dom";

const ScreenThreePage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/screenfour");
  }
  function handleNavigate1() {
    navigate("/productdetailpagemockup");
  }

  return (
    <>
      <Stack
        className="common-pointer bg-white_A700 h-[1024px] mx-[auto] sm:pt-[15px] md:pt-[38px] pt-[56px] relative w-[100%]"
        onClick={handleNavigate}
      >
        <Stack className="absolute font-roboto h-[2053px] w-[100%]">
          <div className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[10%] top-[0] sm:w-[100%] w-[64%]">
            <div className="flex flex-col justify-start w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                <Text className="text-gray_900 w-[auto]" variant="body7">
                  Home
                </Text>
                <Text
                  className="sm:ml-[33px] md:ml-[42px] ml-[62px] text-gray_900_87 w-[auto]"
                  variant="body7"
                >
                  About
                </Text>
                <Text
                  className="sm:ml-[33px] md:ml-[43px] ml-[63px] text-gray_900_87 w-[auto]"
                  variant="body7"
                >
                  Bottles
                </Text>
                <Text
                  className="sm:ml-[33px] md:ml-[42px] ml-[62px] text-gray_900_87 w-[auto]"
                  variant="body7"
                >
                  About
                </Text>
                <Text
                  className="sm:ml-[33px] md:ml-[43px] ml-[63px] text-gray_900_87 w-[auto]"
                  variant="body7"
                >
                  Contact
                </Text>
                <Stack className="h-[40px] sm:ml-[14px] md:ml-[19px] ml-[28px] relative w-[16%]">
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
              <Stack className="font-inter h-[430px] sm:mt-[101px] md:mt-[131px] mt-[191px] relative sm:w-[100%] w-[74%]">
                <div className="absolute border-4 border-solid border-teal_900 flex flex-col sm:h-[230px] md:h-[296px] h-[430px] inset-x-[18%] items-center justify-end sm:px-[15px] md:px-[30px] px-[45px] rounded-radius50 sm:w-[229px] md:w-[295px] w-[430px]">
                  <Button
                    className="cursor-pointer font-normal min-w-[48%] sm:mt-[159px] md:mt-[206px] mt-[300px] not-italic text-[18px] text-bluegray_900 text-center w-[max-content]"
                    size="md"
                  >
                    KNOW MORE
                  </Button>
                </div>
                <div className="absolute bottom-[27%] flex flex-col items-center justify-start top-[23%] w-[100%]">
                  <Text
                    className="not-italic text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Self Cleaning bottle
                  </Text>
                  <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                    <Text
                      className="not-italic text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      In 60 Seconds
                    </Text>
                    <Text
                      className="font-normal sm:mt-[15px] md:mt-[20px] mt-[30px] not-italic text-bluegray_900 w-[auto]"
                      variant="body10"
                    >
                      Hit refresh with the intelligently clean bottle built for
                      adventure.
                    </Text>
                  </div>
                </div>
              </Stack>
              <Stack className="h-[642px] sm:ml-[127px] md:ml-[164px] ml-[239px] sm:mt-[19px] md:mt-[25px] mt-[37px] relative w-[21%]">
                <Img
                  src="images/img_fococlipping20_2.png"
                  className="absolute h-[628px] max-w-[100%] top-[2%] w-[100%]"
                  alt="fococlippingTwenty"
                />
                <Img
                  src="images/img_fococlipping20.png"
                  className="absolute h-[86px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[81%]"
                  alt="fococlippingTwenty One"
                />
              </Stack>
            </div>
          </div>
          <Stack className="absolute bg-white_A700 font-inter h-[1090px] w-[100%]">
            <Stack className="absolute h-[1034px] top-[0] w-[100%]">
              <div className="absolute bg-white_A700 h-[1024px] sm:h-[546px] md:h-[705px] inset-y-[0] w-[100%]"></div>
              <Stack className="absolute bg-gradient4  h-[1034px] sm:pr-[15px] md:pr-[257px] pr-[374px] sm:py-[199px] md:py-[257px] py-[374px] w-[100%]">
                <Stack className="absolute h-[23px] w-[6%]">
                  <Img
                    src="images/img_fococlipping20_23X85.png"
                    className="absolute h-[23px] max-w-[100%] w-[100%]"
                    alt="fococlippingTwenty Two"
                  />
                </Stack>
              </Stack>
            </Stack>
            <Text
              className="absolute bottom-[0] inset-x-[0] leading-[normal] sm:mx-[0] mx-[auto] text-center text-white_A700 sm:w-[100%] w-[43%]"
              as="h1"
              variant="h1"
            >
              A smart
              <br />
              way to sip
            </Text>
          </Stack>
        </Stack>
        <div className="absolute bg-white_A700 flex flex-col font-poppins items-center justify-end pl-[1px] w-[100%]">
          <div className="bg-gradient5  flex flex-col justify-end sm:pt-[20px] md:pt-[26px] pt-[38px] sm:px-[0] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1350px] md:ml-[9px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Stack className="h-[243px] md:mt-[119px] mt-[174px] sm:mt-[92px] relative w-[29%]">
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
                      <div className="absolute bottom-[7%] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[90%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                          <div className="flex flex-col justify-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                            <Img
                              src="images/img_music.svg"
                              className="max-w-[100%] sm:w-[100%] w-[68%]"
                              alt="music"
                            />
                            <Text
                              className="ml-[1px] sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-white_A700 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Austin Wade{" "}
                            </Text>
                            <Text
                              className="ml-[1px] not-italic text-white_A700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Athelete
                            </Text>
                          </div>
                          <Text
                            className="italic sm:mt-[24px] md:mt-[31px] mt-[46px] text-white_A700 w-[auto]"
                            variant="body13"
                          >
                            ADIDAS
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="absolute font-normal inset-x-[0] leading-[normal] sm:mx-[0] mx-[auto] not-italic text-white_A700 top-[27%] sm:w-[100%] w-[89%]"
                        variant="body16"
                      >
                        {`Say goodbye to your reusable bottles persistent funk — and hello to this Jetsons-worthy update.  My only regret is that I didn't here about this for my first 3 purchases.`}
                        <br />
                        <br />
                        They did a great job!!
                      </Text>
                    </Stack>
                  </Stack>
                  <Img
                    src="images/img_ellipse2.png"
                    className="absolute sm:h-[31px] md:h-[40px] h-[58px] left-[5%] rounded-radius50 top-[0] sm:w-[30px] md:w-[39px] w-[58px]"
                    alt="EllipseTwo"
                  />
                </Stack>
              </Stack>
              <Stack className="font-inter h-[543px] sm:ml-[45px] md:ml-[59px] ml-[86px] relative w-[39%]">
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
                      <div className="absolute bottom-[7%] flex flex-col inset-x-[0] justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[89%]">
                        <Img
                          src="images/img_music.svg"
                          className="max-w-[100%] w-[15%]"
                          alt="music One"
                        />
                        <Text
                          className="font-semibold italic sm:ml-[129px] md:ml-[167px] ml-[244px] sm:mt-[13px] md:mt-[17px] mt-[26px] text-white_A700 w-[auto]"
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
                        className="absolute inset-x-[0] leading-[normal] sm:mx-[0] mx-[auto] not-italic text-white_A700 top-[27%] sm:w-[100%] w-[89%]"
                        variant="body11"
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
                  className="absolute font-bold italic left-[21%] text-white_A700 top-[0] uppercase w-[auto]"
                  variant="body4"
                >
                  tESTIMONIALS
                </Text>
              </Stack>
              <Stack className="font-poppins h-[276px] sm:ml-[14px] md:ml-[19px] ml-[28px] md:mt-[123px] mt-[179px] sm:mt-[95px] relative w-[25%]">
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
                      <div className="absolute bottom-[7%] flex flex-col justify-start left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                        <Img
                          src="images/img_music.svg"
                          className="max-w-[100%] sm:mr-[131px] md:mr-[169px] mr-[246px] w-[14%]"
                          alt="music Two"
                        />
                        <Text
                          className="italic sm:ml-[138px] md:ml-[178px] ml-[260px] mt-[13px] sm:mt-[6px] md:mt-[8px] text-white_A700 w-[auto]"
                          variant="body13"
                        >
                          BBC
                        </Text>
                      </div>
                      <Text
                        className="absolute bottom-[7%] left-[4%] not-italic text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Photographer
                      </Text>
                      <Text
                        className="absolute font-normal inset-x-[0] leading-[normal] sm:mx-[0] mx-[auto] not-italic text-white_A700 top-[27%] sm:w-[100%] w-[89%]"
                        variant="body16"
                      >
                        {`Say goodbye to your reusable bottles persistent funk — and hello to this Jetsons-worthy update.  My only regret is that I didn't here about this for my first 3 purchases.`}
                        <br />
                        <br />
                        They did a great job!!
                      </Text>
                      <Text
                        className="absolute bottom-[11%] left-[4%] not-italic text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Sarah
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
            <div className="bg-white_A700 flex flex-col font-inter items-center justify-end sm:mt-[18px] md:mt-[24px] mt-[35px] sm:p-[15px] md:p-[35px] p-[51px] w-[100%]">
              <div className="flex flex-col items-center justify-start max-w-[1264px] ml-[auto] mr-[auto] md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
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
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                        <Text
                          className="font-medium text-gray_601 w-[auto]"
                          variant="body9"
                        >
                          FAQ
                        </Text>
                        <Text
                          className="font-medium sm:ml-[111px] md:ml-[143px] ml-[209px] text-gray_601 w-[auto]"
                          variant="body9"
                        >
                          LARQ Purevis
                        </Text>
                        <Text
                          className="font-medium ml-[126px] sm:ml-[67px] md:ml-[86px] text-gray_601 w-[auto]"
                          variant="body9"
                        >
                          Magazine
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                        <Text
                          className="font-medium text-gray_601 w-[auto]"
                          variant="body9"
                        >
                          Review
                        </Text>
                        <Text
                          className="font-medium md:ml-[125px] ml-[182px] sm:ml-[96px] text-gray_601 w-[auto]"
                          variant="body9"
                        >
                          Gifts
                        </Text>
                        <Text
                          className="font-medium sm:ml-[107px] md:ml-[139px] ml-[202px] text-gray_601 w-[auto]"
                          variant="body9"
                        >
                          Press
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                        <Text
                          className="font-medium text-gray_601 w-[auto]"
                          variant="body9"
                        >
                          My Account
                        </Text>
                        <Text
                          className="font-medium text-gray_601 w-[auto]"
                          variant="body9"
                        >
                          Travel sst
                        </Text>
                        <Text
                          className="font-medium text-gray_601 w-[auto]"
                          variant="body9"
                        >
                          Our Story
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
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
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                    <Text
                      className="font-medium text-gray_601 w-[auto]"
                      variant="body9"
                    >
                      Corporate
                    </Text>
                    <Text
                      className="font-medium md:ml-[107px] ml-[156px] sm:ml-[83px] text-gray_601 w-[auto]"
                      variant="body9"
                    >
                      Accesories
                    </Text>
                    <Text
                      className="font-medium md:ml-[101px] ml-[148px] sm:ml-[78px] text-gray_601 w-[auto]"
                      variant="body9"
                    >
                      Tech
                    </Text>
                  </div>
                  <Text
                    className="font-medium md:mt-[11px] mt-[16px] sm:mt-[8px] text-gray_601 w-[auto]"
                    variant="body9"
                  >
                    Contact Us
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[17px] md:mt-[22px] mt-[32px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-medium text-teal_800 w-[auto]"
                      variant="body10"
                    >
                      Copyright LARQ 2022
                    </Text>
                    <Img
                      src="images/img_group1528.svg"
                      className="max-w-[100%] sm:ml-[196px] md:ml-[253px] ml-[369px] w-[13%]"
                      alt="Group1528"
                    />
                    <Text
                      className="font-medium sm:ml-[190px] md:ml-[246px] ml-[358px] text-gray_601 w-[auto]"
                      variant="body10"
                    >
                      T&C
                    </Text>
                    <Text
                      className="font-medium sm:ml-[34px] md:ml-[44px] ml-[64px] text-gray_601 w-[auto]"
                      variant="body10"
                    >
                      Privacy Policy
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="absolute bottom-[5%] flex items-center justify-center mb-[47px] md:mb-[32px] min-w-[12%] sm:mb-[25px] text-center w-[max-content]"
          onClick={handleNavigate1}
          leftIcon={
            <Img
              src="images/img_cart.svg"
              className="mr-[8px] sm:mr-[4px] md:mr-[5px] text-center right-[1%] absolute"
              alt="cart"
            />
          }
          variant="FillTeal900"
        >
          <div className="common-pointer bg-transparent bottom-[0] cursor-pointer font-bold font-lato right-[0] text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
            Add to cart
          </div>
        </Button>
        <Text
          className="absolute font-black font-lato left-[10%] text-teal_900 top-[6%] w-[auto]"
          variant="body6"
        >
          ARACHNOMESH
        </Text>
      </Stack>
    </>
  );
};

export default ScreenThreePage;
