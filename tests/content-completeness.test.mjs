import assert from "node:assert/strict";
import test from "node:test";
import { validateContentBearingItems, validateGeoGeneratedPages, validateSourceGeneratedParity } from "../scripts/lib/content-completeness.mjs";

test("fails a required body disappearance", () => {
  assert.equal(validateContentBearingItems([{ titlePresent: true, bodyPresent: false, title: "Required card" }], "fixture").length, 1);
});

test("fails a title-only commercial card", () => {
  assert.match(validateContentBearingItems([{ titlePresent: true, bodyPresent: false, title: "Commercial package" }], "commercial card")[0], /title-only/);
});

test("fails source/generated parity loss", () => {
  const failures = validateSourceGeneratedParity([{ fileName: "fixture.md", route: "/fixture", raw: "original" }], [{ fileName: "fixture.md", route: "/fixture", raw: "lost" }]);
  assert.equal(failures.length, 1);
});

test("fails an empty generated GEO section", () => {
  const failures = validateGeoGeneratedPages([{ route: "/fixture", h1: "Fixture", sections: [{ title: "Only a title", blocks: [] }], faq: [], cta: null }]);
  assert.equal(failures.length, 1);
  assert.match(failures[0], /empty content-bearing section/);
});

test("passes restored valid state and preserves thin content as valid", () => {
  const failures = [
    ...validateContentBearingItems([{ titlePresent: true, bodyPresent: true, title: "Thin but intentional", body: "Short" }], "fixture"),
    ...validateGeoGeneratedPages([{ route: "/fixture", h1: "Fixture", sections: [{ title: "Restored", blocks: ["Authored content survives."] }], faq: [], cta: null }]),
  ];
  assert.deepEqual(failures, []);
});
