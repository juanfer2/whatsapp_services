import { fetchWhatsappApi } from '@/clients/whatsapp_client';

const GET = 'GET';
const POST = 'POST';
const BASE_URL = 'whatsapp';

export const sendMessage = async ({
  phone,
  message
}: {
  phone: string;
  message: string;
}): Promise<any[] | Error> => {
  const data = { phone, message };
  const response = await fetchWhatsappApi({ url: BASE_URL + '/send ', method: POST, data });
  console.log(response);
  return response.data;
};
