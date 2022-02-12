import { Wrapper } from "components/Wrapper";
import styled from "styled-components";
import tw from "twin.macro";
import { Sidebar } from "components/Sidebar";
import { Main } from "components/Main";

const FlexContainer = styled.div`
  ${tw`
  flex
  `}
`;

export const App = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <div>
          <Sidebar />
        </div>
        <Main />
      </FlexContainer>
    </Wrapper>
  );
};
