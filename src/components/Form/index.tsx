import { Button } from "components/Button";
import styled from "styled-components";
import tw from "twin.macro";

const FormContainer = styled.form`
  ${tw`
  flex
  text-white
  rounded-md
  flex-col
  relative

  p-12

  before:right-0
  before:left-0
  before:top-0
  before:ml-auto
  before:mr-auto
  before:mt-auto
  before:mb-auto
  before:absolute
  before:bg-black
  before:bg-opacity-20
  before:w-full
  before:h-full
  before:z-[-1]
  before:rounded-md

border-accent
  border-[2px]
  border-opacity-50


  

  `}

  ::before {
    border: 7px solid rgba(196, 154, 119, 0.2);
  }
`;
const Header = styled.h2`
  ${tw`uppercase font-bold text-4xl text-center mb-12`}
`;

const Input = styled.div`
  ${tw`relative`}
  input {
    ${tw`
    w-[15vw]
    max-w-[20rem]
    py-4
    placeholder:text-white
    text-indent[1rem]
    border-accent
    border-[2px]
    mx-1.5
    opacity-90
    my-1.5
    border-opacity-60
    rounded-md
  bg-transparent
  `}
  }
  input[type="text"] {
    min-width: 99%;
    padding-bottom: 4rem;
  }
`;

const Icon = styled.div`
  ${tw`
  absolute
  w-5
  right-5
  bottom-7
  opacity-40
  before:absolute
  before:bg-accent
  before:w-[0.5px]
  before:h-10
  before:-top-2
  before:right-8
  

  `}
`;

const Agreement = styled.div`
  ${tw`
  flex     opacity-90
 justify-center mt-8
 relative
 items-center
  
  `}

  .checkbox-button {
    cursor: pointer;
  }

  input[type="checkbox"] {
    box-sizing: border-box;
    z-index: 10;
    padding: 0;
  }

  input {
    font-size: 1rem;
    line-height: 1.5;
    padding: 11px 23px;
    border-radius: 0;
    outline: 0;
    background-color: transparent;
  }

  .checkbox-button__input {
    opacity: 0;
    position: absolute;
  }

  .checkbox-button__control {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 12px;
    vertical-align: middle;
    background-color: inherit;
    color: #017b5f;
    border: 2px solid #666;
  }

  .checkbox-button__input:checked + .checkbox-button__control:after {
    content: "";
    display: block;
    position: absolute;
    top: 3.1px;
    left: 3px;
    width: 10px;
    height: 10px;
    ${tw`bg-accent`}
  }

  .checkbox-button__input:checked + .checkbox-button__control {
    ${tw`border-accent`}
  }

  .checkbox-button__control {
    transform: scale(0.75);
  }
`;

export const Form: React.FC = () => {
  return (
    <FormContainer>
      <Header>Заказать консультацию</Header>
      <div className="flex">
        <Input>
          <input placeholder="Ваше имя" type="name" />
          <Icon>
            <img src="./assets/icons/person.svg" />
          </Icon>
        </Input>
        <Input>
          <input placeholder="Ваш телефон" type="tel" />
          <Icon>
            <img src="./assets/icons/phone-call.svg" />
          </Icon>
        </Input>
        <Input>
          <input placeholder="Ваш email" type="email" />
          <Icon>
            <img src="./assets/icons/email.svg" />
          </Icon>
        </Input>
      </div>
      <Input>
        <input placeholder="Комментарий..." type="text" />
        <Icon className="top-8">
          <img src="./assets/icons/pen.svg" />
        </Icon>
      </Input>

      <Agreement>
        <label className="flex items-center checkbox-button">
          <input
            type="checkbox"
            id="choice1-1"
            name="choice1"
            className="checkbox-button__input"
          />
          <span className="checkbox-button__control"></span>
          <span>Согласен(-на) обработку персональных данных</span>
        </label>
      </Agreement>
      <Button theme="form">Отправить</Button>
    </FormContainer>
  );
};
