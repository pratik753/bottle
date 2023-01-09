import React from "react";

import {
  Stack,
  Img,
  Text,
  Button,
  Radio,
  SelectBox,
  Line,
  List,
} from "components";

const ProductDetailPageMockupPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-lato items-center justify-start mx-[auto] pb-[2px] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[13px] sm:p-[15px] p-[19px] shadow-bs w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap max-w-[1223px] md:ml-[61px] ml-[auto] mr-[auto] mt-[3px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%] common-row-list">
                <ul className="flex flex-row items-start">
                  <li className="w-[auto] sm:w-[100%] sm:my-[10px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer hover:font-black font-black font-lato sm:text-[20px] md:text-[22px] text-[24px] text-teal_900"
                      rel="noreferrer"
                    >
                      ARACHNOMESH
                    </a>
                  </li>
                  <li className="w-[2%] mt-[1px] mb-[5px] ml-[6px] sm:ml-[3px] sm:w-[100%] sm:my-[10px] md:ml-[4px] md:mb-[3px] relative">
                    <Stack className="h-[20px] relative sm:w-[10px] md:w-[13px] w-[20px]">
                      <Img
                        src="images/img_search.svg"
                        className="absolute h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="search"
                      />
                    </Stack>
                  </li>
                  <li className="w-[auto] mt-[1px] mb-[4px] ml-[646px] sm:ml-[344px] sm:w-[100%] sm:my-[10px] md:ml-[444px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer hover:font-black font-inter font-medium text-[18px] text-black_901 hover:text-teal_900"
                      rel="noreferrer"
                    >
                      Products
                    </a>
                  </li>
                  <li className="w-[auto] mt-[1px] mb-[4px] ml-[26px] sm:ml-[13px] sm:w-[100%] sm:my-[10px] md:ml-[17px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer hover:font-black font-inter font-medium text-[18px] text-black_901 hover:text-teal_900"
                      rel="noreferrer"
                    >
                      Technology
                    </a>
                  </li>
                  <li className="w-[2%] mt-[5px] mb-[1px] ml-[26px] sm:ml-[13px] sm:w-[100%] sm:my-[10px] md:ml-[17px] md:mt-[3px] max-w-[100%]">
                    <Img
                      src="images/img_user.svg"
                      className="max-w-[100%]"
                      alt="user"
                    />
                  </li>
                  <li className="w-[2%] mt-[5px] mb-[1px] ml-[40px] sm:ml-[21px] sm:w-[100%] sm:my-[10px] md:ml-[27px] md:mt-[3px] max-w-[100%]">
                    <Img
                      src="images/img_favorite.svg"
                      className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="favorite"
                    />
                  </li>
                  <li className="w-[2%] mt-[5px] mb-[1px] ml-[30px] sm:ml-[15px] sm:w-[100%] sm:my-[10px] md:ml-[20px] md:mt-[3px] max-w-[100%]">
                    <Img
                      src="images/img_cart_20X20.svg"
                      className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="cart"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] w-[100%]">
            <Stack className="h-[1159px] max-w-[1234px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
              <Stack className="absolute h-[1152px] top-[1%] w-[100%]">
                <div className="absolute bg-light_blue_800_33 border border-bluegray_802 border-solid flex flex-col sm:h-[320px] md:h-[413px] h-[600px] items-center justify-start left-[0] sm:p-[15px] md:px-[57px] px-[84px] rounded-radius16 top-[14%] sm:w-[319px] md:w-[412px] w-[600px]">
                  <Stack className="h-[424px] sm:mb-[4px] md:mb-[5px] mb-[8px] relative rotate-[180deg] w-[30%]">
                    <Img
                      src="images/img_fococlipping20_414X126.png"
                      className="absolute h-[414px] max-w-[100%] top-[2%] w-[100%]"
                      alt="fococlippingTwenty"
                    />
                    <Img
                      src="images/img_fococlipping20.png"
                      className="absolute h-[56px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[81%]"
                      alt="fococlippingTwenty One"
                    />
                  </Stack>
                </div>
                <div className="absolute flex flex-col items-center justify-start left-[0] sm:px-[0] w-[100%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="sm:ml-[4px] md:ml-[5px] ml-[8px] text-gray_902 w-[auto]"
                      variant="body3"
                    >
                      {" "}
                      Bottle Filtered
                    </Text>
                    <div className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                      <Stack className="h-[961px] relative w-[100%]">
                        <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-center justify-start sm:mx-[0] my-[auto] sm:px-[0] right-[0] sm:w-[100%] w-[82%]">
                          <div className="flex flex-col items-end justify-start w-[100%]">
                            <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                                <Img
                                  src="images/img_star.svg"
                                  className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                                  alt="star"
                                />
                                <Img
                                  src="images/img_star.svg"
                                  className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                                  alt="star One"
                                />
                                <Img
                                  src="images/img_star.svg"
                                  className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                                  alt="star Two"
                                />
                                <Img
                                  src="images/img_star.svg"
                                  className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                                  alt="star Three"
                                />
                                <Img
                                  src="images/img_star_14X14.svg"
                                  className="md:h-[10px] h-[14px] sm:h-[8px] max-w-[100%] w-[14px] sm:w-[7px] md:w-[9px]"
                                  alt="star Four"
                                />
                              </div>
                              <Text
                                className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_602 w-[auto]"
                                variant="body11"
                              >
                                12 reviews
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start sm:mt-[25px] md:mt-[33px] mt-[48px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                              <div className="flex flex-col justify-start w-[100%]">
                                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                                    <Text
                                      className="font-bold text-teal_900 w-[auto]"
                                      variant="body6"
                                    >
                                      $150.00
                                    </Text>
                                    <Text
                                      className="font-normal line-through mt-[4px] not-italic text-gray_602 w-[auto]"
                                      variant="body9"
                                    >
                                      $300.00
                                    </Text>
                                  </div>
                                  <Button
                                    className="cursor-pointer font-bold min-w-[24%] ml-[10px] sm:ml-[5px] md:ml-[6px] my-[1px] text-[16px] text-center text-white_A700 w-[max-content]"
                                    size="sm"
                                    variant="FillRed500"
                                  >
                                    -50%
                                  </Button>
                                </div>
                                <Stack className="h-[150px] sm:mt-[14px] md:mt-[18px] mt-[27px] relative w-[100%]">
                                  <div className="absolute bottom-[0] flex flex-col items-center justify-start w-[100%]">
                                    <div className="flex flex-col items-end justify-start w-[100%]">
                                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                                        <Radio
                                          value="Insulated"
                                          className="font-bold text-[14px] text-cyan_902 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                                          checked={true}
                                          name="Insulated"
                                          label="Insulated"
                                        ></Radio>
                                        <Button
                                          className="cursor-pointer font-bold min-w-[45%] sm:ml-[20px] md:ml-[26px] ml-[38px] text-[14px] text-bluegray_803 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                                          variant="OutlineBlack90087"
                                        >
                                          Non-Insulated
                                        </Button>
                                      </div>
                                      <div className="flex flex-col justify-start mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                                        <Text
                                          className="not-italic text-bluegray_803 w-[auto]"
                                          variant="body11"
                                        >
                                          Size
                                        </Text>
                                        <SelectBox
                                          className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-[14px] text-gray_501 w-[100%]"
                                          placeholderClassName="text-gray_501"
                                          name="ozCounter"
                                          placeholder="17 oz"
                                          isSearchable={false}
                                          isMulti={false}
                                          indicator={
                                            <Img
                                              src="images/img_arrowdown.svg"
                                              className="w-[16px] h-[16px] mr-[16px] sm:mr-[8px] sm:h-[9px] sm:w-[8px] md:mr-[11px] md:h-[12px] md:w-[11px] max-w-[100%]"
                                              alt="arrow_down"
                                            />
                                          }
                                        ></SelectBox>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-col justify-start left-[0] sm:mx-[0] sm:px-[0] top-[0] sm:w-[100%] w-[27%]">
                                    <Text
                                      className="not-italic text-bluegray_803 w-[auto]"
                                      variant="body11"
                                    >
                                      Color
                                    </Text>
                                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                                      <Img
                                        src="images/img_car.svg"
                                        className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[64%]"
                                        alt="car"
                                      />
                                      <Text
                                        className="flex-grow not-italic text-gray_501"
                                        variant="body11"
                                      >
                                        Black
                                      </Text>
                                    </div>
                                  </div>
                                </Stack>
                              </div>
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                                <SelectBox
                                  className="font-normal sm:mx-[0] not-italic text-[14px] text-bluegray_803 sm:w-[100%] w-[16%]"
                                  placeholderClassName="text-bluegray_803"
                                  name="inputdefault"
                                  placeholder="1"
                                  isSearchable={false}
                                  isMulti={false}
                                ></SelectBox>
                                <Button
                                  className="flex items-center justify-center min-w-[47%] text-center w-[max-content]"
                                  leftIcon={
                                    <Img
                                      src="images/img_cart.svg"
                                      className="mr-[8px] sm:mr-[4px] md:mr-[5px] text-center"
                                      alt="cart"
                                    />
                                  }
                                  variant="FillTeal900"
                                >
                                  <div className="bg-transparent cursor-pointer font-bold text-[14px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                                    Add to cart
                                  </div>
                                </Button>
                                <Button
                                  className="flex items-center justify-center min-w-[30%] text-center w-[max-content]"
                                  leftIcon={
                                    <Img
                                      src="images/img_favorite_16X16.svg"
                                      className="mr-[8px] sm:mr-[4px] md:mr-[5px] text-center"
                                      alt="favorite"
                                    />
                                  }
                                  variant="OutlineTeal900"
                                >
                                  <div className="bg-transparent cursor-pointer font-bold text-[14px] text-teal_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                                    Favourite
                                  </div>
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]">
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mb-[1px] sm:mt-[219px] md:mt-[284px] mt-[413px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                                <Text
                                  className="font-bold text-gray_902 w-[auto]"
                                  variant="body10"
                                >
                                  Share:
                                </Text>
                                <Img
                                  src="images/img_facebook.svg"
                                  className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="facebook"
                                />
                                <Img
                                  src="images/img_twitter.svg"
                                  className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="twitter"
                                />
                                <Img
                                  src="images/img_settings.svg"
                                  className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                  alt="settings"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                                <div className="flex flex-col items-end justify-start w-[100%]">
                                  <div className="flex flex-col justify-start sm:mx-[0] md:pr-[4px] pr-[6px] sm:pt-[3px] md:pt-[4px] pt-[6px] sm:px-[0] sm:w-[100%] w-[94%]">
                                    <Text
                                      className="font-bold text-gray_902 w-[auto]"
                                      variant="body10"
                                    >
                                      Delivery
                                    </Text>
                                  </div>
                                  <div className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                                    <Text
                                      className="not-italic text-bluegray_803 w-[auto]"
                                      variant="body11"
                                    >
                                      <span className="text-bluegray_803 text-[14px] font-lato font-normal">
                                        Free standard shipping on orders{" "}
                                      </span>
                                      <span className="text-bluegray_803 text-[14px] font-lato font-bold">
                                        over $35
                                      </span>
                                      <span className="text-bluegray_803 text-[14px] font-lato font-normal">
                                        {" "}
                                        before tax, plus free returns.
                                      </span>
                                    </Text>
                                    <Stack className="h-[153px] sm:mt-[12px] md:mt-[16px] mt-[24px] relative w-[100%]">
                                      <div className="absolute flex flex-col inset-y-[20%] items-center justify-start w-[100%]">
                                        <div className="flex flex-col items-center justify-start w-[100%]">
                                          <Line className="bg-gradient9  h-[1px] w-[100%]" />
                                          <Line className="bg-gradient9  h-[1px] sm:mt-[23px] md:mt-[30px] mt-[44px] w-[100%]" />
                                          <Line className="bg-gradient9  h-[1px] sm:mt-[23px] md:mt-[30px] mt-[44px] w-[100%]" />
                                        </div>
                                      </div>
                                      <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap inset-x-[4%] items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                                        <List
                                          className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[79%]"
                                          orientation="horizontal"
                                        >
                                          <div className="flex flex-col justify-start pr-[3px] pt-[3px] sm:px-[0] w-[100%]">
                                            <Text
                                              className="not-italic text-gray_602 tracking-ls1 w-[auto]"
                                              variant="body14"
                                            >
                                              TYPE
                                            </Text>
                                            <Text
                                              className="sm:mt-[16px] md:mt-[21px] mt-[31px] not-italic text-bluegray_803 w-[auto]"
                                              variant="body11"
                                            >
                                              Standard delivery
                                            </Text>
                                            <Text
                                              className="sm:mt-[15px] md:mt-[19px] mt-[29px] not-italic text-bluegray_803 w-[auto]"
                                              variant="body11"
                                            >
                                              Express delivery
                                            </Text>
                                            <Text
                                              className="sm:mt-[15px] md:mt-[19px] mt-[29px] not-italic text-bluegray_803 w-[auto]"
                                              variant="body11"
                                            >
                                              Pick up in store
                                            </Text>
                                          </div>
                                          <div className="flex flex-col justify-start pr-[3px] pt-[3px] sm:px-[0] w-[100%]">
                                            <Text
                                              className="not-italic text-gray_602 tracking-ls1 w-[auto]"
                                              variant="body14"
                                            >
                                              HOW LONG
                                            </Text>
                                            <Text
                                              className="sm:mt-[16px] md:mt-[21px] mt-[31px] not-italic text-bluegray_803 w-[auto]"
                                              variant="body11"
                                            >
                                              1-4 business days
                                            </Text>
                                            <Text
                                              className="sm:mt-[15px] md:mt-[19px] mt-[29px] not-italic text-bluegray_803 w-[auto]"
                                              variant="body11"
                                            >
                                              1 business day
                                            </Text>
                                            <Text
                                              className="sm:mt-[15px] md:mt-[19px] mt-[29px] not-italic text-bluegray_803 w-[auto]"
                                              variant="body11"
                                            >
                                              1-3 business days
                                            </Text>
                                          </div>
                                        </List>
                                        <div className="flex flex-col sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[18%]">
                                          <Text
                                            className="mt-[1px] not-italic text-gray_602 tracking-ls1 w-[auto]"
                                            variant="body14"
                                          >
                                            HOW MUCH
                                          </Text>
                                          <Text
                                            className="sm:mt-[15px] md:mt-[20px] mt-[30px] not-italic text-bluegray_803 w-[auto]"
                                            variant="body11"
                                          >
                                            $4.50
                                          </Text>
                                          <Text
                                            className="sm:mt-[14px] md:mt-[19px] mt-[28px] not-italic text-bluegray_803 w-[auto]"
                                            variant="body11"
                                          >
                                            $10.00
                                          </Text>
                                          <Text
                                            className="sm:mt-[14px] md:mt-[19px] mt-[28px] not-italic text-bluegray_803 w-[auto]"
                                            variant="body11"
                                          >
                                            Free
                                          </Text>
                                        </div>
                                      </div>
                                    </Stack>
                                  </div>
                                </div>
                                <Line className="bg-indigo_50 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                                <div className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[19px] w-[100%]">
                                  <div className="flex flex-col justify-end md:ml-[22px] ml-[32px] sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[94%]">
                                    <Text
                                      className="font-bold mt-[1px] text-gray_902 w-[auto]"
                                      variant="body10"
                                    >
                                      Return
                                    </Text>
                                  </div>
                                  <div className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                                    <Text
                                      className="not-italic text-bluegray_803 w-[auto]"
                                      variant="body11"
                                    >
                                      <span className="text-bluegray_803 text-[14px] font-lato font-normal">
                                        You have{" "}
                                      </span>
                                      <span className="text-bluegray_803 text-[14px] font-lato font-bold">
                                        15 days
                                      </span>
                                      <span className="text-bluegray_803 text-[14px] font-lato font-normal">
                                        {" "}
                                        to return the item(s) using any of the
                                        following methods:
                                      </span>
                                    </Text>
                                    <div className="flex flex-col justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[95%]">
                                        <div className="bg-cyan_902 md:h-[3px] sm:h-[3px] h-[4px] sm:my-[2px] md:my-[3px] my-[5px] rounded-radius50 md:w-[2px] sm:w-[2px] w-[4px]"></div>
                                        <Text
                                          className="md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[1px] not-italic text-bluegray_803 w-[auto]"
                                          variant="body11"
                                        >
                                          Free store return
                                        </Text>
                                      </div>
                                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[4px] md:mt-[6px] mt-[9px] w-[100%]">
                                        <div className="bg-cyan_902 md:h-[3px] sm:h-[3px] h-[4px] sm:mb-[4px] md:mb-[5px] mb-[8px] mt-[3px] rounded-radius50 md:w-[2px] sm:w-[2px] w-[4px]"></div>
                                        <Text
                                          className="md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-bluegray_803 w-[auto]"
                                          variant="body11"
                                        >
                                          Free returns via USPS Dropoff Service
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Line className="bg-indigo_50 h-[1px] sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]" />
                              </div>
                            </div>
                            <Img
                              src="images/img_paymentmethods.svg"
                              className="max-w-[100%] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:w-[100%] w-[53%]"
                              alt="paymentmethods"
                            />
                          </div>
                        </div>
                        <div className="absolute bottom-[14%] flex flex-col items-center justify-start left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                              <Button
                                className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                                size="smIcn"
                                variant="icbFillWhiteA70087"
                              >
                                <Img
                                  src="images/img_arrowleft.svg"
                                  className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                                  alt="arrowleft"
                                />
                              </Button>
                              <Button
                                className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                                size="smIcn"
                                variant="icbFillWhiteA70087"
                              >
                                <Img
                                  src="images/img_arrowright.svg"
                                  className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                                  alt="arrowright"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[157px] md:mt-[203px] mt-[296px] w-[100%]">
                              <Stack className="bg-gray_102 h-[104px] outline outline-[1px] outline-gray_103 p-[11px] sm:p-[5px] md:p-[7px] relative rounded-radius4 w-[104px] sm:w-[55px] md:w-[71px]">
                                <Img
                                  src="images/img_fococlipping20_81X24.png"
                                  className="absolute h-[81px] inset-[0] justify-center m-[auto] max-w-[100%] w-[24%]"
                                  alt="fococlippingTwenty Two"
                                />
                              </Stack>
                              <Stack className="bg-gray_102 h-[104px] outline outline-[1px] outline-gray_103 md:px-[11px] sm:px-[15px] px-[17px] relative rounded-radius4 w-[104px] sm:w-[55px] md:w-[71px]">
                                <Img
                                  src="images/img_fococlipping20_104X70.png"
                                  className="absolute h-[104px] max-w-[100%] sm:w-[100%] w-[68%]"
                                  alt="fococlippingTwenty Three"
                                />
                              </Stack>
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                                <Stack className="bg-gray_102 h-[104px] outline outline-[1px] outline-gray_103 relative rounded-radius4 w-[104px] sm:w-[55px] md:w-[71px]">
                                  <Img
                                    src="images/img_fococlipping20_104X104.png"
                                    className="absolute h-[104px] max-w-[100%] w-[104px] sm:w-[55px] md:w-[71px]"
                                    alt="fococlippingTwenty Four"
                                  />
                                </Stack>
                                <Img
                                  src="images/img_fococlipping20_3.png"
                                  className="h-[104px] sm:h-[56px] md:h-[72px] max-w-[100%] md:ml-[10px] ml-[15px] sm:ml-[7px] w-[104px] sm:w-[55px] md:w-[71px]"
                                  alt="fococlippingTwenty Five"
                                />
                              </div>
                              <Stack className="bg-gray_900_90 h-[104px] sm:p-[3px] md:p-[4px] p-[7px] relative rounded-radius4 w-[104px] sm:w-[55px] md:w-[71px]">
                                <Stack className="absolute h-[90px] inset-[0] justify-center m-[auto] w-[25%]">
                                  <Img
                                    src="images/img_fococlipping20_88X26.png"
                                    className="absolute h-[88px] max-w-[100%] top-[1%] w-[100%]"
                                    alt="fococlippingTwenty Six"
                                  />
                                  <Img
                                    src="images/img_fococlipping20.png"
                                    className="absolute h-[12px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[81%]"
                                    alt="fococlippingTwenty Seven"
                                  />
                                </Stack>
                                <Img
                                  src="images/img_play.svg"
                                  className="absolute h-[32px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                                  alt="play"
                                />
                              </Stack>
                            </div>
                          </div>
                        </div>
                        <Line className="absolute bg-indigo_50 h-[1px] top-[7%] w-[100%]" />
                        <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                          <Button
                            className="cursor-pointer font-bold min-w-[31%] text-[16px] text-center text-teal_900 w-[max-content]"
                            variant="OutlineTeal900"
                          >
                            General info
                          </Button>
                          <div className="flex flex-col items-center sm:mx-[0] p-[14px] md:p-[9px] sm:px-[0] sm:py-[7px] rounded-radius4 sm:w-[100%] w-[36%]">
                            <Text
                              className="font-bold mt-[1px] text-gray_501 w-[auto]"
                              variant="body10"
                            >
                              Product details
                            </Text>
                          </div>
                          <div className="flex flex-col items-center sm:mx-[0] p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] rounded-radius4 sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                              <Text
                                className="font-bold mt-[2px] text-gray_501 w-[auto]"
                                variant="body10"
                              >
                                Reviews{" "}
                              </Text>
                              <Text
                                className="font-black ml-[4px] text-gray_501 w-[auto]"
                                variant="body16"
                              >
                                12
                              </Text>
                            </div>
                          </div>
                        </div>
                      </Stack>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[25px] md:mt-[33px] mt-[48px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                        <Text
                          className="lowercase sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_902 w-[auto]"
                          variant="body3"
                        >
                          RECOMMENDATIONS
                        </Text>
                        <div className="flex flex-col justify-end sm:mb-[3px] md:mb-[4px] mb-[7px] md:ml-[3px] ml-[5px] sm:mx-[0] sm:pl-[0] md:pr-[12px] sm:pr-[15px] pr-[18px] md:pt-[12px] pt-[18px] sm:pt-[9px] sm:w-[100%] w-[9%]">
                          <Text
                            className="mt-[11px] sm:mt-[5px] md:mt-[7px] text-gray_902 w-[auto]"
                            variant="body3"
                          >
                            _
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Stack>
              <div className="absolute flex flex-col justify-start left-[26%] sm:mx-[0] sm:pl-[0] md:pr-[12px] sm:pr-[15px] pr-[18px] md:pt-[12px] pt-[18px] sm:pt-[9px] top-[0] sm:w-[100%] w-[3%]">
                <Text
                  className="mt-[11px] sm:mt-[5px] md:mt-[7px] text-gray_902 w-[auto]"
                  variant="body3"
                >
                  _
                </Text>
              </div>
            </Stack>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1229px] ml-[auto] mr-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Stack className="bg-light_blue_900_33 border border-solid border-white_A700 h-[380px] sm:p-[15px] md:p-[35px] p-[52px] relative rounded-radius32 sm:w-[202px] md:w-[261px] w-[380px]">
                <Img
                  src="images/img_fococlipping20_274X79.png"
                  className="absolute h-[274px] inset-[0] justify-center m-[auto] max-w-[100%] w-[21%]"
                  alt="fococlippingTwenty Eight"
                />
              </Stack>
              <Stack className="bg-light_blue_900_33 border border-solid border-white_A700 h-[380px] sm:ml-[23px] md:ml-[30px] ml-[44px] sm:p-[15px] md:p-[24px] p-[36px] relative rounded-radius32 sm:w-[202px] md:w-[261px] w-[380px]">
                <Img
                  src="images/img_fococlipping20_293X84.png"
                  className="absolute h-[293px] inset-[0] justify-center m-[auto] max-w-[100%] w-[23%]"
                  alt="fococlippingTwenty Nine"
                />
              </Stack>
              <Stack className="bg-light_blue_900_33 border border-solid border-white_A700 h-[380px] sm:ml-[23px] md:ml-[30px] ml-[45px] sm:p-[15px] md:p-[30px] p-[45px] relative rounded-radius32 sm:w-[202px] md:w-[261px] w-[380px]">
                <Img
                  src="images/img_larqpitcherpw.png"
                  className="absolute h-[278px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[148px] md:w-[191px] w-[278px]"
                  alt="LARQPitcherPW"
                />
              </Stack>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1035px] ml-[auto] mr-[auto] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-black text-teal_900 w-[auto]"
                variant="body4"
              >
                Monaco Green
              </Text>
              <Text
                className="font-black sm:ml-[111px] md:ml-[144px] ml-[210px] text-teal_900 w-[auto]"
                variant="body4"
              >
                Obsidian Pearl
              </Text>
              <Text
                className="font-black sm:ml-[127px] md:ml-[164px] ml-[239px] text-teal_900 w-[auto]"
                variant="body4"
              >
                Pure Snow
              </Text>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[908px] ml-[auto] mr-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-normal mt-[1px] not-italic text-gray_902 w-[auto]"
                variant="body6"
              >
                PureV
              </Text>
              <Text
                className="font-normal not-italic text-gray_902 w-[auto]"
                variant="body6"
              >
                FilterV
              </Text>
              <Text
                className="font-normal mt-[2px] not-italic text-gray_902 w-[auto]"
                variant="body6"
              >
                JugV
              </Text>
            </div>
            <footer className="bg-white_A700 font-inter sm:mt-[32px] md:mt-[41px] mt-[61px] w-[100%]">
              <div className="bg-gradient  flex flex-col items-center justify-start max-w-[1440px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
                <div className="bg-white_A700 border border-solid border-teal_900 flex flex-col items-center justify-end sm:pt-[15px] md:pt-[48px] pt-[70px] w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                      <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%] common-column-list">
                        <ul className="flex flex-col">
                          <li className="w-[99%] sm:w-[100%] sm:mx-[0] sm:px-[0] flex-row flex">
                            <div className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between">
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
                          </li>
                          <li className="w-[100%] mt-[20px] sm:mt-[10px] md:mt-[13px] flex-row flex">
                            <div className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between">
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
                          </li>
                          <li className="w-[94%] mt-[16px] sm:mt-[8px] sm:w-[100%] sm:mx-[0] sm:px-[0] md:mt-[11px] flex-row flex">
                            <div className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center">
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
                          </li>
                        </ul>
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
                        <div className="flex flex-col items-center justify-start sm:mb-[22px] md:mb-[29px] mb-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                          <div className="flex flex-col justify-start w-[100%] common-column-list">
                            <ul className="flex flex-col">
                              <li className="w-[46%] sm:w-[100%] sm:mx-[0] sm:px-[0] flex-row flex">
                                <div className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center">
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
                              </li>
                              <li className="w-[43%] mt-[16px] sm:mt-[8px] sm:w-[100%] sm:mx-[0] sm:px-[0] md:mt-[11px] flex-row flex">
                                <div className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center">
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
                              </li>
                              <li className="w-[auto] mt-[16px] sm:mt-[8px] md:mt-[11px]">
                                <a
                                  href={"javascript:"}
                                  className="cursor-pointer font-medium text-[18px] text-gray_901"
                                  rel="noreferrer"
                                >
                                  Contact Us
                                </a>
                              </li>
                              <li className="w-[100%] mt-[34px] sm:mt-[18px] md:mt-[23px] flex-row flex">
                                <div className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap items-start">
                                  <Text
                                    className="font-medium mt-[3px] text-white_A700 w-[auto]"
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
                                    className="font-medium sm:ml-[190px] md:ml-[246px] ml-[358px] mt-[3px] text-white_A700 w-[auto]"
                                    variant="body10"
                                  >
                                    T&C
                                  </Text>
                                  <Text
                                    className="font-medium sm:ml-[34px] md:ml-[44px] ml-[64px] mt-[3px] text-white_A700 w-[auto]"
                                    variant="body10"
                                  >
                                    Privacy Policy
                                  </Text>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Stack>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPageMockupPage;
