import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ButtonContainer = styled.button`
  ${tw`bg-primary  rounded-md  text-white hover:bg-[rgba(140, 40, 54, 100%)]`}
`;

const ButtonForStoll = styled.button`
  ${tw`
  bg-[#dcdcdc]
  text-secondary

  mr-2
  last:mr-0
  w-full
  h-14
  hover:text-white
  hover:bg-primary
  font-bold
  uppercase

  `}
`;

export const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <ButtonContainer className={className}>{children}</ButtonContainer>;
};

export const ButtonStoll: React.FC = ({ children }) => {
  return <ButtonForStoll>{children}</ButtonForStoll>;
};
