# Minecraft Zombies

Black Ops II Zombies every night, Minecraft every day: dig in, build walls and hold out against the rounds in an endless Minecraft world.

**Minecraft Zombies is made by [DaffyDabz](https://github.com/DaffyDabz).** All credit for the mod goes to them. It is built on [chasmlol/2010-rust-rewrite-mashup](https://github.com/chasmlol/2010-rust-rewrite-mashup) by chasmlol, vladtrc and IW4L contributors.

- Original project: https://github.com/DaffyDabz/bo2-minecraft-zombies
- Report bugs and ask questions there: https://github.com/DaffyDabz/bo2-minecraft-zombies/issues
- Upstream release packaged here: [v2026.10.05](https://github.com/DaffyDabz/bo2-minecraft-zombies/releases/tag/v2026.10.05) (commit [`f4402fd`](https://github.com/DaffyDabz/bo2-minecraft-zombies/tree/f4402fd9097fb2dc55c06790761f2b99271cac58))

> **Beta.** Nobody at SIGF has played this build yet. Back up your saves.
> Bugs in the mod itself go to the author's issue tracker above; problems with the one-click install go to this repository's issues.

## What you need

- **Call of Duty: Black Ops II** ([Steam](https://store.steampowered.com/app/202970/)): PC Steam install with Zombies (Nuketown Zombies map loaded), tested on the author's PC only.
- **Minecraft**: Java Edition 26.3 (client files downloaded from Mojang on first run (about 125 MB)).
- bo2-zombies: Black Ops II on Steam with Zombies installed; the Minecraft map is built on Nuketown Zombies (DLC 219092 on Steam), so you likely need it too. IW4L only reads the files (https://store.steampowered.com/app/202970/).
- minecraft-java: own Minecraft: Java Edition; the game downloads 26.3's files from Mojang itself on first run (https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc).
- Windows and the [SIGF app](https://sigf.ai).

## Install

In the SIGF app, open **Minecraft Zombies** in the catalog, press **Install**, then **Play**. **Restore** puts your game folders back exactly as they were.
The app follows `mashup.json` in this repository: every download is pinned by sha256. `MinecraftZombies-2026-10-05.zip` comes from the author's own release.

### How to play

- One new game (IW4L): Black Ops II Zombies in an endless Minecraft world. Each night is a zombies round, each day you mine, build and craft.
- Black Ops II's own menus open: ONLINE > SOLO, pick MINECRAFT on the globe (NUKETOWN plays the original map), then START MATCH.
- Left click mines or shoots, right click places, 1-9 or the mouse wheel pick a hotbar slot, E opens the inventory, F opens and closes doors.
- Zombies dig through any block to reach you. The spawn room holds the perks, the Mystery Box and Pack-a-Punch.

### Good to know

- You need Call of Duty: Black Ops II on Steam with Zombies installed; the Minecraft map is built on Nuketown Zombies, so you likely need that map too. Black Ops II never runs and its files are only read. Windows 64-bit with a DirectX 12 card.
- The first start downloads Minecraft 26.3's files from Mojang (about 125 MB). Settings, logs and those files go into an iw4l-artifacts folder inside your Black Ops II folder; Restore removes the mod but leaves that folder, delete it by hand.
- Offline solo only: it never connects to Black Ops II's online services, Steam or VAC.
- Work in progress tested on the author's PC only: report bugs to the author with the Report a bug link.

## What this repository holds

Minecraft Zombies is Apache-2.0, but its release `iw4l.exe` is built from a tree that includes Skate 3 engine code from SK8-ENGINE/skate-3-rust-engine, which has no license, so SIGF does not rehost it. This repository holds **only SIGF's own files**, never the author's:

1. This README, `sigf/` (the script that built the recipe, for reference) and `mashup.json` (the SIGF app recipe).
2. Not here: `MinecraftZombies-2026-10-05.zip` (sha256 `3844ddadb0e9eecba2654553324c6ac89aa432aaf1b86b9e1808c5dff3ccf422`). The app downloads it on the player's demand from the author's release, as released: https://github.com/DaffyDabz/bo2-minecraft-zombies/releases/download/v2026.10.05/MinecraftZombies-2026-10-05.zip
3. The release `v2026.10.5`, which has no assets: the recipe's only download is the author's file above.

The sha256 of every file inside the zips is in `mashup.json` (`contents`).

## Licenses

| Part | License | Where |
|---|---|---|
| Minecraft Zombies (`MinecraftZombies-2026-10-05.zip`, the author's release file) | Apache-2.0 (IW4L, the 2010 Rust Rewrite Mashup, bo2zm), plus compiled-in skate code with no license. Not stored here; the app downloads it from the author's release | https://github.com/DaffyDabz/bo2-minecraft-zombies |

## Why this repository exists

The SIGF app (https://sigf.ai) installs mods from recipes (`mashup.json`) whose downloads are pinned release files. This repository makes Minecraft Zombies installable in one click, credited to DaffyDabz. If you are the author and want anything changed or taken down, open an issue here.
