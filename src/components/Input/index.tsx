import { Input as InputChakra, FormLabel } from '@chakra-ui/react';
import { InputStyled } from './Input.styles';

export interface Props {
  name?: string;
  labelName?: string;
  placeholder?: string;
  control?: any;
  errorMessage?: any;
}

function Input({ name, labelName, placeholder, control, errorMessage }: Props) {
  const controlRef = control?.(name) || {};

  return (
    <InputStyled>
      <div className="ciaf-input">
        <FormLabel>{labelName}</FormLabel>
        <InputChakra placeholder={placeholder} name={name} {...controlRef} />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </InputStyled>
  );
}

export default Input;
