import React, { ReactChildren, ReactChild } from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface WrapperProps {
  children: ReactChild | ReactChildren;
}

const WrapperComponent = styled.div`
  ${tw`
  m-auto  
  max-w-[1920px]
  font-gotham
  `}
`;

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <WrapperComponent>{children}</WrapperComponent>;
};
