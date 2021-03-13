import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="00f2ceca-7efd-4f8c-9421-bf0e759656c4"
            userName="javascriptmastery"
            userSecret="12341234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    );
}

export default App;