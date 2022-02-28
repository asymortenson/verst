import styled from "styled-components";
import tw from "twin.macro";

const WrapperComponent = styled.div`
  ${tw`
  xl:w-[70vw]
  xl:max-w-[1400px]
  xxl:w-[80vw]
    w-full

  px-3
  `}
`;

export const Wrapper: React.FC = ({ children }) => {
  return <WrapperComponent>{children}</WrapperComponent>;
};
