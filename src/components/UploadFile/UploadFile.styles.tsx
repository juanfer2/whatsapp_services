import styled from '@emotion/styled';

const UploadFileStyled = styled.div`
  .drop-area {
    text-align: center;
    padding: 20px;
    border: ${(props: any) => `2px ${props.theme.colors.secondary} dashed`};
    border-radius: 10px;
    // max-width: 600px;
    margin: auto;

    .dropzone {
      display: flex;
      gap: 1em;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export { UploadFileStyled };
