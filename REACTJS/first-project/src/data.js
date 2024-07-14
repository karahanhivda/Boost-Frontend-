/*export*/ let firstName = "Hivda Karahan";
export let age = 25;
export let education = {
    collage: "AU",
    master: "IKCU"
}
export let image = [
    "https://cdn.pixabay.com/photo/2024/06/21/08/21/hut-8843868_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/09/25/12/49/trees-8274904_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/15/15/46/cat-8575641_640.jpg"
]

export default firstName;

// bir yapıda bir tane export default bulunabilir
//"export default firstName" olarak tanımladığımızda footer içinde "import firstName" diye tanımlamamız gerek
// "export let firstName" tanımlarsak footer içinde "import {firstName}" olarak tanımlamalıyız