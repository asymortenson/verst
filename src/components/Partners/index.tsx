import styled from "styled-components";
import tw from "twin.macro";

const PartnersContainer = styled.div`
  ${tw`
flex
flex-wrap
justify-between
w-[70vw]
max-w-[1440px]
`}
`;

const Logo = styled.div`
  ${tw`
w-64
hover:shadow-lg
px-3
flex
items-center
py-20
my-2
bg-white
cursor-pointer
`}
`;

export const Partners = () => {
  return (
    <div className="bg-[#dcdcdc] w-full flex justify-center py-16">
      <PartnersContainer>
        <Logo>
          <img src="./assets/logos/bkt.png" />
        </Logo>
        <Logo>
          <img src="./assets/logos/dieci.png" />
        </Logo>
        <Logo>
          <img src="./assets/logos/farmet.jpg" />
        </Logo>
        <Logo>
          <img src="./assets/logos/harvesting.png" />
        </Logo>
        <Logo>
          <img src="./assets/logos/honey-bee.jpg" />
        </Logo>
        <Logo className="">
          <img src="./assets/logos/kongskilde.jpg" />
        </Logo>
        <Logo>
          <img src="./assets/logos/seppi-cmyk.jpg" />
        </Logo>
        <Logo>
          <img src="./assets/logos/stemplinger.png" />
        </Logo>
        <Logo>
          <img src="./assets/logos/stemplinger.png" />
        </Logo>
        <Logo>
          <img src="./assets/logos/stemplinger.png" />
        </Logo>
      </PartnersContainer>
    </div>
  );
};
