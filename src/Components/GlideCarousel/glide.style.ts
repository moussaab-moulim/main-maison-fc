import styled from 'styled-components';

// Glide wrapper style
const GlideWrapper = styled.div``;

// Glide slide wrapper style
const GlideSlideWrapper = styled.li``;

// Button wrapper style
const ButtonWrapper = styled.div`
  height: 18px;
  padding: 0px;
  border: 0px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
`;

// ButtonControlWrapper style
const ButtonControlWrapper = styled.div`
  margin-top: 30px;
`;

// BulletControlWrapper style
const BulletControlWrapper = styled.div``;

// BulletButton style
const BulletButton = styled.button`
  cursor: pointer;
  width: 10px;
  height: 10px;
  margin: 4px;
  border: 0;
  padding: 0;
  outline: none;
  border-radius: 50%;
  background-color: #d6d6d6;

  &:hover,
  &.glide__bullet--active {
    background-color: #869791;
  }
`;

// default button style
const DefaultBtn = styled.button`
  cursor: pointer;
  margin: 10px 3px;
`;

export {
  GlideSlideWrapper,
  ButtonControlWrapper,
  ButtonWrapper,
  BulletControlWrapper,
  BulletButton,
  DefaultBtn,
};
export default GlideWrapper;
