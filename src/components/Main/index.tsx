import { Contacts } from "components/Contacts";
import { Hero } from "components/Hero";
import { Navbar } from "components/Navbar";
import { Partners } from "components/Partners";
import { Stoll } from "components/Stoll";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`w-full   my-6
  `}
`;

export const Main = () => {
  return (
    <Container>
      <Contacts />
      <Hero />
      <div className="flex flex-col items-center">
        <div className="w-[70vw] max-w-[1440px]">
          <Navbar />
        </div>
        <Partners />
        <div className="w-[70vw] max-w-[1440px]">
          <Stoll />
        </div>
      </div>
    </Container>
  );
};
