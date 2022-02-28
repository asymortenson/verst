import styled from "styled-components";
import tw from "twin.macro";

const LinksContainer = styled.ul`
  ${tw`
   lg:flex items-center
   display[none]
   
`}
`;

const LinksContainerForMobile = styled.ul`
  ${tw`
  flex
  border-t-[1px]
  text-xs
  py-5
  lg:hidden`}
`;

const LinkItem = styled.li`
  ${tw`
mx-2
text-[#a4a4a4]
cursor-pointer
`}
`;

export const Links: React.FC<{ mobile?: boolean }> = ({ mobile = false }) => {
  if (mobile) {
    return (
      <LinksContainerForMobile>
        <a href="#">
          <LinkItem>Главная → </LinkItem>
        </a>
        <a href="#">
          <LinkItem>По назначению → </LinkItem>
        </a>
        <a href="#">
          <LinkItem>Stoll → </LinkItem>
        </a>
        <a href="#">
          <LinkItem>CL655</LinkItem>
        </a>
      </LinksContainerForMobile>
    );
  }
  return (
    <LinksContainer>
      <a href="#">
        <LinkItem>Главная → </LinkItem>
      </a>
      <a href="#">
        <LinkItem>По назначению → </LinkItem>
      </a>
      <a href="#">
        <LinkItem>Stoll → </LinkItem>
      </a>
      <a href="#">
        <LinkItem>CL655</LinkItem>
      </a>
    </LinksContainer>
  );
};
