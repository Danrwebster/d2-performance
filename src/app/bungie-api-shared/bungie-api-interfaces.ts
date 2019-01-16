export interface IBungieAPIResponse {
	Response: any;
	ErrorCode: number;
	ThrottleSeconds: number;
	ErrorStatus: string;
	Message: string;
	MessageData: any;
}

export interface IBungieNetUser {
	about: string;
	blizzardDisplayName?: string;
	xboxDisplayName?: string;
	psnDisplayName?: string;
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

export interface IDestinyMembership {
	iconPath: string;
	membershipType: number;
	membershipId: string;
	displayName: string;
}

export interface IMembershipProfile {
	destinyMemberships: IDestinyMembership[];
	bungieNetUser: IBungieNetUser;
}
