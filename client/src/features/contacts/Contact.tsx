import React from "react";
import { Card } from "react-bootstrap";
import { useAppSelector } from "../../app/hooks";
import { getContact } from "./contactsSlice";

export default function Contact({ contactIndex }: { contactIndex: number }) {
  const { name } = useAppSelector(getContact(contactIndex));
  return (
    <Card style={{ margin: "auto", width: "70%" }} body>
      {name}
    </Card>
  );
}
