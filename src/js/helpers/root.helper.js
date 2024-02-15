
export function getRoot(root = _ROOT) {
    return document.getElementById(root)
}

export function cleanRoot() {
    getRoot().innerHTML = ''
}