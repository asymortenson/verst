import styled from "styled-components";
import tw from "twin.macro";

const SearchBar = styled.div`
  ${tw`
w-[190px]
lg:ml-4
xl:w-[350px]
flex
mr-2
lg:mr-20
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

export const Search: React.FC = () => {
  return (
    <SearchBar>
      <SearchInput placeholder="Поиск..." type="search" />
      <IconContainer>
        <img className="w-4" src="./assets/icons/search.svg" />
      </IconContainer>
    </SearchBar>
  );
};
