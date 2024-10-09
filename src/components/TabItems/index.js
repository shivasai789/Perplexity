import "./index.css";

const TabItems = (props) => {
  const { tabDetails } = props;
  const { id, name, icon } = tabDetails;
  return (
    <li className={id === "TOP" ? "tab-item1 active-tab" : "tab-item1"}>
      {icon}
      <p style={{ marginLeft: "5px" }}>{name}</p>
    </li>
  );
};

export default TabItems;
