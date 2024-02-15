import { getRoot } from "./root.helper";

export function displayLoading() {
    const root = getRoot();
    root.innerHTML = 'Loading...'
}

export function removeLoading() {
    const root = getRoot();
    root.innerHTML = ''
}