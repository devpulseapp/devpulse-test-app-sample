# DevPulse Marketplace test: Apps

**Temporary test fixture.** This repository holds placeholder add-ons for testing the DevPulse Marketplace, the in-app catalog that installs and updates published add-ons from signed releases. It will be deleted when the Marketplace goes live.

- `sample/`: placeholder.sample-app (an App that adds nothing; DevPulse cannot install Apps yet).
- Releases carry the packed add-on files and `SHA256SUMS`. The signed list that tells DevPulse about them lives in [devpulse-test-registry](https://github.com/devpulseapp/devpulse-test-registry).

The placeholders are built with the DevPulse Add-on SDK, which is not included here.
