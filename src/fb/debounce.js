let debounce = (clb, timer) => {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        let context = this;
        timeout = setTimeout(clb.bind(context, ...args), timer);
    }
}

const printCiao = () => {
    console.log('ciaooo');
}
const debouncedCiao = debounce(printCiao, 2000);

printCiao();
debouncedCiao();
debouncedCiao();
debouncedCiao();
debouncedCiao();