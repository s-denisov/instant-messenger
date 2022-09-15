import React from "react";
import { Col } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Contact from "./Contact";
import { totalContacts } from "./contactsSlice";

export default function ContactsList() {
  const numContacts = useAppSelector(totalContacts);
  const dispatch = useAppDispatch();
  const contactDisplay = [];
  for (let i = 0; i < numContacts; i++) {
    contactDisplay.push(<Contact contactIndex={i} />);
  }
  return <div style={{ flexGrow: 1 }}>{contactDisplay}</div>;
}
