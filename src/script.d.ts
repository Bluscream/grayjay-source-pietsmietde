//Reference Scriptfile
//Intended exclusively for auto-complete in your IDE, not for execution

declare class ScriptException extends Error {
    //If only one parameter is provided, acts as msg
    constructor(type: string, msg: string);
}

declare class LoginRequiredException extends ScriptException {
    constructor(msg: string);
}
//Alias
declare class ScriptLoginRequiredException extends ScriptException {
    constructor(msg: string);
}

declare class CaptchaRequiredException extends ScriptException {
    constructor(url: string, body: string);
}

declare class CriticalException extends ScriptException {
    constructor(msg: string);
}

declare class UnavailableException extends ScriptException {
    constructor(msg: string);
}

declare class AgeException extends ScriptException {
    constructor(msg: string);
}

declare class TimeoutException extends ScriptException {
    constructor(msg: string);
}

declare class ScriptImplementationException extends ScriptException {
    constructor(msg: string);
}

declare class Thumbnails {
    constructor(thumbnails: Thumbnail[])
}
declare class Thumbnail {
    url: string
    quality: number
    constructor(url, quality) {
        this.url = url ?? ""; //string
        this.quality = quality ?? 0; //number
    }
}

declare class PlatformID {
    platform: string
    id: string
    pluginId: string
    claimType: number = 0
    claimFieldType: number = -1
    constructor(platform: string, id: string, pluginId: string, claimType: number = 0, claimFieldType: number = -1);
}

declare class ResultCapabilities {
    constructor(types: string[], sorts: string[], filters: FilterGroup[])
}
declare class FilterGroup {
    constructor(name: string, filters: string[], isMultiSelect: boolean, id: string);
}
declare class FilterCapability {
    constructor(name: string, value: string, id: string);
}


declare class PlatformAuthorLink {
    constructor(id: PlatformID, name: string, url: string, thumbnail: string, subscribers: number?, membershipUrl: string?);
}

declare class PlatformAuthorMembershipLink {
    constructor(id: PlatformID, name: string, url: string, thumbnail: string, subscribers: number?, membershipUrl: string?);
}

declare interface PlatformContentDef {
    id: PlatformID,
    name: string,
    thumbnails: Thumbnails,
    author: PlatformAuthorLink,
    datetime: number,
    url: string
}
declare interface PlatformContent { }

declare interface PlatformNestedMediaContentDef extends PlatformContentDef {
    contentUrl: string,
    contentName: string?,
    contentDescription: string?,
    contentProvider: string?,
    contentThumbnails: Thumbnails
}
declare class PlatformNestedMediaContent {
    constructor(obj: PlatformNestedMediaContentDef);
}

declare interface PlatformLockedContentDef extends PlatformContentDef {
    contentName: string?,
    contentThumbnails: Thumbnails?,
    unlockUrl: string,
    lockDescription: string?,
}
declare class PlatformLockedContent {
    constructor(obj: PlatformLockedContentDef);
}


declare interface PlatformVideoDef extends PlatformContentDef {
    thumbnails: Thumbnails,
    author: PlatformAuthorLink,

    duration: number,
    viewCount: long,
    isLive: boolean,
    shareUrl: string?
}
declare class PlatformVideo implements PlatformContent {
    constructor(obj: PlatformVideoDef);
}


declare interface PlatformVideoDetailsDef extends PlatformVideoDef {
    description: string,
    video: VideoSourceDescriptor,
    live: IVideoSource,
    rating: IRating,
    subtitles: SubtitleSource[]
}
declare class PlatformVideoDetails extends PlatformVideo {
    constructor(obj: PlatformVideoDetailsDef);
}

declare interface PlatformPostDef extends PlatformContentDef {
    thumbnails: Thumbnails[],
    images: string[],
    description: string
}
declare class PlatformPost extends PlatformContent {
    constructor(obj: PlatformPostDef)
}

declare interface PlatformPostDetailsDef extends PlatformPostDef {
    rating: IRating,
    textType: number,
    content: String
}
declare class PlatformPostDetails extends PlatformPost {
    constructor(obj: PlatformPostDetailsDef);
}


//Sources
declare interface IVideoSourceDescriptor { }

declare interface MuxVideoSourceDescriptorDef {
    isUnMuxed: boolean,
    videoSources: VideoSource[]
}
declare class VideoSourceDescriptor implements IVideoSourceDescriptor {
    constructor(videoSourcesOrObj: VideoSource[]);
}

declare interface UnMuxVideoSourceDescriptorDef {
    isUnMuxed: boolean,
    videoSources: VideoSource[]
}
class UnMuxVideoSourceDescriptor implements IVideoSourceDescriptor {
    constructor(videoSourcesOrObj: VideoSource[], audioSources: AudioSource[]);
    constructor(videoSourcesOrObj: UnMuxVideoSourceDescriptorDef);
}

declare interface IVideoSource {

}
declare interface IAudioSource {

}
declare interface VideoUrlSourceDef implements IVideoSource {
    width: number,
    height: number,
    container: string,
    codec: string,
    name: string,
    bitrate: number,
    duration: number,
    url: string
}
declare class VideoUrlSource {
    constructor(obj: VideoUrlSourceDef);

    getRequestModifier(): RequestModifier?;
}
declare interface VideoUrlRangeSourceDef extends VideoUrlSource {
    itagId: number,
    initStart: number,
    initEnd: number,
    indexStart: number,
    indexEnd: number,
}
declare class VideoUrlRangeSource extends VideoUrlSource {
    constructor(obj: YTVideoSourceDef);
}
declare interface AudioUrlSourceDef {
    name: string,
    bitrate: number,
    container: string,
    codecs: string,
    duration: number,
    url: string,
    language: string
}
declare class AudioUrlSource implements IAudioSource {
    constructor(obj: AudioUrlSourceDef);

    getRequestModifier(): RequestModifier?;
}
declare interface AudioUrlRangeSourceDef extends AudioUrlSource {
    itagId: number,
    initStart: number,
    initEnd: number,
    indexStart: number,
    indexEnd: number,
    audioChannels: number
}
declare class AudioUrlRangeSource extends AudioUrlSource {
    constructor(obj: AudioUrlRangeSourceDef);
}
declare interface HLSSourceDef {
    name: string,
    duration: number,
    url: string,
    priority: boolean | undefined,
    language: string | undefined
}
declare class HLSSource implements IVideoSource {
    constructor(obj: HLSSourceDef);
}
declare interface DashSourceDef {
    name: string,
    duration: number,
    url: string,
    language: string | undefined
}
declare class DashSource implements IVideoSource {
    constructor(obj: DashSourceDef)
}

declare interface IRequest {
    url: string,
    headers: Map<string, string>
}
declare interface IRequestModifierDef {
    allowByteSkip: boolean
}
declare class RequestModifier {
    constructor(obj: IRequestModifierDef) { }

    modifyRequest(url: string, headers: Map<string, string>): IRequest;
}

//Channel
declare interface PlatformChannelDef {
    id: PlatformID,
    name: string,
    thumbnail: string,
    banner: string,
    subscribers: number,
    description: string,
    url: string,
    urlAlternatives: string[],
    links: Map<string> | undefined
}
declare class PlatformChannel {
    constructor(obj: PlatformChannelDef);
}

//Playlist
declare interface PlatformPlaylistDef implements PlatformContent {
    videoCount: number,
    thumbnail: string
}
declare class PlatformPlaylist extends PlatformContent {
    constructor(obj: PlatformPlaylistDef);
}
declare interface PlatformPlaylistDetailsDef implements PlatformPlaylistDef {
    contents: ContentPager
}
declare class PlatformPlaylistDetails extends PlatformContent {
    constructor(obj: PlatformPlaylistDetailsDef);
}


//Ratings
interface IRating {
    type: number
}
declare class RatingLikes implements IRating {
    constructor(likes: number);
}
declare class RatingLikesDislikes implements IRating {
    constructor(likes: number, dislikes: number);
}
declare class RatingScaler implements IRating {
    constructor(value: double);
}

declare interface CommentDef {
    contextUrl: string,
    author: PlatformAuthorLink,
    message: string,
    rating: IRating,
    date: long,
    replyCount: number,
    context: any
}
declare class PlatformComment {
    constructor(obj: CommentDef);
}

declare class PlaybackTracker {
    constructor(interval: number);

    setProgress(seconds: number);
}

declare class LiveEventPager {
    nextRequest = 4000;

    constructor(results: LiveEvent[], hasMore: boolean, context: any);

    hasMorePagers(): boolean
    nextPage(): LiveEventPager; //Could be self
}

declare class LiveEvent {
    constructor(type: number);
}
declare class LiveEventComment extends LiveEvent {
    constructor(name: string, message: string, thumbnail: string?, colorName: string?, badges: string[]);
}
declare class LiveEventEmojis extends LiveEvent {
    constructor(name: Map<string>);
}
declare class LiveEventDonation extends LiveEvent {
    constructor(amount: number, name: string, message: string, thumbnail: string?, expire: number, colorDonation: string?);
}
declare class LiveEventViewCount extends LiveEvent {
    constructor(viewCount: number);
}
declare class LiveEventRaid extends LiveEvent {
    constructor(targetUrl: string, targetName: string, targetThumbnail: string);
}



//Pagers
declare class ContentPager {
    constructor(results: PlatformContent[], hasMore: boolean);

    hasMorePagers(): boolean
    nextPage(): ContentPager?; //Could be self
}
declare class VideoPager {
    constructor(results: PlatformVideo[], hasMore: boolean);

    hasMorePagers(): boolean
    nextPage(): VideoPager?; //Could be self
}
declare class ChannelPager {
    constructor(results: PlatformChannel[], hasMore: boolean);

    hasMorePagers(): boolean;
    nextPage(): ChannelPager?; //Could be self
}
declare class PlaylistPager {
    constructor(results: PlatformPlaylist[], hasMore: boolean);

    hasMorePagers(): boolean;
    nextPage(): PlaylistPager?;
}
declare class CommentPager {
    constructor(results: PlatformComment[], hasMore: boolean);

    hasMorePagers(): boolean
    nextPage(): CommentPager?; //Could be self
}

interface Map<T> {
    [Key: string]: T;
}

//To override by plugin

interface Source {
    getHome(): VideoPager;

    enable(config: SourceConfig, settings: Any, savedState: string?);
    disable();

    saveState(): string;

    searchSuggestions(query: string): string[];
    search(query: string, type: string, order: string, filters): ContentPager;
    getSearchCapabilities(): ResultCapabilities

    //Optional
    searchChannelContents(channelUrl: string, query: string, type: string, order: string, filters): ContentPager;
    //Optional
    getSearchChannelContentsCapabilities(): ResultCapabilities;

    //Optional
    getChannelUrlByClaim(claimType: number, values: Map<number, String>)

    isChannelUrl(url: string): boolean;
    getChannel(url: string): PlatformChannel;

    getChannelContents(url: string, type: string, order: string, filters): ContentPager;
    getChannelCapabilities(): ResultCapabilities;

    isContentDetailsUrl(url: string): boolean;
    getContentDetails(url: string): PlatformContentDetails;

    //Optional
    getLiveEvents(url: string): LiveEventPager;

    //Optional
    getComments(url: string): CommentPager;
    //Optional
    getSubComments(comment: PlatformComment): CommentPager;

    //Optional
    getUserSubscriptions(): string[];
    //Optional
    getUserPlaylists(): string[];

    //Optional
    isPlaylistUrl(url: string): boolean;
    //Optional
    getPlaylist(url): string[];
}

const source: Source;

