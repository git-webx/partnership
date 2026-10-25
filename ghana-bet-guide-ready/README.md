# Ghana Bet Guide — static MVP

A no-build static website using HTML, CSS and JavaScript. The original structure and visual direction are preserved.

## Run locally
Run a local web server from this folder because pages use root-relative URLs:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Structure
- `index.html` — homepage
- `bookmakers/index.html` — directory
- `bookmakers/1xbet/`, `bookmakers/stake/`, `bookmakers/melbet/` — operator information pages
- `guides/` — registration, Mobile Money and apps guides
- `about/`, `contact/`, `privacy/`, `affiliate-disclosure/`, `responsible-gambling/`
- `assets/styles.css` — responsive styles
- `assets/site.js` — mobile navigation and directory search
- `robots.txt`, `sitemap.xml` — crawler files
- `vercel.json` — security response headers for Vercel
- `.gitignore` — excludes local secrets and deployment files from Git

## Before publishing
1. Replace every `https://example.com` placeholder in canonical tags, `sitemap.xml`, and `robots.txt` with the actual HTTPS domain (after deciding the final Vercel/domain URL).
2. Verify current Ghana-specific regulatory status, operator availability and affiliate permissions before making claims. The 1xBet affiliate URL supplied by the site owner is retained.
3. Stake and Melbet guides are now complete informational checklists, but deliberately do not claim local licensing or availability. Their official links are not affiliate links.
4. Add the public contact email when the owner has created it. No address or email has been invented.
5. Review privacy copy against the final hosting and tracking setup. Do not add analytics or forms without updating the policy.
6. Test all pages, mobile layout, links and accessibility after deployment.

## Security notes
- This is a static site: it has no server-side login, database, secrets or payment processing.
- `vercel.json` adds a Content Security Policy and common security headers. The CSP permits inline style attributes because the existing design uses them; scripts are restricted to same-origin files.
- These headers reduce some browser-side risks but do not prevent account takeover or unauthorised changes to the source repository.
- Protect the Git provider and Vercel accounts with unique passwords and multi-factor authentication; keep recovery codes safe; grant the minimum access needed; review connected integrations; never commit API keys, passwords or `.env` files.
- Keep a private copy of the ZIP and a version-controlled repository backup.
- Configure the final domain and HTTPS in Vercel. Do not publish a real domain in metadata until it is selected.

No ratings, bonuses, payment limits, withdrawal times, licence claims, domain status or contact details are invented.
