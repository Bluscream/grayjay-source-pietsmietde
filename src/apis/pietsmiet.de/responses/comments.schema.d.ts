/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CommentsSchema = CommentsResponse;

export interface CommentsResponse {
	readonly data: Datum[];
	readonly links: Links;
	readonly meta: Meta;
	readonly success: boolean;
}
export interface Datum {
	readonly id: number;
	readonly created_at: string;
	readonly text: string;
	readonly approved: boolean;
	readonly timestamp: number | null;
	readonly pinned: boolean;
	readonly count_replies: number;
	readonly likes_count: number;
	readonly dislikes_count: number;
	readonly user: User;
	readonly is_reply: boolean;
	readonly reply: number | null;
}
export interface User {
	readonly id: number;
	readonly url_slug: string;
	readonly username: string;
	readonly name: string;
	readonly name_possessive: string;
	readonly description: null;
	readonly team: boolean;
	readonly blocked: boolean;
	readonly public_profile: boolean;
	readonly banner: null;
	readonly avatar: Avatar | null;
	readonly reputation: number;
	readonly reputation_pretty: string;
	readonly preferences: Preferences;
	readonly gifted_subscriptions_count: number;
	readonly created_at: string;
	readonly updated_at: string;
	subscribed?: boolean;
	subscription_streak?: number;
	subscription_supporter?: boolean;
}
export interface Avatar {
	readonly id: number;
	readonly collection: string;
	readonly remote_url: null | string;
	readonly variations: Variation[];
}
export interface Variation {
	readonly height: number;
	readonly url: string;
	file?: string;
}
export interface Preferences {
	readonly public_profile: boolean;
	readonly subscription_enable_identification: boolean;
}
export interface Links {
	readonly first: string;
	readonly last: string;
	readonly prev: null;
	readonly next: null;
}
export interface Meta {
	readonly current_page: number;
	readonly from: number;
	readonly last_page: number;
	readonly links: Link[];
	readonly path: string;
	readonly per_page: number;
	readonly to: number;
	readonly total: number;
}
export interface Link {
	readonly url: null | string;
	readonly label: string;
	readonly active: boolean;
}
