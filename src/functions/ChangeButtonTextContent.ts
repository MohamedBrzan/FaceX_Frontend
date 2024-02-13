export default (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  text: string
) => {
  const target = e.target as HTMLDivElement;
  if (target) {
    console.log(target);
    if (target.getAttribute('class')?.includes('text')) {
      target.parentElement?.classList.remove('unconnected');
      target.parentElement?.classList.add('connected');
      target.textContent = text;
    } else if (target?.children[0]?.getAttribute('class')?.includes('text')) {
      target.classList.remove('unconnected');
      target.classList.add('connected');
      target.children[0].classList.add('connected');
      target.children[0].textContent = text;
    }
  }
};
