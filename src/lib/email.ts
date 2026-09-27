// The contact email is assembled at runtime so it never appears as plain text in the
// served HTML, where address-harvesting bots look for it. Never hard-code it elsewhere.
const user = 'joe';
const domain = ['michiana', 'dev'].join('.');

export const getEmail = () => `${user}@${domain}`;

/** Fill every `<a data-email>` on the page with a working mailto link.
 *  The link keeps its own text if it has `data-email-label`; otherwise it shows the address. */
export function hydrateEmailLinks(root: ParentNode = document) {
  const email = getEmail();
  root.querySelectorAll<HTMLAnchorElement>('a[data-email]').forEach((a) => {
    a.href = `mailto:${email}`;
    if (!a.hasAttribute('data-email-label')) a.textContent = email;
  });
}
