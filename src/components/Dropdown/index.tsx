import { Disclosure, Menu } from "@headlessui/react";
import styled from "styled-components";
import tw from "twin.macro";

const DropdownMenu = styled.div<{ active: boolean }>`
  ${({ active }) => active && tw`bg-gray-100`}
  ${tw`
  pl-9
  py-7
  `}

  span {
    ${tw`ml-2   
    hover:cursor-pointer
    hover:text-accent
  `}
  }
`;

const FirstLine = styled.div`
  ${tw`
  bg-accent
  w-2
  mt-1
  h-[0.07rem]
  `}
`;

const SecondLine = styled.div`
  ${tw`bg-accent w-7   mt-1  h-[0.07rem] bg-opacity-25 mr-3`}
`;

const DropdownItem = styled.span`
  ${tw`text-left   
  font-bold
`}
`;

const DropdownContainer = styled.div`
  ${tw`flex items-start flex-col my-3 ml-10 
  `}
`;

const LineContainer = styled.div`
  ${tw`flex`}
`;

const SubDropdownContainer = styled.ul`
  ${tw`
  last:border-b-[1px] last:pb-4 border-accent
  `}
`;

const SubDropdownItem = styled.li`
  ${tw`
  flex flex-col items-start
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
  stoll?: boolean;
}> = ({ children, stoll }) => {
  return (
    <li>
      <Disclosure>
        {({ open }) => (
          <>
            <DropdownMenu active={open}>
              <Disclosure.Button className="flex items-center justify-start">
                {children}
              </Disclosure.Button>
            </DropdownMenu>
            <Disclosure.Panel>
              {!stoll ? (
                <SubDropdownContainer>
                  <SubDropdownItem>
                    <DropdownContainer>
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
                    <DropdownContainer>
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
                <SubDropdownContainer>
                  <SubDropdownItem>
                    <DropdownContainer>
                      <Disclosure>
                        <Disclosure.Button className="flex items-center justify-start">
                          <LineContainer>
                            <FirstLine />
                            <SecondLine />
                          </LineContainer>
                          <span>По производителю</span>
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
                    <DropdownContainer>
                      <Disclosure>
                        <Disclosure.Button className="flex items-center justify-start">
                          <LineContainer>
                            <FirstLine />
                            <SecondLine />
                          </LineContainer>
                          <span>По назначению</span>
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
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </li>
  );
};
