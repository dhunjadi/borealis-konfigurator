import React, { useState } from "react";

export default function ThirdStep({ answer }) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    tel: "",
    add: "",
  });

  const handleChange = (e) => {
    const currentValue = e.target.value;
    const inputName = e.target.name;

    setInput((prev) => {
      if (inputName === "name") {
        return {
          name: currentValue,
          email: prev.email,
          tel: prev.tel,
          add: prev.add,
        };
      } else if (inputName === "email") {
        return {
          name: prev.name,
          email: currentValue,
          tel: prev.tel,
          add: prev.add,
        };
      } else if (inputName === "tel") {
        return {
          name: prev.name,
          email: prev.email,
          tel: currentValue,
          add: prev.add,
        };
      } else if (inputName === "add") {
        return {
          name: prev.name,
          email: prev.email,
          tel: prev.tel,
          add: currentValue,
        };
      }
    });
  };

console.log(input)
  return (
    <div>
      <textarea
        name='name'
        placeholder='Ime i prezime*'
        value={input.name}
        onChange={handleChange}
      />
       <textarea
        name='email'
        placeholder='Email adresa*'
        value={input.email}
        onChange={handleChange}
      />
       <textarea
        name='tel'
        placeholder='Broj telefona*'
        value={input.tel}
        onChange={handleChange}
      />
       <textarea
        name='add'
        placeholder='Napomena (opcionalno)'
        value={input.add}
        onChange={handleChange}
      />
    </div>
  );
}
