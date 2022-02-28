import styled from "styled-components";
import tw from "twin.macro";

const PartnersContainer = styled.div`
  ${tw`
grid
grid-gap[0.5rem]
lg:grid-gap[1.5rem]
px-3
grid-template-columns[1fr 1fr]
grid-template-rows[1fr 1fr]
lg:grid-template-columns[repeat(auto-fill,minmax(250px, 1fr))]
xl:w-[70vw]
xl:max-w-[1400px]
xxl:w-[80vw]
`}
`;

const Logo = styled.div`
  ${tw`
hover:shadow-lg
px-3
w-full
py-12
lg:py-20
flex
items-center
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
          <img src="./assets/logos/seppi-cmyk.jpg" />
        </Logo>
      </PartnersContainer>
    </div>
  );
};
