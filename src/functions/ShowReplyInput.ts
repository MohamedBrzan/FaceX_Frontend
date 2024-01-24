const ShowReplyInput = (id: string) => {
  const comment = Array.from(
    document.querySelectorAll('.comments .comment')
  ).find((c) => c.getAttribute('data-comment') === id);

  const replyInputSection =
    comment?.firstElementChild?.lastElementChild?.lastElementChild
      ?.lastElementChild;

  replyInputSection?.classList.remove('hidden');

  const replyForm = replyInputSection?.lastElementChild
    ?.lastElementChild as HTMLInputElement;
  (replyForm.firstElementChild as HTMLInputElement).focus();
};

export default ShowReplyInput;
