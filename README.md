# Pixeldrain Download Links Fetcher
Turn a .txt file of Pixeldrain list links into a .json with file download links!

The example input.txt is a list of links to the [Muhn Pace fan project](https://steamcommunity.com/sharedfiles/filedetails/?id=3685024934), with the intent of creating a Stremio addon to supplement the existing One Pace addons and make it easily available on Android TV's.

## Usage
Requirements: Node.js, git
```sh
# Clone repository & navigate into it
git clone https://github.com/Denperidge/pixeldrain-download-links-fetcher.git
cd pixeldrain-download-links-fetcher

# Change the links in input.txt to your pixeldrain links
nano input.txt

# Run pixeldrain-download-links.js
npm start
```
Done! You can find the output data in `output.json`.

### Notes:
- By default, files with mime type `text/plain; charset=utf-8` are skipped. This behaviour can be changed [in `.filter(file => file.mime_type != ...)`](pixeldrain-download-links.js)
- If you're using Nix(OS), run `nix-shell` inside the directory to automatically make Node JS available

## License
This project is released into the public domain using the [Unlicense](LICENSE).
