import styled from 'styled-components';

const SectionInner = styled.div`
  max-width: 1280px;
  &.post-page {
    max-width: 1024px;
  }
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 15px;
  @media only screen and (max-width: 1280px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media only screen and (max-width: 576px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default SectionInner;
