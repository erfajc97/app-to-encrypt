import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import imgalu from '../assets/Img/Vector.png';
import info from '../assets/Img/info.png';


const Encrypted = () => {


        function replaceVowels(text) {
       
        return text.replace(/a/ig, 'ai').replace(/e/ig, 'enter').replace(/i/ig, 'imes').replace(/o/ig, 'ober').replace(/u/ig, 'ufat');
        }

        function restoreVowels(text) {
        
        return text.replace(/ai/ig, 'a').replace(/enter/ig, 'e').replace(/imes/ig, 'i').replace(/ober/ig, 'o').replace(/ufat/ig, 'u').replace(/mes/ig,'');
        }

        const [message ,setMessage] = useState('');
        const [modifiedText, setModifiedText] = React.useState('');


        const handleChange = (e) => {
            setMessage(e.target.value)
        }
        
        

        function handleSubmit(event) {
            event.preventDefault();
            setModifiedText(replaceVowels(message));
            setMessage(''); 
        }

    //    ||
        function handleRestore(event) {
            event.preventDefault();
            setModifiedText(restoreVowels(message));
            setMessage(''); 
    }

      function handleCopy(event) {
        event.preventDefault();
        navigator.clipboard.writeText(modifiedText);
    }

    return (

        <div className="container">
            

            <div className="containerlogo">


        <img className='logo' src={imgalu} alt="vector" />
            </div>

            <form onSubmit={handleSubmit}>

                <div className="contendorEncryptado">


                    <label>
                        <textarea placeholder='Ingrese texto' value={message} onChange={handleChange} />
                    </label>
        <div className="infoImg">

         <img className='infopng' src={info} alt="vector" />
         <p>Solo letras minusculas y sin acentos</p>

        </div>
                    <div className="button">

                        <button className='btn-encryotado' type="submit" onClick={handleSubmit} >Encriptar</button>
                        <button onClick={handleRestore}>Desencriptar</button>

                    </div>
            
                </div>


                    <div className="contenedorModificador">

                        <div className="textoModificado">

                        <p>{modifiedText}</p>
    
                        </div>

                        <button className='btn-copiar' onClick={handleCopy}>Copiar</button>

                    </div>
            </form>

        </div>


    );
};

export default Encrypted;