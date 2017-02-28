describe('Collection list', function() {
	var EC = protractor.ExpectedConditions;

	var musicList = null;
	it('shows collection list', function () {
		musicList = element.all(by.repeater('collection_result in collection_results'));
		browser.wait(EC.presenceOf(musicList), 2000);

		expect(musicList.count()).toEqual(9);

		expect(element.all(by.css('#header-album .album-desc h3 small')).get(0).getText()).toEqual('Bruno Mars');
	});

	it('can play audio', function () {
		musicList.all(by.css('.boxes i')).first().click();
		expect(element(by.id('audio1')).getAttribute('src')).toEqual("http://audio.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/9c/3e/1f/9c3e1f12-fd5d-d4ff-0c53-80e5862fec0e/mzaf_5092878683606415963.plus.aac.p.m4a");
		browser.sleep(5000);
	});
});