import React, { ReactChildren, ReactChild } from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface WrapperProps {
  children: ReactChild | ReactChildren;
}

const LayoutComponent = styled.div`
  ${tw`
  m-auto  
  max-w-[1920px]
  font-gotham
  `}
`;

export const Layout: React.FC<WrapperProps> = ({ children }) => {
  return <LayoutComponent>{children}</LayoutComponent>;
};
