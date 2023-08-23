




import './index.css';
import Createnote from './Component/Creatnote';

import { ThemeContext, themes } from './context/themContext';
import { useState } from 'react';

function App() {
  const [theme, setthem] = useState(themes.light)
  const body = document.body


  const handleOnClcik = () => {
    if (theme == "light") {
      body.classList.remove("style1")
      body.classList.add("style")

      setthem(themes.dark)
      console.log(theme)
    }
    else if (theme == "dark") {
      body.classList.add("style1")

      setthem(themes.light)
      console.log(theme)
    }

  }
  return (
    <>

      <ThemeContext.Provider value={{ theme, handleOnClcik }}>


        <Createnote theme={theme} />

      </ThemeContext.Provider>




    </>

  );
}

export default App;



