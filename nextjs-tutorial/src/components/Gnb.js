import { Menu } from "semantic-ui-react";

const Gnb = () => {
  const activeItem = "home";
  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        // onClick={this.handleItemClick}
      />
      <Menu.Item
        name="messages"
        active={activeItem === "messages"}
        // onClick={this.handleItemClick}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        // onClick={this.handleItemClick}
      />
    </Menu>
  );
};

export default Gnb;
