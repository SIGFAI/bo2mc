// Minecraft Zombies / bo2mc (DaffyDabz, Apache-2.0, on IW4L + chasmlol's 2010 Rust Rewrite Mashup): Black Ops II
// Zombies rounds every night in an endless Minecraft world, as one Rust game (IW4L) that reads Black Ops II's zone
// files from the player's own Steam install and downloads Minecraft 26.3's files from Mojang on first run.
//
// Upstream fetch (PLATFORM-SPEC section 4), not a rehost, for the same reason as library/rewrite-2010: iw4l.exe is
// built from a tree whose skate/ crates come from SK8-ENGINE/skate-3-rust-engine, which has no license. The app
// downloads the author's own zip, pinned, and installs it as released.
// Where: into the Black Ops II folder itself. iw4l.exe takes the folder it runs from as its games root when IW4L_GAMES
// is unset (crates/asset_transport/src/discover.rs: default_games_root), and a `t6:` map argument skips the MW2/Skate 3
// first-run dialogs (crates/launcher/src/main.rs). The author's Setup.ps1 (which writes an absolute path into .env and a
// desktop shortcut) is not needed and never run. iw4l.exe writes iw4l-artifacts\ (Minecraft files, settings, logs) next
// to itself at Play; Restore leaves that folder (card note).
//   node library/bo2mc/build.mjs       (outputs: library/lib.mjs)
import { asset, card, dl, emit, pinned, player } from '../lib.mjs';

const UP = {
  repo: 'https://github.com/DaffyDabz/bo2-minecraft-zombies', tag: 'v2026.10.05', commit: 'f4402fd9097fb2dc55c06790761f2b99271cac58',
  license: 'Apache-2.0', authors: ['DaffyDabz', 'chasmlol', 'vladtrc and IW4L contributors'],
  zip: { file: 'MinecraftZombies-2026-10-05.zip', sha256: '3844ddadb0e9eecba2654553324c6ac89aa432aaf1b86b9e1808c5dff3ccf422' }, // = GitHub digest
  root: 'MinecraftZombies',
};
const ID = 'bo2mc', VERSION = '2026.10.5', NAME = 'Minecraft Zombies';
const TAGLINE = 'Black Ops II Zombies every night, Minecraft every day: dig in, build walls and hold out against the rounds in an endless Minecraft world.';

const url = `${UP.repo}/releases/download/${UP.tag}/${UP.zip.file}`;
const zip = asset(UP.zip.file, await pinned(url, UP.zip.sha256), { zipped: true, upstream: url });
if (!zip.contents.some(c => c.path === `${UP.root}/iw4l.exe`)) throw new Error(`${UP.zip.file} has no ${UP.root}/iw4l.exe`);
const assets = [zip];

const make = (urls) => ({
  id: `sigf/${ID}`,
  version: VERSION,
  name: NAME,
  tagline: player(ID).tagline ?? TAGLINE,
  how_to_play: player(ID).howToPlay,
  kind: 'mashup', // a new engine re-plays both; Black Ops II itself never runs
  games: [
    { game: 'bo2', role: 'host', label: 'Call of Duty: Black Ops II', engine: 'IW4L (Rust rewrite of the IW engine, bo2zm fork) reading Black Ops II\'s zone files in place',
      apps: { steam: '202970' }, runtime: 'PC Steam install with Zombies (Nuketown Zombies map loaded), tested on the author\'s PC only', mode: 'offline solo; never Black Ops II\'s online services' },
    { game: 'minecraft', role: 'guest', label: 'Minecraft', mc: '26.3', uses: 'client files downloaded from Mojang on first run (about 125 MB)' },
  ],
  requires: [
    { id: 'bo2-zombies', page: 'https://store.steampowered.com/app/202970/', note: 'Black Ops II on Steam with Zombies installed; the Minecraft map is built on Nuketown Zombies (DLC 219092 on Steam), so you likely need it too. IW4L only reads the files' },
    { id: 'minecraft-java', page: 'https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc', note: 'own Minecraft: Java Edition; the game downloads 26.3\'s files from Mojang itself on first run' },
  ],
  install: [
    // As released (upstream fetch): only MinecraftZombies/ of the zip, into the Black Ops II folder (games root).
    { game: 'bo2', strategy: 'game-dir-snapshot', files: [
      { src: zip.name, dst: '{game}', root: UP.root, unpack: true, contents: zip.contents, ...dl(zip, urls) },
    ] },
  ],
  // Upstream's Play.bat / shortcut command line: Black Ops II's own front end with MINECRAFT next to NUKETOWN.
  launch: [{ game: 'bo2', exe: 'iw4l.exe', args: ['frontend', 't6:zm_nuked'] }],
  files: assets.map(a => ({ name: a.name, ...dl(a, urls) })),
  source: {
    repo: UP.repo, license: 'Apache-2.0 (upstream download)', upstream_license: UP.license, fetch: 'upstream', tag: UP.tag, commit: UP.commit,
    hosted: `https://github.com/SIGFAI/${ID}`, based_on: 'https://github.com/chasmlol/2010-rust-rewrite-mashup',
    linked: [
      { name: 'IW4L', repo: 'https://github.com/vladtrc/iw4L', license: 'Apache-2.0' },
      { name: 'skate crates (compiled in, off)', repo: 'https://github.com/SK8-ENGINE/skate-3-rust-engine', license: 'none (not redistributed by SIGF)' },
      { name: 'MinecraftOSS worldgen crates', license: 'not stated in the repo' },
    ],
  },
  media: {},
  built_by: { author: UP.authors[0], authors: UP.authors, packaged_by: 'SIGF' },
  idea_by: UP.authors[0],
  built_at: '2026-10-07T00:00:00.000Z',
  ...card(UP.repo),
  notes: player(ID).notes,
});

// No app fixture: the zip is 47 MB and not ours to commit.
emit({ slug: ID, version: VERSION, assets, fixtureAssets: null, make });
