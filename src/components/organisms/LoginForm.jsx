"use client";

import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function LoginForm() {
  return (
    <form>
      <Input label="Email" type="email" />
      <Input label="Hasło" type="password" />
      <Button type="submit">Zaloguj</Button>
    </form>
  );
}
