import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  phone: Yup.string().required('Este campo en requerido'),
  message: Yup.string().required('Este campo en requerido')
});

export default ValidationSchema;
