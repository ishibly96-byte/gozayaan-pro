export const getAssetPath = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  
  // Remove leading slash if present to avoid double slashes with BASE_URL
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
