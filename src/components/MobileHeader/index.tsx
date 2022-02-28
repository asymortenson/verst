import styled from "styled-components";
import tw from "twin.macro";

const NavContainer = styled.nav`
  ${tw`flex justify-between items-center lg:hidden`}
`;

const MenuToggle = styled.div`
  ${tw`border-r-[1px] border-opacity-25 cursor-pointer`};
  ${tw`px-4 py-4 `}
`;

const LogoContainer = styled.div``;

const CallIcon = styled.div`
  ${tw`px-4 py-4 bg-primary`}
`;

export const MobileNav = () => {
  return (
    <NavContainer role="navigation">
      <MenuToggle>
        <img className="w-5" src="./assets/icons/hamburger.svg" />
      </MenuToggle>
      <LogoContainer>
        <img src="./assets/logos/voltech_mobile.png" />
      </LogoContainer>
      <CallIcon>
        <img className="w-5" src="./assets/icons/phone-call.svg" />
      </CallIcon>
    </NavContainer>
  );
};
