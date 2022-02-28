import { Button } from "components/Button";
import { Dropdown } from "components/Dropdown";
import { Links } from "components/Links";
import styled from "styled-components";
import tw from "twin.macro";

const CategoryContainer = styled.div`
  ${tw`
flex
flex-col
relative
`}
`;

const Header = styled.h1`
  ${tw`
uppercase
text-4xl
mt-16
font-bold
`}
`;

const HeaderLine = styled.div<{ second?: boolean }>`
  background: rgb(196, 154, 119);
  transform: ${({ second }) =>
    second
      ? "translate(10px, 102px) rotate(90deg)"
      : "translate(42px, 70px) rotate(90deg)"};

  ${({ second }) =>
    second ? tw`h-[1rem] opacity-100 ` : tw`h-[5rem] opacity-40  `}
  ${tw`
w-[1px]
mt-3
z-30
absolute
`}
`;

const ButtonsContainer = styled.div`
  ${tw`
  grid
  lg:font-size[20px]
  grid-gap[0.5rem]
  grid-template-columns[1fr 1fr]
lg:grid-gap[0.5rem]
lg:grid-template-columns[repeat(auto-fill,minmax(240px, 1fr))]

my-14
`}
`;

const ProductsContainer = styled.div`
  ${tw`
flex
flex-col
lg:flex-row
justify-between
`}
`;

const ImagesContainer = styled.div`
  ${tw`
  grid
  grid-gap[1rem]
  grid-cols-1
  xl:grid-cols-3
  lg:grid-cols-2
  lg:grid-rows-3
  h-full

lg:ml-7
`}
`;
const ParametersContainer = styled.div`
  ${tw`
  w-full
  lg:w-[28rem]
  `}
`;

const ImageContainer = styled.div`
  ${tw`
  hover:opacity-90
  cursor-pointer
  w-full
relative

`}

  img {
    ${tw`w-full`}
  }
`;

const Label = styled.div`
  ${tw`absolute
  bottom-0
  flex
  h-10
  text-white
  items-center
  justify-center
  z-20
  w-full
`}

  ::after {
    content: "";
    ${tw`bg-secondary`}
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 70%;
    z-index: -1;
  }
`;

const DropdownContainer = styled.ul`
  ::-webkit-scrollbar {
    width: 6px;
    ${tw`lg:h-0 h-1`}
  }

  scrollbar-color: #353845 #f5f5f5;
  scrollbar-width: thin;
  scrollbar-height: 0px;

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    ${tw`bg-secondary`}
  }

  ${tw`
  flex
          lg:flex-col
          flex-row
          items-start
          sticky top-0 
          mb-10
          lg:mb-0
          mt-7
          bg-[#fdfdfd]
          overflow-scroll
          w-full
          
          lg:w-full
          lg:h-[35rem]
  `}
`;

export const Category = () => {
  return (
    <CategoryContainer>
      <div className="flex justify-between">
        <Header>Stoll</Header>
        <HeaderLine />
        <HeaderLine second />
        <Links />
      </div>
      <ButtonsContainer>
        <Button theme="category">CL - 655</Button>
        <Button theme="category">FZ</Button>
        <Button theme="category">Ковши</Button>
        <Button theme="category">Виллы</Button>
        <Button theme="category">Захватчики рулонов</Button>
      </ButtonsContainer>
      <ProductsContainer>
        <ParametersContainer>
          <div className="bg-primary w-full lg:w-full">
            <h1 className="uppercase text-xl lg:text-base text-white py-6 ml-12 font-size[20px]">
              Подбор Параметров
            </h1>
          </div>
          <DropdownContainer>
            <Dropdown category={true}>
              <span className="font-bold text-left">
                Керамозаготовительная техника
              </span>
            </Dropdown>
            <Dropdown category={true}>
              <span className="font-bold text-left">
                Сельскохозяйственные шины
              </span>
            </Dropdown>
            <Dropdown category={true}>
              <span className="font-bold text-left">
                Шины для шахт и карьеров
              </span>
            </Dropdown>
            <Dropdown category={true}>
              <span className="font-bold text-left">
                Керамозаготовительная техника
              </span>
            </Dropdown>
          </DropdownContainer>
        </ParametersContainer>

        <div className="mb-10 pt-0 relative lg:hidden">
          <Header style={{ fontSize: "20px", margin: 0 }}>
            Косилки и плющилки
          </Header>
          <div className="absolute -top-[4.6rem]">
            <HeaderLine />
            <HeaderLine second />
          </div>
        </div>
        <ImagesContainer>
          <ImageContainer>
            <img src="./assets/images/tractor.png" />
            <Label>
              <span>FZ - 10</span>
            </Label>
          </ImageContainer>
          <ImageContainer>
            <img src="./assets/images/tractor.png" />
            <Label>
              <span>FZ - 10</span>
            </Label>
          </ImageContainer>
          <ImageContainer>
            <img src="./assets/images/tractor.png" />
            <Label>
              <span>FZ - 10</span>
            </Label>
          </ImageContainer>
          <ImageContainer>
            <img src="./assets/images/tractor.png" />
            <Label>
              <span>FZ - 10</span>
            </Label>
          </ImageContainer>
          <ImageContainer>
            <img src="./assets/images/tractor.png" />
            <Label>
              <span>FZ - 10</span>
            </Label>
          </ImageContainer>
          <ImageContainer>
            <img src="./assets/images/tractor.png" />
            <Label>
              <span>FZ - 10</span>
            </Label>
          </ImageContainer>
          <ImageContainer>
            <img src="./assets/images/tractor.png" />
            <Label>
              <span>FZ - 10</span>
            </Label>
          </ImageContainer>
          <ImageContainer>
            <img src="./assets/images/tractor.png" />
            <Label>
              <span>FZ - 10</span>
            </Label>
          </ImageContainer>
          <ImageContainer>
            <img src="./assets/images/tractor.png" />
            <Label>
              <span>FZ - 10</span>
            </Label>
          </ImageContainer>
        </ImagesContainer>
        <div className="flex justify-center lg:hidden">
          <Button theme="showMore">Показать ещё</Button>
        </div>
      </ProductsContainer>
    </CategoryContainer>
  );
};
