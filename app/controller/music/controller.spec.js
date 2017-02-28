describe('Music list', function() {
	browser.get('/');

	var EC = protractor.ExpectedConditions;
	var firstRow;

	it('shows search results', function() {
		element(by.model('itunesQuery')).sendKeys('Thats what I like');

		var rows = element.all(by.repeater('songList in results.results'));
		browser.wait(EC.presenceOf(rows), 2000);

		expect(rows.count()).toEqual(50);

		firstRow = rows.first();
		browser.wait(EC.textToBePresentInElement(firstRow, "That’s What I Like"), 2000);

		expect(firstRow.element(by.css('.song-title b')).getText()).toEqual("That’s What I Like");
		expect(firstRow.element(by.css('.boxes')).getAttribute('src')).toEqual("http://is5.mzstatic.com/image/thumb/Music71/v4/72/f9/66/72f966be-808b-8bbd-1391-692f168567aa/source/100x100bb.jpg");
	});

	it('can play audio', function () {
		firstRow.all(by.css('.album a')).first().click();
		expect(element(by.id('audio')).getAttribute('src')).toEqual("http://audio.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/ca/7f/28/ca7f2818-514a-5a6f-ac63-bd420da38a0c/mzaf_3303110486375225949.plus.aac.p.m4a");
		browser.sleep(5000);
	});

	it('shows collections page', function () {
		firstRow.all(by.css('.titles h4 small a')).last().click();

		browser.wait(EC.urlContains('collection'), 2000);

		expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/#/collection/1161503945');
	});
});