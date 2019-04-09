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
