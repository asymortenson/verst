import { Button } from "components/Button";
import styled from "styled-components";
import tw from "twin.macro";
const HeroContainer = styled.div`
  ${tw`
mt-6
overflow-hidden
relative
`}
`;

const Mask = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    100deg,
    rgba(3, 0, 22, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  ${tw`
absolute
opacity-70
w-full
h-full
`}
`;

const TopLine = styled.div`
  transform: translate(150px, -102px) rotate(45deg);
  background: rgb(196, 154, 119);

  ${tw`
w-[1px]
opacity-50
z-30
h-[26.7rem]
absolute
`}
`;

const SmallLine = styled.div`
  transform: translate(150px, 96px) rotate(45deg);
  background: rgb(196, 154, 119);

  ${tw`
w-[1.5px]
z-30
h-[2rem]
absolute
`}
`;

const BottomLine = styled.div`
  transform: translate(1400px, -495px) rotate(30deg);
  background: rgb(196, 154, 119);

  ${tw`
w-[1px]
opacity-40
z-30
h-[100rem]
absolute
`}
`;

const BottomBlack = styled.div`
  transform: translate(1700px, -315px) rotate(120deg);
  background: rgb(196, 154, 119);

  ${tw`
bg-black
opacity-20
w-[100rem]
h-[160rem]
absolute
`}
`;

const RequestContainer = styled.div`
  ${tw`absolute w-full h-full`}
`;

const MainBlock = styled.div`
  ${tw`
flex h-full ml-24 justify-center flex-col`}
`;

const BlockHeader = styled.h1`
  ${tw`
text-5xl
mt-8
w-5/12
leading-tight
mb-20
font-weight[800]
text-white
uppercase
`}
`;

const HeaderLine = styled.div`
  transform: translate(400px, -135px) rotate(90deg);

  background: rgb(196, 154, 119);

  ${tw`
w-[1px]
opacity-40
z-30
h-[50rem]
absolute
`}
`;

const HeaderAccentLine = styled.div`
  transform: translate(80px, -135px) rotate(90deg);

  background: rgb(196, 154, 119);

  ${tw`
w-[1px]
z-30
h-[10rem]
absolute
`}
`;

export const Hero = () => {
  return (
    <HeroContainer>
      <BottomBlack />
      <BottomLine />
      <TopLine />
      <SmallLine />
      <Mask />
      <RequestContainer>
        <MainBlock>
          <HeaderAccentLine />
          <HeaderLine />
          <BlockHeader>Навесное оборудование</BlockHeader>
          <Button className="h-14 w-52">Заказать звонок</Button>
        </MainBlock>
      </RequestContainer>
      <img className="" src="./assets/images/hero-tractor.png" />
    </HeroContainer>
  );
};
