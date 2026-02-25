import type { MessageInstance } from "antd/es/message/interface";

let messageApi: MessageInstance | null = null;

const assertMessageApi = () => {
  if (!messageApi) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("messageApi is not initialized");
    }
    return false;
  }
  return true;
};

export const MessageBox = (api: MessageInstance) => {
  messageApi = api;
};

export const appMessage = {
  success: (content: string, duration = 2) => {
    if (!assertMessageApi()) return;
    messageApi!.success({ content, duration });
  },
  error: (content: string, duration = 2) => {
    if (!assertMessageApi()) return;
    messageApi!.error({ content, duration });
  },
  warning: (content: string, duration = 2) => {
    if (!assertMessageApi()) return;
    messageApi!.warning({ content, duration });
  },
  info: (content: string, duration = 2) => {
    if (!assertMessageApi()) return;
    messageApi!.info({ content, duration });
  },
};
