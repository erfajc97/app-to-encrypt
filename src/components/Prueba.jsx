import React, { useEffect } from 'react';

function encrypt(text) {
  // Asigna una letra diferente a cada vocal
  return text.replace(/a/ig, 'X').replace(/e/ig, 'Y').replace(/i/ig, 'Z').replace(/o/ig, 'W').replace(/u/ig, 'V');
}

function decrypt(text) {
  // Devuelve las letras a su forma original
  return text.replace(/X/ig, 'a').replace(/Y/ig, 'e').replace(/Z/ig, 'i').replace(/W/ig, 'o').replace(/V/ig, 'u');
}

function Prueba() {
  const [text, setText] = React.useState('');
  const [encryptedText, setEncryptedText] = React.useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  useEffect(() => {
    setEncryptedText(encrypt(text));
  }, [text]);

  useEffect(() => {
    setText(decrypt(encryptedText));
  }, [encryptedText]);

  return (
    <form>
      <label>
        Ingresa tu texto:
        <textarea value={text} onChange={handleChange} />
      </label>
      <button type="submit" onClick={() => setText('')}>Encrriptar</button>
      <button onClick={() => setEncryptedText('')}>Desencriptar</button>
      <p>Texto encriptado: {encryptedText}</p>
    </form>
  );
}

export default Prueba;
