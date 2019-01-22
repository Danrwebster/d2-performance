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

export interface IHistoricalStatsValuePair {
	value: number;
	displayValue: string;
}

export interface IHistoricalStatValue {
	statId: string;
	basic: IHistoricalStatsValuePair;
	pga?: IHistoricalStatsValuePair;
	activityId?: string;
	weighted?: any;
}

export interface IHistoricalStatsByType {
	activitiesCleared: IHistoricalStatValue;
	activitiesEntered: IHistoricalStatValue;
	adventuresCompleted: IHistoricalStatValue;
	allParticipantsCount: IHistoricalStatValue;
	allParticipantsScore: IHistoricalStatValue;
	allParticipantsTimePlayed: IHistoricalStatValue;
	assists: IHistoricalStatValue;
	averageDeathDistance: IHistoricalStatValue;
	averageKillDistance: IHistoricalStatValue;
	averageLifespan: IHistoricalStatValue;
	bestSingleGameKills: IHistoricalStatValue;
	bestSingleGameScore: IHistoricalStatValue;
	deaths: IHistoricalStatValue;
	efficiency: IHistoricalStatValue;
	fastestCompletionMs: IHistoricalStatValue;
	fireTeamActivities: IHistoricalStatValue;
	heroicPublicEventsCompleted: IHistoricalStatValue;
	highestCharacterLevel: IHistoricalStatValue;
	highestLightLevel: IHistoricalStatValue;
	kills: IHistoricalStatValue;
	killsDeathsAssists: IHistoricalStatValue;
	killsDeathsRatio: IHistoricalStatValue;
	longestKillDistance: IHistoricalStatValue;
	longestKillSpree: IHistoricalStatValue;
	longestSingleLife: IHistoricalStatValue;
	mostPrecisionKills: IHistoricalStatValue;
	objectivesCompleted: IHistoricalStatValue;
	opponentsDefeated: IHistoricalStatValue;
	orbsDropped: IHistoricalStatValue;
	orbsGathered: IHistoricalStatValue;
	precisionKills: IHistoricalStatValue;
	publicEventsCompleted: IHistoricalStatValue;
	remainingTimeAfterQuitSeconds: IHistoricalStatValue;
	resurrectionsPerformed: IHistoricalStatValue;
	resurrectionsReceived: IHistoricalStatValue;
	score: IHistoricalStatValue;
	secondsPlayed: IHistoricalStatValue;
	suicides: IHistoricalStatValue;
	teamScore: IHistoricalStatValue;
	totalActivityDurationSeconds: IHistoricalStatValue;
	totalDeathDistance: IHistoricalStatValue;
	totalKillDistance: IHistoricalStatValue;
	weaponBestType: IHistoricalStatValue;
	weaponKillsAbility: IHistoricalStatValue;
	weaponKillsAutoRifle: IHistoricalStatValue;
	weaponKillsBeamRifle: IHistoricalStatValue;
	weaponKillsBow: IHistoricalStatValue;
	weaponKillsFusionRifle: IHistoricalStatValue;
	weaponKillsGrenade: IHistoricalStatValue;
	weaponKillsGrenadeLauncher: IHistoricalStatValue;
	weaponKillsHandCannon: IHistoricalStatValue;
	weaponKillsMelee: IHistoricalStatValue;
	weaponKillsPulseRifle: IHistoricalStatValue;
	weaponKillsRelic: IHistoricalStatValue;
	weaponKillsRocketLauncher: IHistoricalStatValue;
	weaponKillsScoutRifle: IHistoricalStatValue;
	weaponKillsShotgun: IHistoricalStatValue;
	weaponKillsSideArm: IHistoricalStatValue;
	weaponKillsSniper: IHistoricalStatValue;
	weaponKillsSubmachinegun: IHistoricalStatValue;
	weaponKillsSuper: IHistoricalStatValue;
	weaponKillsSword: IHistoricalStatValue;
	weaponKillsTraceRifle: IHistoricalStatValue;
}

export interface IHistoricalStatsByPeriod {
	allTime?: IHistoricalStatsByType;
	allTimeTier1?: IHistoricalStatsByType;
	allTimeTier2?: IHistoricalStatsByType;
	allTimeTier3?: IHistoricalStatsByType;
	daily?: any;
	monthly?: any;
	weighted?: any;
}

export interface IStatsResultsGroup {
	allPvP: IHistoricalStatsByPeriod;
	allPvE: IHistoricalStatsByPeriod;
}

export interface ICharacterGeneralStat {
	characterId: string;
	deleted: boolean;
	results: IStatsResultsGroup;
	merged: IHistoricalStatsByPeriod;
}

export interface IHistoricalStatsAccount {
	mergedDeletedCharacters: {
		results: IStatsResultsGroup;
		merged: IHistoricalStatsByPeriod;
	};
	mergedAllCharacters: {
		results: IStatsResultsGroup;
		merged: IHistoricalStatsByPeriod;
	};
	characters: {
		results: IStatsResultsGroup;
		merged: IHistoricalStatsByPeriod;
	};
}
