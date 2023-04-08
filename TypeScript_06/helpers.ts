import { Validation } from "./types"

export function validate(validationInput: Validation): boolean {
    if (typeof validationInput.value === 'string') {
        if (validationInput.value.length !== 0 && validationInput.value.length > validationInput.min && validationInput.value.length <= validationInput.max) {
            return true
        } else {
            return false
        }
    }
    if (typeof validationInput.value === 'number') {
        if (validationInput.value && validationInput.value >= validationInput.min && validationInput.value <= validationInput.max) {
            return true
        } else {
            return false
        }
    }
    return false
}