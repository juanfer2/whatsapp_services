/* eslint-disable @typescript-eslint/no-misused-promises */
import { SendMessageStyled } from './SendMessage.styles';
import { sendMessage } from '@/services/whatsapp.service';
import { useSendMessage } from './useSendMessage';
import Input from '@/components/Input';
import Button from '@/components/Button';

function SendMessage() {
  const { errors, handleSubmit, register } = useSendMessage({});

  const handleOnSubmit = async (data: any) => {
    try {
      console.log(data);
      await sendMessage({ phone: data.phone, message: data.message });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SendMessageStyled>
      <h1>Send Message</h1>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="form-cititzen">
        <div className="inputs">
          <Input
            name="phone"
            labelName="Phone"
            placeholder="Phone"
            control={register}
            errorMessage={errors?.phone?.message}
          />

          <Input
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
