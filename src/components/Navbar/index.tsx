import styled from "styled-components";
import tw from "twin.macro";

const NavbarContainer = styled.ul`
  ${tw`
flex
justify-between
flex-wrap
`}

  li::before {
    content: "⬝";
    font-size: 1rem;
    margin-right: 2rem;
  }
`;
const NavbarItem = styled.li`
  ${tw`
  text-left

  my-5
`}
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarItem className="first:before:list-none first:before:mr-0">
        <a href="#">О компании</a>
      </NavbarItem>
      <NavbarItem>
        <a href="#">Новости</a>
      </NavbarItem>
      <NavbarItem>
        <a href="#">Полезная информация</a>
      </NavbarItem>
      <NavbarItem>
        <a href="#">Партнёры</a>
      </NavbarItem>
      <NavbarItem>
        <a href="#">Политика конфенденсеальности</a>
      </NavbarItem>
      <NavbarItem>
        <a href="#">Контакты</a>
      </NavbarItem>
    </NavbarContainer>
  );
};
