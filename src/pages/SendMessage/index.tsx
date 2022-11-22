/* eslint-disable @typescript-eslint/no-misused-promises */
import { SendMessageStyled } from './SendMessage.styles';
import { sendMultipleMessages } from '@/services/whatsapp.service';
import { useSendMessage } from './useSendMessage';
import { TextArea, Button, Input, Banner } from '@/components';
import CitizenImg from '@/assets/images/citizens.svg';
import { useActionCallback } from '@/hooks/useActionCallback';

function SendMessage() {
  const { errors, handleSubmit, register } = useSendMessage({ phone: '573005138128,573126707056' });
  const { alert } = useActionCallback();

  const handleOnSubmit = async (data: any) => {
    try {
      // await sendMessage({ phone: data.phone, message: data.message });
      await sendMultipleMessages({ phones: data.phone.split(','), message: data.message });
      alert({
        title: 'Envio de whatsapp exitoso',
        status: 'success',
        description: `el mensaje fue enviado al número de celular ${data?.phone as string}`
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SendMessageStyled>
      <Banner imgUrl={CitizenImg} title="Send Message" />
      <br />

      <form onSubmit={handleSubmit(handleOnSubmit)} className="form-cititzen">
        <div className="inputs">
          <Input
            name="phone"
            labelName="Phone"
            placeholder="Phone"
            control={register}
            errorMessage={errors?.phone?.message}
          />

          <TextArea
            name="message"
            labelName="Message"
            placeholder="Message"
            control={register}
            errorMessage={errors?.message?.message}
          />
        </div>

        <Button type={'submit'}>Send</Button>
      </form>
    </SendMessageStyled>
  );
}

export default SendMessage;
