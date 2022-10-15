import { Envelope } from "phosphor-react";

import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";

import "./styles/global.css";

export function App() {
  return (
    <TextInput.Root>
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>
      <TextInput.Input placeholder="This is a simple input" />
    </TextInput.Root>
  );
}
