// import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

//let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
//const handleSelectItem = (item: string) => {
//  console.log(item);
//};
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          {" "}
          Hello <span>World</span>
        </Alert>
      )}
      {/*//color="secondary"*/}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
      {/*
      onClick={() => console.log("Clicked")
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />*/}
    </div>
  );
}
export default App;
