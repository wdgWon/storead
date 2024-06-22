export const getExtensionFromContentType = (contentType: string): string => {
  switch (contentType.toLowerCase()) {
    case "image/jpeg":
      return "jpg";
    case "image/png":
      return "png";
    case "image/gif":
      return "gif";
    case "image/webp":
      return "webp";
    default:
      return "unknown";
  }
};
