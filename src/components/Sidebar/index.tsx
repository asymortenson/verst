import { Dropdown } from "components/Dropdown";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  scrollbar-width: none;
  ${tw`
  w-80
  flex
  flex-col
  sticky top-0 
  overflow-scroll
  h-[100vh]
  `}
`;

const Logo = styled.div`
  ${tw`
  m-auto
  my-7
  `}
`;

const DropdownMenuContainer = styled.ul`
  ${tw`
  divide-y
  -mt-2
  

  `}
`;

const IconContainer = styled.div`
  ${tw`
  w-12
  
  text-base
  `}
`;

export const Sidebar: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src="./assets/logos/voltech.png" />
      </Logo>
      <DropdownMenuContainer>
        <Dropdown>
          <IconContainer>
            <img src="./assets/icons/tractor.png" />
          </IconContainer>
          <span className="min-w-max">Новая техника</span>
        </Dropdown>
        <Dropdown>
          <IconContainer>
            <img src="./assets/icons/tractor.png" />
          </IconContainer>
          <span>Техника с наработкой</span>
        </Dropdown>
        <Dropdown>
          <IconContainer>
            <img src="./assets/icons/attached_equipment.png" />
          </IconContainer>
          <span>Навесное оборудование</span>
        </Dropdown>
        <Dropdown>
          <IconContainer>
            <img src="./assets/icons/car_engine.png" />
          </IconContainer>
          <span>Запасные части</span>
        </Dropdown>
        <Dropdown>
          <IconContainer>
            <img src="./assets/icons/technical_support.png" />
          </IconContainer>
          <span>Сервис</span>
        </Dropdown>
        <Dropdown>
          <IconContainer>
            <img src="./assets/icons/contacts.png" />
          </IconContainer>
          <span>Лизинг</span>
        </Dropdown>
        <Dropdown>
          <IconContainer>
            <img src="./assets/icons/agronomy.png" />
          </IconContainer>
          <span className="text-left">Система точного земледелия</span>
        </Dropdown>
        <Dropdown>
          <IconContainer>
            <img src="./assets/icons/promotion.png" />
          </IconContainer>
          <span>Акции</span>
        </Dropdown>
      </DropdownMenuContainer>
    </Container>
  );
};
