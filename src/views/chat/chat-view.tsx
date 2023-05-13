import { NavBarView, ChatBodyView, ChatFooterView } from '@/views/chat';
import './chat-view.scss';

export const ChatView = () => (
  <div className="chat-view">
    <NavBarView />
    <ChatBodyView />
    <ChatFooterView />
  </div>
)