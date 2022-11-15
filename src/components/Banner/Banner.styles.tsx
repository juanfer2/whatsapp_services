import styled from '@emotion/styled';

const BannerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${(props: any) => props.theme.colors.secondaryGradient};
  padding: 15px;
  border-radius: 10px;
  color: #fefffe;
  margin-bottom: 15px;

  -webkit-box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px -10px rgba(66, 68, 90, 1);

  h1 {
    font-size: 25px;
    font-weight: 600;
  }

  img {
    width: 100px;

    @media screen and (min-width: 900px) {
      width: 200px;
    }
  }
`;

export { BannerStyled };
