export default (className: string, text: string, index: number) => {
  Array.from(document.querySelectorAll(className)).forEach((followBtn) => {
    followBtn.addEventListener(
      'click',
      () => (followBtn.children[index].textContent = text)
    );
  });
};
