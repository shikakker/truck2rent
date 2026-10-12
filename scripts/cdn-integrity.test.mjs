import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const EXPECTED_CDNJS_LOTTIE_5122 =
  'sha512-jEnuDt6jfecCjthQAJ+ed0MTVA++5ZKmlUcmDGBv2vUI/REn6FuIdixLNnQT+vKusE2hhTk2is3cFvv5wA+Sgg==';

test('historical motion preview uses a verified SRI digest for its pinned Lottie runtime', () => {
  const script = html.match(/<script\s+src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/bodymovin\/5\.12\.2\/lottie\.min\.js"[^>]*>/);
  assert.ok(script, 'Pin the verified cdnjs bodymovin 5.12.2 asset');
  const integrity = script[0].match(/integrity="([^"]+)"/)?.[1];
  assert.equal(integrity, EXPECTED_CDNJS_LOTTIE_5122, 'An incorrect SRI makes the browser refuse to load the animation runtime');
  assert.match(script[0], /crossorigin="anonymous"/);
  assert.match(script[0], /onerror=/);
});
