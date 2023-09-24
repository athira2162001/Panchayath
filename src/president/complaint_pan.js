import React, { useState } from 'react';
import { BsFillCursorFill } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import axios from 'axios';

const Complaint_pan = () => {
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  const toggleMessageForm = () => {
    setShowMessageForm((prevShowMessageForm) => !prevShowMessageForm);
  };

  const handleMessageSend = () => {
    const currentDateTime = new Date().toLocaleString();
    const submittedMessage = `${message} (${currentDateTime})`;
    setSubmittedMessage(submittedMessage);
    setMessage('');
    setShowMessageForm(false);
    axios
      .post('http://localhost:4000/president/complaint_pan', {
        message: submittedMessage, // Send the submitted message in the request body
      })
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  };

  return (
    <div className='demo' style={{marginTop:'100px'}}>
 
      <div style={{ borderStyle: 'solid', borderWidth: '1px', height: 'auto', borderRadius: '10px', width: '50%', marginLeft: '500px' }}>
      <button onClick={toggleMessageForm}>
        <AiFillMessage />
      </button>
      {showMessageForm && (
        <div>
          <textarea
            rows={4}
            placeholder="Enter your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleMessageSend}>
            <BsFillCursorFill />
          </button>
        </div>
      )}
      {submittedMessage && (
        <div>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Complaint_pan;
