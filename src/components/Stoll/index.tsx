import { ButtonStoll } from "components/Button";
import { Dropdown } from "components/Dropdown";
import styled from "styled-components";
import tw from "twin.macro";

const StollContainer = styled.div`
  ${tw`
flex
flex-col
relative
`}
`;

const Header = styled.h1`
  ${tw`
uppercase
text-3xl
mt-12
mb-14
font-bold
`}
`;

const HeaderLine = styled.div`
  background: rgb(196, 154, 119);
  transform: translate(42px, 60px) rotate(90deg);
  ${tw`
w-[1px]
opacity-40
z-30
h-[5rem]
absolute
`}
`;

const AdditionalLine = styled.div(HeaderLine);

const ButtonsContainer = styled.div`
  ${tw`
flex
justify-between
`}
`;

const LinkItem = styled.li`
  ${tw`
mx-2
text-[#a4a4a4]
cursor-pointer
`}
`;

const ProductsContainer = styled.div`
  ${tw`
flex
justify-between
mt-16
`}
`;

const ImagesContainer = styled.div`
  ${tw`
flex
justify-between

ml-7
flex-wrap
`}
`;
const ParametersContainer = styled.div``;

const ImageContainer = styled.div`
  ${tw`
w-[310px]
mb-4
relative
`}
`;

const Label = styled.div`
  ${tw`absolute
bg-secondary
bottom-0
flex
h-10
text-white
items-center
opacity-80
justify-center
w-full
`}
`;
export const Stoll = () => {
  return (
    <StollContainer>
      <div className="flex justify-between">
        <Header>Stoll</Header>
        <HeaderLine />
        <AdditionalLine className="h-[2rem]" />
        <ul className="flex items-center">
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
        </ul>
      </div>
      <ButtonsContainer>
        <ButtonStoll>CL - 655</ButtonStoll>
        <ButtonStoll>FZ</ButtonStoll>
        <ButtonStoll>Ковши</ButtonStoll>
        <ButtonStoll>Виллы</ButtonStoll>
        <ButtonStoll>Захватчики рулонов</ButtonStoll>
      </ButtonsContainer>
      <ProductsContainer>
        <ParametersContainer>
          <div className="bg-primary w-[350px]">
            <h1 className="uppercase text-white py-6 ml-12">
              Подбор Параметров
            </h1>
          </div>
          <div
            className="  flex
          flex-col
          sticky top-0 
          overflow-scroll
          h-[60vh]"
          >
            <ul>
              <Dropdown stoll={true}>
                <span className="font-bold">Керамозаготовительная техника</span>
              </Dropdown>
              <Dropdown stoll={true}>
                <span className="font-bold">Керамозаготовительная техника</span>
              </Dropdown>
              <Dropdown stoll={true}>
                <span className="font-bold">Керамозаготовительная техника</span>
              </Dropdown>
              <Dropdown stoll={true}>
                <span className="font-bold">Керамозаготовительная техника</span>
              </Dropdown>
            </ul>
          </div>
        </ParametersContainer>
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
      </ProductsContainer>
    </StollContainer>
  );
};
