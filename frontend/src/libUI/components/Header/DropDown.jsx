import { NavDropdown } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDropdownContext } from "../Context/NavbarContext";

export default function DropDown({ items, title }) {
  const { dropdownItems, addDropdownItem } = useDropdownContext();

  useEffect(() => {
    addDropdownItem(items);
  }, []);

  return (
    <NavDropdown
      title={title}
      id="basic-nav-dropdown"
      className="custom-dropdown"
    >
      {items.map((item, index) => (
        <NavDropdown.Item as={Link} key={index} to={item.page}>
          {item.label}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}
