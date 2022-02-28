import styled from "styled-components";
import tw from "twin.macro";
import { Sidebar } from "components/Sidebar";
import { Main } from "components/Main";
import { Layout } from "components/Layout";
import { MobileNav } from "components/MobileHeader";

const FlexContainer = styled.div`
  ${tw`
  flex
  flex-col
  lg:flex-row
  `}
`;

export const App = () => {
  return (
    <Layout>
      <FlexContainer>
        <MobileNav />
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <Main />
      </FlexContainer>
    </Layout>
  );
};
