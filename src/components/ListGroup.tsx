//import { Fragment } from "react";
//import { MouseEvent } from "react";
import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string => void)
  onSelectItem: (item: string) => void; //onClick
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //let selectedIndex = 0;

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //arr[0] // variable (selectedIndex)
  //arr[1] // updater function
  //items = [];

  //const

  //event handler
  //const handleClick = (event: MouseEvent) => console.log(event);
  //type annotation

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            //"list-group-item active"
            //onClick={(event) => console.log("Clicked " + item, index, event)
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            //onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
