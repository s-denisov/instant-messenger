import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useAppSelector } from "../../app/hooks";
import { getMessage } from "./chatSlice";

export interface MessageProps {
  messageText: string;
  isFromUser: boolean;
}

export default function Message({ messageIndex }: { messageIndex: number }) {
  const { messageText, isFromUser } = useAppSelector(getMessage(messageIndex));
  return (
    <Card
      style={{
        maxWidth: "15vw",
        marginTop: "1vh",
        alignSelf: isFromUser ? "flex-end" : "flex-start",
      }}
      body
      bg={isFromUser ? "primary" : "secondary"}
      text="light"
    >
      {messageText}
    </Card>
  );
}
