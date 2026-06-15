/** Keyboard/screen-reader shortcut past the fixed header to the page content. */
const SkipLink = () => (
  <a
    href="#main"
    className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-earth focus:px-4 focus:py-2 focus:text-earth-foreground"
  >
    Saltar para o conteúdo
  </a>
);

export default SkipLink;
