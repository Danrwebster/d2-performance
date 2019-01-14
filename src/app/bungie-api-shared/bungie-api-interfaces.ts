export interface IBungieAPIResponse {
	Response: any;
	ErrorCode: number;
	ThrottleSeconds: number;
	ErrorStatus: string;
	Message: string;
	MessageData: any;
}

export interface IGeneralUser {
	about: string;
	blizzardDisplayName: string;
	displayName: string;
	firstAccess: string;
	isDeleted: boolean;
	lastUpdate: string;
	locale: string;
	localeInheritDefault: boolean;
	membershipId: string;
	profilePicture: number;
	profilePicturePath: string;
	profileTheme: number;
	profileThemeName: string;
	showActivity: boolean;
	showGroupMessaging: boolean;
	statusDate: string;
	statusText: string;
	successMessageFlags: string;
	uniqueName: string;
	userTitle: number;
	userTitleDisplay: string;
}
