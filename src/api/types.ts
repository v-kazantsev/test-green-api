import { AxiosResponse } from 'axios';

export type ResponseError = Array<string> | string;

export type TextMessageResponse = {
  idMessage: string;
}

export type TextMessageRequestBody = {
  chatId: string;
  message: string;
  quotedMessageId?: string;
  archiveChat?: boolean;
  linkPreview?: boolean;
}

export type TextMessageAPI = {
  sendTextMessage(body: TextMessageRequestBody): Promise<AxiosResponse<TextMessageResponse>>,
}

export type Contact = {
  id: string;
  name: string;
  type: 'user' | 'group';
}

export type ContactsAPI = {
  getContacts(): Promise<AxiosResponse<Array<Contact>>>,
}
