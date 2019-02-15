
function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

let dateFields = document.querySelectorAll('.time-date');

dateFields.forEach(field => {
    setInterval(() => {
        let time = new Date().toLocaleTimeString();
        let date = new Date().toLocaleDateString().replace('.', '/');
        date = replaceAt(date, (date.length - 5), '-');

        field.innerHTML = `${time} <br/> ${date}`;
    }, 1000)
})