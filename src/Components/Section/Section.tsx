import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 40px 0;
  min-height: 452px;
  &.blog-header {
    margin: 130px 0 0;
  }
  &.post-header {
    margin: 170px 0 0;
  }
  @media only screen and (max-width: 768px) {
    &.post-header {
      margin: 88px 0 0;
    }
  }
`;
export default Section;
