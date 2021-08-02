import { AbstractControl } from "@angular/forms";

export function FirstLetterUpperCaaseValidator(control: AbstractControl) {

	let value = control.value;
	if (!value) return null;
	if (value.length === 0) return null;

	const firstLetter = value[0];
	if (firstLetter !== firstLetter.toUpperCase()) {
		return {
			FirstLetterUpperCaaseValidator: {
				'message': 'The first letter must be uppercase'
			}

		}
	}
	return null;
}

// function AgeValidator(control: AbstractControl): { [key: string]: boolean } | null {
// 	if (control.value > 18) {
// 		return { 'age': true };
// 	}
// 	return null;
// }