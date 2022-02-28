import { Button } from "components/Button";
import styled from "styled-components";
import tw from "twin.macro";
const HeroContainer = styled.div`
  ${tw`
lg:mt-6
overflow-hidden
relative
h-[70vh]
lg:h-auto
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
  transform: translate(110px, -102px) rotate(35deg);
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
  transform: translate(110px, 96px) rotate(35deg);
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
  ${tw`absolute w-full  h-full`}
`;

const MainBlock = styled.div`
  ${tw`
flex h-full relative
 lg:ml-24 items-center lg:items-start justify-center flex-col`}
`;

const BlockHeader = styled.h1`
  ${tw`
lg:text-5xl
lg:text-left
text-3xl

relative

lg:before:hidden
lg:after:hidden

before:bg-accent
before:w-[10rem]
before:h-[1px]
before:absolute
before:-bottom-8
before:right-0
before:left-0
before:ml-auto
before:mr-auto

after:bg-accent
after:w-[21rem]
after:h-[1px]
after:absolute
after:-bottom-8
after:opacity-50
after:right-0
after:left-0
after:ml-auto
after:mr-auto


lg:mt-12
w-9/12
lg:leading-[3rem]
text-center
lg:w-5/12
mb-28
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
display[none]
lg:block
h-[50rem]
absolute
`}
`;

const HeaderAccentLine = styled.div`
  transform: translate(80px, -135px) rotate(90deg);

  background: rgb(196, 154, 119);

  ${tw`
w-[1px]
display[none]
lg:block
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
          <Button className="h-16 text-xl lg:text-base lg:h-14 w-[70vw] lg:w-52">
            Заказать звонок
          </Button>
        </MainBlock>
      </RequestContainer>
      <img
        className="object-cover object-right   h-full lg:object-contain"
        src="./assets/images/hero-tractor.png"
      />
    </HeroContainer>
  );
};
