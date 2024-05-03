import React, { useState } from 'react';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendSMS = async () => {
    try {
      const response = await fetch('/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, message }),
      });

      if (response.ok) {
        console.log('SMS sent successfully!');
      } else {
        console.error('Failed to send SMS:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  return (
    <div>
      <h1>Send SMS</h1>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="9947713976"
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          placeholder="ok your number is detected"
        />
      </div>
      <button onClick={sendSMS}>Send SMS</button>
    </div>
  );
};

export default App;
