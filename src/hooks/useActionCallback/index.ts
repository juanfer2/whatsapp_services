import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  status: 'info' | 'warning' | 'success' | 'error' | 'loading';
  description?: string;
  redirect?: string;
}

export const useActionCallback = () => {
  const toast = useToast();
  const navigation = useNavigate();

  const alert = ({ title, status, description }: Props) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true,
      position: 'top-right',
      variant: 'left-accent'
    });
  };

  const navigate = (redirect: string) => {
    if (redirect) navigation(redirect);
  };

  return { alert, navigate };
};
