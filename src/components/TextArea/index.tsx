import { TextAreaStyled } from './TextArea.styles';
import { Textarea, FormLabel } from '@chakra-ui/react';
import { theme } from '@/styles/theme';

export interface Props {
  name?: string;
  labelName?: string;
  placeholder?: string;
  control?: any;
  errorMessage?: any;
}

function TextArea({ name, labelName, placeholder, control, errorMessage }: Props) {
  const controlRef = control?.(name) || {};

  return (
    <TextAreaStyled>
      <div className="ciaf-input">
        <FormLabel>{labelName}</FormLabel>
        <Textarea
          placeholder={placeholder}
          name={name}
          {...controlRef}
          isInvalid={errorMessage}
          errorBorderColor={errorMessage ? theme.colors.danger : ''}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </TextAreaStyled>
  );
}

export default TextArea;
