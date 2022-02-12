import styled from "styled-components";
import tw from "twin.macro";

const ContactsContainer = styled.ul`
  ${tw`flex flex-row justify-between ml-4 xl:first:ml-16 `}
`;

const ContactsItem = styled.li`
  ${tw`
  flex
  flex-col
  text-xs
  mx-2
  w-full
  xl:w-auto
  xl:mx-0
  xl:text-[16px]
  `}
`;

const PhoneItem = styled.div`
  ${tw` flex
  
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
  xl:text-2xl 
  lg:mr-14`}
`;

const SearchBar = styled.div`
  ${tw`
  w-[190px]
  ml-4
  xl:w-[350px]
  flex
  mr-8
  h-full
  items-center
  relative
  justify-center
  `}
`;

const SearchInput = styled.input`
  ${tw`
    w-full
    border-[1px]
    outline-none

    pl-5
    placeholder:font-normal
    h-14
    rounded-full

  `}
`;

const IconContainer = styled.div`
  ${tw`
  bg-secondary
  right-0
  absolute
  w-[3.1rem]
  flex
  cursor-pointer
  hover:bg-gray-500
  justify-center
  h-[3.1rem]
  rounded-full
  `}
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
          <SearchBar>
            <SearchInput placeholder="Поиск..." type="search" />
            <IconContainer>
              <img className="w-4" src="./assets/icons/search.svg" />
            </IconContainer>
          </SearchBar>
        </div>
      </ContactsItem>
    </ContactsContainer>
  );
};
