import { Search } from "components/SearchBar";
import styled from "styled-components";
import tw from "twin.macro";

const ContactsContainer = styled.ul`
  ${tw`display[none] lg:flex flex-row items-center lg:max-w-[70vw] xxl:max-w-[80vw]  justify-between ml-4 xl:first:ml-16 `}
`;

const ContactsItem = styled.li`
  ${tw`
  flex
  flex-col
  text-xs
  white-space[nowrap]
  mx-2
  w-full
  xl:w-auto
  xxl:text-[16px]
  `}
`;

const PhoneItem = styled.div`
  ${tw` flex
  xxl:mt-2
  ml-24

  
  flex-col`}
`;

const AccentText = styled.span`
  ${tw`
  text-accent
  `}
`;
const AddressText = styled.span``;
const EmailText = styled.a``;
const PhoneText = styled.a`
  ${tw`
  text-sm
  font-bold 
  xxl:text-xl 
  lg:mr-14`}
`;

export const Contacts: React.FC = () => {
  return (
    <ContactsContainer>
      <ContactsItem>
        <AccentText>Наш адрес:</AccentText>
        <AddressText>Вологда, ул.Гагарина, д.91, оф. 3</AddressText>
      </ContactsItem>
      <ContactsItem>
        <AccentText>Пишите:</AccentText>
        <EmailText>office@voltekh</EmailText>
      </ContactsItem>
      <ContactsItem>
        <div className="flex">
          <PhoneItem>
            <AccentText>Звоните:</AccentText>
            <PhoneText>8 (8172) 707-999</PhoneText>
          </PhoneItem>
        </div>
      </ContactsItem>
      <Search />
    </ContactsContainer>
  );
};
