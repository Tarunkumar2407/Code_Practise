import React, { useState } from "react";

const FormHandle = () => {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");

  const handleData = (e) => {
    // e.preventDefault()
    console.log(name)
    console.log(tnc)
    console.log(interest)
  }
  return (
    <div>
      <form onSubmit={handleData}>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <br></br>
        <select
          name="moviesNames"
          onChange={(e) => setInterest(e.target.value)}
        >
          <option value="Marvel">Marvel</option>
          <option value="Marvel">DC</option>
        </select>
        <br></br>
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        Agree to Terms and conditions<br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandle;
