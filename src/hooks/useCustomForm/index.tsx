import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

export function useCustomForm<T>(defaultValues: T, validationSchema: AnyObjectSchema) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    mode: 'onChange',
    defaultValues: defaultValues as any,
    resolver: validationSchema ? yupResolver(validationSchema) : undefined
  });

  return { register, handleSubmit, errors, setValue };
}
