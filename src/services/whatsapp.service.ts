import { fetchWhatsappApi } from '@/clients/whatsapp_client';

const GET = 'GET';

export const getQrLogin = async (): Promise<any[] | Error> => {
  const response = await fetchWhatsappApi({ url: 'static/qr.svg', method: GET });

  return response.data;
};
