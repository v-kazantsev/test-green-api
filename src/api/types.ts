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

export type ContactDetails = {
  avatar: string;
  name: string;
  email: string;
  category: string;
  descrition: string;
  products: {
    id: string;
  };
  chatId: string;
  lastSeen: string;
  isArchive: boolean;
  isDisappearing: boolean;
  isMute: boolean;
  messageExpiration: number;
  muteExpiration: number;
}

export type ContactDetailsAPI = {
  getContactDetails(id: string): Promise<AxiosResponse<ContactDetails>>,
}

type TextNotification = {
  typeMessage: string;
  textMessageData: {
    textMessage: string;
    isTemplateMessage: boolean;
  };
  quotedMessage: {
    stanzaId: string;
    participant: string;
    typeMessage: string;
  };
}

export type Notification = {
  receiptId: number;
  body: TextNotification;
}

export type TextNotificationAPI = {
  getNotification(): Promise<AxiosResponse<Notification>>,
}

export type DeleteNotificationAPI = {
  delete(id: number): Promise<AxiosResponse<{ result: boolean}>>
}