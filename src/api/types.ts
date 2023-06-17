import { AxiosResponse } from 'axios';
import { Credentials } from '@/types';

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
  sendTextMessage(body: TextMessageRequestBody, credentials: Credentials): Promise<AxiosResponse<TextMessageResponse>>,
}

export type ChatMessageAPI = {
  getChatMessage(body: { chatId: string, idMessage: string }, credentials: Credentials): Promise<AxiosResponse<ChatMessage>>,
}

export type Contact = {
  id: string;
  name: string;
  type: 'user' | 'group';
}

export type ContactsAPI = {
  getContacts(credentials: Credentials): Promise<AxiosResponse<Array<Contact>>>,
}

export type ChatHistoryAPI = {
  getChatHistory(body: { chatId: string, count?: number }, credentials: Credentials, ): Promise<AxiosResponse<Array<ChatMessage>>>,
}

export type ChatMessage = {
  type: 'incoming' | 'outgoing';
  timestamp: number;
  idMessage: string;
  statusMessage?: 'pending' | 'sent' | 'delivered' | 'read';
  typeMessage: string;
  chatId: string;
  senderId?: string;
  senderName?: string;
  textMessage?: string;
  downloadUrl?: string;
  caption?: string;
  location?: unknown;
  contact?: ContactDetails;
  extendedTextMessage?: unknown;
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
  getContactDetails(id: string, credentials: Credentials): Promise<AxiosResponse<ContactDetails>>,
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
  getNotification(credentials: Credentials): Promise<AxiosResponse<Notification>>,
}

export type DeleteNotificationAPI = {
  delete(id: number, credentials: Credentials): Promise<AxiosResponse<{ result: boolean}>>
}