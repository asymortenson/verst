import { Disclosure } from "@headlessui/react";
import styled from "styled-components";
import tw from "twin.macro";

const DropdownMenu = styled.div<{ active: boolean; category: boolean }>`
  ${({ active, category }) => active && !category && tw`bg-gray-100 w-full`}

  ${({ category }) =>
    !category
      ? tw`pl-9`
      : tw`flex w-[100vw] justify-center lg:justify-start lg:w-[20rem] lg:pl-6  -ml-2`}
  ${tw`
  py-7
  `}

  span {
    ${tw`ml-2   
    hover:cursor-pointer
    hover:text-accent
  `}
  }
`;

const FirstLine = styled.div<{ category?: boolean }>`
  ${({ category }) => (!category ? tw` mt-1` : tw`mt-3`)}
  ${tw`
  bg-accent
  w-2
  h-[0.07rem]
  `}
`;

const SecondLine = styled.div<{ category?: boolean }>`
  ${({ category }) => (!category ? tw` mt-1` : tw`mt-3`)}

  ${tw`bg-accent w-7   h-[0.07rem] bg-opacity-25 mr-3`}
`;

const DropdownItem = styled.span`
  ${tw`text-left   
  font-bold
`}
`;

const DropdownContainer = styled.div`
  ${tw`flex items-center lg:items-start flex-col my-3  justify-center
  `}
`;

const LineContainer = styled.div`
  ${tw`flex`}
`;

const SubDropdownContainer = styled.ul<{ category: boolean }>`

${({ category }) =>
  !category
    ? tw`
last:border-b-[1px] last:pb-4 border-accent
`
    : tw`
last:border-b-[1px] last:pb-4 border-accent border-opacity-0 lg:border-opacity-25 w-[16.5rem] lg:w-auto lg:ml-7
`}
}
`;

const SubDropdownItem = styled.li`
  ${tw`
  flex flex-col items-start lg:first:mt-0 lg:last:mb-0 lg:my-2
  `}
`;

const SearchListContainer = styled.ul`
  ${tw`
   mt-4 ml-[2rem]`}
  li::before {
    content: "⬝";
    font-size: 1rem;
    margin-right: 0.5rem;
  }
`;

export const Dropdown: React.FC<{
  children: React.ReactNode;
  category?: boolean;
}> = ({ children, category = false }) => {
  return (
    <li>
      <Disclosure>
        {({ open }) => (
          <div className="flex justify-center items-center flex-col lg:items-start">
            <DropdownMenu active={open} category={category}>
              <Disclosure.Button className="flex items-center justify-start">
                {children}
              </Disclosure.Button>
            </DropdownMenu>
            <Disclosure.Panel className="w-full lg:block flex justify-center">
              {!category ? (
                <SubDropdownContainer category={category}>
                  <SubDropdownItem>
                    <DropdownContainer className="ml-11">
                      <Disclosure>
                        <Disclosure.Button className="flex items-center justify-start">
                          <LineContainer>
                            <FirstLine />
                            <SecondLine />
                          </LineContainer>
                          <DropdownItem>По производителю</DropdownItem>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <div className="flex">
                            <SearchListContainer>
                              <li>Case</li>
                              <li>New Holland</li>
                            </SearchListContainer>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </DropdownContainer>
                  </SubDropdownItem>
                  <SubDropdownItem>
                    <DropdownContainer className="ml-11">
                      <Disclosure>
                        <Disclosure.Button className="flex items-center justify-start">
                          <LineContainer>
                            <FirstLine />
                            <SecondLine />
                          </LineContainer>
                          <DropdownItem>По назначению</DropdownItem>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <div className="flex">
                            <SearchListContainer>
                              <li>Case</li>
                              <li>New Holland</li>
                            </SearchListContainer>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </DropdownContainer>
                  </SubDropdownItem>
                </SubDropdownContainer>
              ) : (
                <SubDropdownContainer className="divide-y" category={category}>
                  <SubDropdownItem>
                    <DropdownContainer>
                      <Disclosure>
                        <Disclosure.Button className="flex items-center justify-start">
                          <LineContainer>
                            <FirstLine />
                            <SecondLine />
                          </LineContainer>
                          <span className="text-left">Косилки и плющилки</span>
                        </Disclosure.Button>

                        <Disclosure.Panel className="w-full">
                          <div className="flex w-full">
                            <SearchListContainer>
                              <li>Модели</li>
                              <li>Модели</li>
                            </SearchListContainer>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </DropdownContainer>
                  </SubDropdownItem>
                  <SubDropdownItem>
                    <DropdownContainer>
                      <Disclosure>
                        <Disclosure.Button className="flex items-start justify-start">
                          <LineContainer>
                            <FirstLine category={category} />
                            <SecondLine category={category} />
                          </LineContainer>
                          <span className="text-left">
                            Ворошители и валкообращователи
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="w-full">
                          <div className="flex">
                            <SearchListContainer>
                              <li>Модели</li>
                              <li>Модели</li>
                            </SearchListContainer>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </DropdownContainer>
                  </SubDropdownItem>
                  <SubDropdownItem>
                    <DropdownContainer>
                      <Disclosure>
                        <Disclosure.Button className="flex items-start justify-start">
                          <LineContainer>
                            <FirstLine category={category} />
                            <SecondLine category={category} />
                          </LineContainer>
                          <span className="text-left">Пресс подборщики</span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="w-full">
                          <div className="flex">
                            <SearchListContainer>
                              <li>Модели</li>
                              <li>Модели</li>
                            </SearchListContainer>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </DropdownContainer>
                  </SubDropdownItem>
                </SubDropdownContainer>
              )}
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </li>
  );
};
