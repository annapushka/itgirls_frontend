import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import MessageList from './assets/components/MessageList';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Img from './assets/img/message_icon.png'


function App() {

    const [message, setMessage] = useState('');
    const [user, setUser] = useState('');
    const [ava, setAva] = useState('');
    const [messages, setMessages] = useState([]);
    const [isNew, setIsNew] = useState('new');


    function addNewMessage(e) {
        e.preventDefault();
        const newMessage = {
            id: Date.now(),
            ava,
            user,
            message,
            isNew
        }
        console.log(newMessage);
        setMessages([newMessage, ...messages]);
        console.log(messages);
        setMessage('');
        messages.forEach(element =>  element.isNew = '');
    }

    function checkSpam(e) {
      let text = e.target.value;
      const badWords = [/viagra/gi, /XXX/gi];
        for (let i = 0; i <= badWords.length; i++) {
          text = text.replace(badWords[i], "***");
      } 
      setMessage(text);
    }


  return (
    <Container className="App">
      <MessageList messages={messages}></MessageList>
      <Form>
            <Form.Group className="mb-3" controlId="url">
                <Form.Label>Добавьте url фото</Form.Label>
                <Form.Control
                    value={ava}
                    onChange={e => setAva(e.target.value)}
                    type="url"
                    placeholder="https://example.com"
                    pattern="https://.*"
                    size="30" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="autor">
                <Form.Label>Введите имя</Form.Label>
                <Form.Control
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="newMessage">
                <Form.Label>Введите новое сообщение</Form.Label>
                <Form.Control
                    value={message}
                    onChange={checkSpam}
                    type="text" />
            </Form.Group>
            <Button
                onClick={addNewMessage}
                variant="info"
                className="btn"
                type="submit">
                Отправить сообщение
                <img src={Img} alt="img" className="btn-img" />
            </Button>
        </Form>
    </Container>
  );
}

export default App;