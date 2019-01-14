import { Pipe, PipeTransform } from '@angular/core';
import { BG_IMG_ROOT, BG_IMG_FILE } from '../bungie-api-shared/bungie-api-endpoints';

@Pipe({
	name: 'themeBackground'
})
export class ThemeBackgroundPipe implements PipeTransform {

	transform(theme: string): string {
		return BG_IMG_ROOT + theme + BG_IMG_FILE;
	}

}
