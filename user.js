// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// proton tooltip
user_pref("browser.proton.places-tooltip.enabled", true);

// fill SVG color
user_pref("svg.context-properties.content.enabled", true);

// CSS color mix - 88 above
user_pref("layout.css.color-mix.enabled", true);

// CSS blur filter - 88 above
user_pref("layout.css.backdrop-filter.enabled", true);

// restore compact mode - 88 above
user_pref("browser.compactmode.show", true);

// about:home search bar - 89 Above
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", true);

// user chrome css
user_pref("userChrome.compatibility.theme",       true);
user_pref("userChrome.compatibility.os",          true);


// restore pages and tabs from last session
user_pref("browser.startup.page", 3);

// calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// unit convertor at urlbar
user_pref("browser.urlbar.unitConversion.enabled", true);

// paste with middle mouse button
user_pref("middlemouse.paste", true);

user_pref("browser.tabs.tabClipWidth", 83);

// smooth scrolling
user_pref("apz.allow_zooming",                               true);            ///     true
user_pref("apz.force_disable_desktop_zooming_scrollbars",   false);            ///    false
user_pref("apz.paint_skipping.enabled",                      true);            ///     true
user_pref("apz.windows.use_direct_manipulation",             true);            ///     true
user_pref("dom.event.wheel-deltaMode-lines.always-disabled", true);            ///    false
user_pref("general.smoothScroll.currentVelocityWeighting", "0.05");            ///   "0.25" <- 1. If scroll too slow, set to "0.15"
user_pref("general.smoothScroll.durationToIntervalRatio",    1000);            ///      200
user_pref("general.smoothScroll.lines.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.lines.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.mouseWheel.durationMaxMS",    100);            ///      200
user_pref("general.smoothScroll.mouseWheel.durationMinMS",      0);            ///       50
user_pref("general.smoothScroll.mouseWheel.migrationPercent", 100);            ///      100
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);   ///      120
user_pref("general.smoothScroll.msdPhysics.enabled",                  true);   ///    false
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 200);   ///     1250
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",     200);   ///     1000
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",         10);   ///       12
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",  "1.20");   ///    "1.3"
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",   1000);   ///     2000
user_pref("general.smoothScroll.other.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.other.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.pages.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.pages.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.pixels.durationMaxMS",        100);            ///      150
user_pref("general.smoothScroll.pixels.durationMinMS",          0);            ///      150
user_pref("general.smoothScroll.scrollbars.durationMaxMS",    100);            ///      150
user_pref("general.smoothScroll.scrollbars.durationMinMS",      0);            ///      150
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6");            ///    "0.4"
user_pref("layers.async-pan-zoom.enabled",                   true);            ///     true
user_pref("layout.css.scroll-behavior.spring-constant",   "250.0");            ///   "250.0"
user_pref("mousewheel.acceleration.factor",                     3);            ///       10
user_pref("mousewheel.acceleration.start",                     -1);            ///       -1
user_pref("mousewheel.default.delta_multiplier_x",            100);            ///      100
user_pref("mousewheel.default.delta_multiplier_y",            100);            ///      100
user_pref("mousewheel.default.delta_multiplier_z",            100);            ///      100
user_pref("mousewheel.min_line_scroll_amount",                  0);            ///        5
user_pref("mousewheel.system_scroll_override.enabled",       true);            ///     true <- 2. If scroll too fast, set to false
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", false); ///     true
user_pref("mousewheel.transaction.timeout",                  1500);            ///     1500
user_pref("toolkit.scrollbox.horizontalScrollDistance",         4);            ///        5
user_pref("toolkit.scrollbox.verticalScrollDistance",           3);            ///        3


// extensions
user_pref("extensions.ClearURLs@kevinr.whiteList", "");
user_pref("extensions.FirefoxMulti-AccountContainers@mozilla.whiteList", "");


// improvements
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.toolbars.bookmarks.visibility", "never");


// telemetry and privacy
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("beacon.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.disableResetPrompt", true);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.selfsupport.url", "");
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("extensions.autoDisableScopes", 14);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.greasemonkey.stats.optedin", false);
user_pref("extensions.greasemonkey.stats.url", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("media.autoplay.default", 0);
user_pref("media.autoplay.enabled", true);
user_pref("media.peerconnection.enabled", false);
user_pref("network.allow-experiments", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.http.referer.spoofSource", true);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSite", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("webgl.renderer-string-override", " ");
user_pref("webgl.vendor-string-override", " ");
