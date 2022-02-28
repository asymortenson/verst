import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ButtonContainer = styled.button`
  ${tw`bg-primary  rounded-md  text-white hover:bg-[rgba(140, 40, 54, 100%)]`}
`;

const ButtonForCategory = styled.button`
  ${tw`
  lg:bg-[#dcdcdc]
  lg:text-secondary
  bg-primary
  text-white
  hover:bg-[#dcdcdc]
  hover:text-secondary
  mr-2
  last:mr-0
  leading-5
  w-full
  px-2
  h-[3rem]
  lg:h-[4rem]
  lg:hover:text-white
  lg:hover:bg-primary
  font-bold
  uppercase

  `}
`;

const ButtonForForm = styled.button`
  ${tw`
  px-14
  py-4
  absolute
  -bottom-7
  text-lg
  w-[14rem]
  right-0
  left-0
  ml-auto
  mr-auto
  bg-accent
  rounded-lg
  font-bold
  text-secondary
  `}
`;

const ShowMore = styled.button`
  ${tw`bg-white text-secondary w-[70%] font-weight[600] mt-7 px-5 py-5 border-accent border-[2px] border-opacity-50 rounded-md`}
`;

export const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  theme?: string;
}> = ({ children, className, theme = "default" }) => {
  if (theme === "category") {
    return <ButtonForCategory>{children}</ButtonForCategory>;
  }

  if (theme === "form") {
    return <ButtonForForm type="submit">{children}</ButtonForForm>;
  }

  if (theme === "showMore") {
    return <ShowMore>{children}</ShowMore>;
  }
  return <ButtonContainer className={className}>{children}</ButtonContainer>;
};
