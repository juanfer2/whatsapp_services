import { useCustomForm } from '@/hooks/useCustomForm';
import { Message } from '@/models/message.type';

import validationSchema from './message.schema';

export const useSendMessage = ({ phone = '', message = '' }: Partial<Message>) => {
  const { register, handleSubmit, errors } = useCustomForm<Message>(
    { phone, message },
    validationSchema
  );

  return { register, handleSubmit, errors };
};
