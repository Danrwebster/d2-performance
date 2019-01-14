import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'styleURL'
})
export class StyleURLPipe implements PipeTransform {

	transform(path: string): string {
		return `url(' ` + path + `')`;
	}

}
