// consts.ts

// Platform constants
export interface PlatformConstants {
    PLATFORM: string;
    PLATFORM_SHORT: string;
  }
  
  export const platform: PlatformConstants = {
    PLATFORM: "PietsmietDE",
    PLATFORM_SHORT: "PSDE"
  };
  
  // Limit constants
  export interface LimitConstants {
    VIDEOS: number;
    COMMENTS: number;
  }
  
  export const limits: LimitConstants = {
    VIDEOS: 500,
    COMMENTS: 100
  };
  
  // Order constants
  export interface OrderConstants {
    VIDEOS: string;
    COMMENTS: string;
  }
  
  export const order: OrderConstants = {
    VIDEOS: "latest",
    COMMENTS: "latest"
  };
  
  // Stream constants
  export interface StreamConstants {
    LANGUAGE: string;
  }
  
  export const stream: StreamConstants = {
    LANGUAGE: "German"
  };
  
  // Base URL constants
  export interface UrlBaseConstants {
    BASE: string;
    CHANNEL: string;
    PROFILE: string;
  }
  
  export const urlBase: UrlBaseConstants = {
    BASE: "https://www.pietsmiet.de",
    CHANNEL: `${urlBase.BASE}/videos/channels/`,
    PROFILE: `${urlBase.BASE}/profile/`
  };
  
  // API URL constants
  export interface ApiUrlConstants {
    CONFIG: string;
    CHANNELS: string;
    HOME: string;
    PLAYLIST: string;
    PLAYLISTS: string;
    VIDEO_DETAILS: string;
    VIDEO_PLAYER: string;
    COMMENTS: string;
    SEARCH: string;
  }
  
  export const apiUrl: ApiUrlConstants = {
    CONFIG: `${urlBase.BASE}/api/v1/config/i`,
    CHANNELS: `${urlBase.BASE}/api/v1/videos/channels?page=`,
    HOME: `${urlBase.BASE}/api/v1/videos?limit=${limits.VIDEOS}&order=${order.VIDEOS}&prioritize_featured=0&page=`,
    PLAYLIST: `${urlBase.BASE}/api/v1/videos/playlists/`,
    PLAYLISTS: `${urlBase.BASE}/api/v1/videos/playlists?limit=${limits.VIDEOS}&order=${order.VIDEOS}&page=1`,
    VIDEO_DETAILS: `${urlBase.BASE}/api/v1/videos/`, 
    VIDEO_PLAYER: `${urlBase.BASE}/api/v1/utility/player?preset=quality&video=`,
    COMMENTS: `${urlBase.BASE}/api/v1/utility/comments?order=${order.COMMENTS}&type=video&limit=${limits.COMMENTS}&id=`, 
    SEARCH: `${urlBase.BASE}/api/v1/search?page=`
  };
  
  // URL constants
  export interface UrlConstants {
    ICON: string;
    ICON_PNG: string;
    BANNER: string;
    BANNER_PNG: string;
    PLACEHOLDER_AVATAR: string;
  }
  
  export const urls: UrlConstants = {
    ICON: `${urlBase.BASE}/assets/pietsmiet/brand/icon.svg`,
    ICON_PNG: "https://i.vgy.me/CZ2jjB.png", 
    BANNER: `${urlBase.BASE}/assets/pietsmiet/brand/wordmark-plain-light-detail.svg`,
    BANNER_PNG: "https://i.imgur.com/8D68cRq.png", 
    PLACEHOLDER_AVATAR: `${urlBase.BASE}/assets/pietsmiet/placeholder-1-1.jpg`
  };
  
  // Regex constants
  export interface RegexConstants {
    VIDEO_URL: RegExp;
    CHANNEL_URL: RegExp;
    PLAYLIST_URL: RegExp;
  }
  
  export const regex: RegexConstants = {
    VIDEO_URL: /https:\/\/www\.pietsmiet\.de\/videos\/(\d+)(.*)/,
    CHANNEL_URL: /https:\/\/www\.pietsmiet\.de\/videos\/channels\/(.*)/,
    PLAYLIST_URL: /https:\/\/www\.pietsmiet\.de\/videos\/playlists\/(.*)/
  };
  
  // Proxy servers
  export interface PspProxyServers {
    SERVERS: string[];
  }
  
  export const pspProxyServers: PspProxyServers = {
    SERVERS: [
      "https://ytapi.minopia.de/",
      "https://ytapi2.minopia.de/"
    ]
  };
  
  // Header integrity
  export interface HeaderIntegrity {
    INTEGRITY: string;
  }
  
  export const headerIntegrity: HeaderIntegrity = {
    INTEGRITY: 'X-Origin-Integrity'
  };
  
  // Channel icons
  export interface ChannelIcons {
    [channelId: number]: string;
  }
  
  export const channelIcons: ChannelIcons = {
    8: "https://yt3.googleusercontent.com/ytc/AIdro_nMgWqMfXY78nUTzabB0TvSF1OHeUtMc93WKpG2hnbRW3k=s176-c-k-c0x00ffffff-no-rj", 
    9: "https://yt3.googleusercontent.com/qR-4gEbPO0XQlSEwHNgNt7EG5dB_sjQ5WVExWhT11D9ItY3G24l8Egw7isWZhcsUGYcfjaT4tg=s176-c-k-c0x00ffffff-no-rj", 
    10: "https://yt3.googleusercontent.com/ytc/AIdro_nI1TZILbTDn38tNbzDb_K2rxe6c5V7UGn4hVjG2DX4jg=s176-c-k-c0x00ffffff-no-rj", 
    12: "https://yt3.googleusercontent.com/ytc/AIdro_kej_tg4mojF1qht3fNepeKyR10sAlVK4oBwUYL2hAeSg=s176-c-k-c0x00ffffff-no-rj", 
    37: urls.ICON_PNG, 
    44: "https://yt3.googleusercontent.com/ytc/AIdro_nnAWki_jzSkHEzvkkT7TDlb-WxDBIc-rcqhFoEsp0tMg=s176-c-k-c0x00ffffff-no-rj"
  };
  