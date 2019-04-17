interface NpmsIODataResponse {
  data: NpmsIOData;
}

interface NpmsIOData {
  analyzedAt: string;
  collected: Collected;
  evaluation: Evaluation;
  score: Score;
}

interface Collected {
  metadata: Metadata;
  npm: Npm;
  source: Source;
}

interface Metadata {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  publisher: Publisher;
  maintainers: MaintainersItem[];
  repository: Repository;
  links: Links;
  license: string;
  dependencies: Dependencies;
  releases: ReleasesItem[];
  hasSelectiveFiles: boolean;
}

interface Publisher {
  username: string;
  email: string;
}

interface MaintainersItem {
  username: string;
  email: string;
}

interface Repository {
  type: string;
  url: string;
  directory: string;
}

interface Links {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
}

interface Dependencies {
  'loose-envify': string;
  'object-assign': string;
  'prop-types': string;
  scheduler: string;
}

interface ReleasesItem {
  from: string;
  to: string;
  count: number;
}

interface Npm {
  downloads: DownloadsItem[];
  dependentsCount: number;
  starsCount: number;
}

interface DownloadsItem {
  from: string;
  to: string;
  count: number;
}

interface Source {
  files: Files;
  linters: string[];
  coverage: number;
}

interface Files {
  readmeSize: number;
  testsSize: number;
  hasChangelog: boolean;
}

interface Evaluation {
  quality: Quality;
  popularity: Popularity;
  maintenance: Maintenance;
}

interface Quality {
  carefulness: number;
  tests: number;
  health: number;
  branding: number;
}

interface Popularity {
  communityInterest: number;
  downloadsCount: number;
  downloadsAcceleration: number;
  dependentsCount: number;
}

interface Maintenance {
  releasesFrequency: number;
  commitsFrequency: number;
  openIssues: number;
  issuesDistribution: number;
}

interface Score {
  final: number;
  detail: Detail;
}

interface Detail {
  quality: number;
  popularity: number;
  maintenance: number;
}

interface ChangelogMDDataResponse {
  data: ChangelogMDData;
}

interface ChangelogMDData {
  crawledAt: string;
  href: string;
  repo: string;
  changelog: string;
  contents: ContentsItem[];
}

interface ContentsItem {
  version: string;
  date: string;
  body: string;
}

interface GitHubReleasesDataResponse {
  data: GitHubReleases[];
}

interface GitHubReleases {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  author: Author;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: any[];
  tarball_url: string;
  zipball_url: string;
  body: string;
}
interface Author {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
