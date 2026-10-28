# DevPulse Marketplace test: Apps

**Temporary test fixture.** This repository holds placeholder add-ons for testing the DevPulse Marketplace, the in-app catalog that installs and updates published add-ons from signed releases. It will be deleted when the Marketplace goes live.

- `sample/`: placeholder.sample-app, a small App: a sidebar panel with a ping count, a workspace tab with its log, a Ping command in DevPulse's Apps menu and a background task every 15 minutes.
- `parts-sample/`: placeholder.parts-sample, an App with optional parts: greetings in English, Armenian and Japanese (at least one), and confetti. Its release carries the App's file, each part's file and a ZIP of all of them.
- Releases carry the packed add-on files and `SHA256SUMS`. The signed list that tells DevPulse about them lives in [devpulse-test-registry](https://github.com/devpulseapp/devpulse-test-registry).

The placeholders are built with the DevPulse Add-on SDK, which is not included here.
