# TODO
1. update the icon in the header...golf club or ball or something

## Updating the Registrants List

Registration responses come in via Google Form and are exported as `src/data/responses.tsv`.

**Workflow:**

1. Export the latest responses from Google Forms as a `.tsv` file and save it to `src/data/responses.tsv`.
2. Run the generator:
   ```
   node scripts/generate-registrants.mjs
   ```
3. Review `src/data/converted-registrants.ts` — this is the auto-generated output. Check for any warnings printed to the console (e.g. TBA player names, unparseable name formats).
4. Copy `converted-registrants.ts` and save it as `src/data/registrants.ts`, making any manual edits needed (e.g. assigning singles to teams, fixing TBA names).

`registrants.ts` is what the site uses. The script never touches it.