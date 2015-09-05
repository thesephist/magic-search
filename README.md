# Magic Search

A suite of power user tools modifying Google Search for Chrome / Chromium browsers.

Each feature can be individually enabled under the options menu.

## Dual View

Dual View tweaks the default desktop Google Search results page to display the 10-link list in two columns, dramatically taking more advantage of the available screen real estate. When reaosnable, Dual View also reduces margins and executes minor layout tweaks to preserve visual integrity with Dual View. 

### Exceptions
* Dual View is responsive. On unreasonably small screensizes Dual View does not activate
* On pages with Google's arguably more useful Knowledge Graph cards, Dual View disables itself

## QuickSearch

QuickSearch is a tool for searching more than a dozen different specialized sources from Chrome / Chromium's Omnibar or Google's default search bar. 

QuickSearch search queries are placed identically to otherwise normal ones, prefixed by "[ID]:" where [ID] is the key for a specific source to query. For example, while a Google Search for Paris, France is simply typed 

    Paris, France

a QuickSearch querying Wikipedia for the same keyword is typed
    
    wiki: Paris, France

and a QuickSearch targeting Google Maps is typed

    maps: Paris, France

, and so on, for other services supported by Magic Search. New sources are continually added with updates, but a list of currently compatible targets include:

* Google Images - img: / image:
* Google News - news:
* Google Videos - vid: 
* Google Books - book: 
* Google Translate\*  - tl: / translate:
* Google Maps - map: / maps: 
* Google Search with Verbatim option enabled - v: / verbatim: 
* Google Search for PDF and PowerPoint file types - pdf: / ppt: respectively
* Google Scholar - sch:
* YouTube - yt: 
* Amazon - amz: 
* Wikipedia - wiki: 
* Wolfram|Alpha - wa: 
* BrainyQuotes - quote: / quotes:
* Flickr - flickr:

## Search Highlight

Search Highlight does exactly what its name implies. It "highlights" specific links in the search results with a set color for certain websites. Specifically, it looks for certain domains in the search results' links and applies CSS rules on them to make them more promiment. 

At the moment, it's available (could be disabled in options) for Wikipedia, .GOV / .EDU premium TLDs, and Stack Overflow / Super User / Server Fault forums, but a user-configurable option is in development.

## Setup

Chrome and most Chromium browsers accept directories as "unpacked extensions". Simply set the root directory of the project as the extension's directory within the browser to take advantage of the extension.

Magic Search is also distributed at no cost on the Chrome Web Store.

- - - -

* Auto-detected languages to your native; specifying language coming in development

