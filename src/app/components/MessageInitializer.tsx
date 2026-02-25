"use client";

import { message } from "antd";
import { useEffect } from "react";
import { MessageBox } from "@/utils/messageBox.util";

export default function MessageInitializer() {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    MessageBox(messageApi);
  }, [messageApi]);

  return <>{contextHolder}</>;
}