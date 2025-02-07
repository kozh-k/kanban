import React, { useState } from 'react';

function RegistForm() {
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');

   return (
      <form>
         <input type="text" placeholder="Имя" value={name} onChange={e => setName(e.target.value)}/>
         <input type="text" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}/>
         <button>Зарегистрироваться</button>
         {/* <p>или войдите через Google</p>
         <div><img src="./assets/images/google-icon.svg" alt="google"></img></div> */}
      </form>
   )
}

export default RegistForm;

