import { useState } from "react";
import "./index.css";
import "react-widgets/styles.css";
import FormInput from "./components/FormInput";

//import { Multiselect } from "react-widgets/cjs";

function App() {
  const [gender, setgender] = useState<string>();
 
  return (
    <div className="main-container p-5">
      <div className="container flex item-center justify-center h-screen m-5">
        <div className="left-div bg-teal-600 w-[30%] rounded-s-lg">
          <h3 className="m-5 py-5 text-center">Pharmadepot</h3>
        </div>
        <div className="right-div  w-[50%]">
          <FormInput setgender={setgender} />
        </div>
      </div>
    </div>
  );
}

export default App;
