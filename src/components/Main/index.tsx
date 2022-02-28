import { Contacts } from "components/Contacts";
import { Hero } from "components/Hero";
import { Navbar } from "components/Navbar";
import { Partners } from "components/Partners";
import { Category } from "components/Category";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "components/Wrapper";
import { Links } from "components/Links";
import { Search } from "components/SearchBar";
import { Form } from "components/Form";

const Container = styled.div`
  ${tw`w-full  lg:mt-6
  `}
`;

const MenuToggle = styled.div`
  ${tw`px-3 py-3 ml-2  flex items-center border-2 border-secondary rounded-md border-opacity-60`}
`;

const Footer = styled.div`
  ${tw`w-[93%] mt-20 self-end h-[40rem] hidden lg:flex bg-cover bg-center bg-no-repeat
  justify-center
  items-center
  relative 
  before:w-full
  before:h-full
  before:absolute
  before:bg-[#424140]
  before:opacity-70
  before:z-[-1]
  z-10
  `};
`;

export const Main = () => {
  return (
    <Container>
      <Contacts />
      <Hero />
      <div className="flex justify-between my-2 lg:hidden">
        <MenuToggle>
          <img className="w-7" src="./assets/icons/hamburger.svg" />
          <span className="ml-2">Меню</span>
        </MenuToggle>
        <Search />
      </div>
      <Links mobile />
      <div className="flex flex-col items-center overflow-hidden">
        <Wrapper>
          <Navbar />
        </Wrapper>
        <Partners />
        <Wrapper>
          <Category />
        </Wrapper>
        <Footer className="bg-tractor">
          <Form />
        </Footer>
        <div className="bg-secondary hidden lg:block h-8 w-[93%] self-end"></div>
      </div>
    </Container>
  );
};
