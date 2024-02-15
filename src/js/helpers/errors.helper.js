import { getRoot } from "./root.helper";

export function throwCustomError(message, code) {
    const error = new Error(message)
    error.code = code
    throw error
}

export function displayError(message) {
    const root = getRoot();
    root.innerHTML = message
}