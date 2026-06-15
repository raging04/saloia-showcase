/**
 * Triggers a download (or opens in a new tab as a fallback) for a file served
 * from the site root, e.g. a menu PDF in /public.
 */
export function downloadFile(filename: string) {
  try {
    const link = document.createElement("a");
    link.href = `/${filename}`;
    link.download = filename;
    link.target = "_blank";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Erro ao fazer download:", error);
    // Fallback: open in a new tab
    window.open(`/${filename}`, "_blank", "noopener");
  }
}
