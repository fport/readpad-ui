export default (redirectLink, isBlank) => {
    const link = document.createElement('a');
    link.href = redirectLink;

    if (isBlank) {
        link.target = 'blank';
        link.rel = 'noopener noreferrer'
    }

    link.click();
};
