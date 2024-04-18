(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"category-press-2013-genos-llc.html":"A list of posts in category &ldquo;Press &ndash; GENOS LLC&rdquo;","category-press-0028crosspost0029.html":"A list of posts in category &ldquo;Press (Crosspost)&rdquo;","ozcorp-scientific-completes-registration-puerto-rico-invest-biotech-catalyze-ventures .html":" Ozcorp Scientific, a biotech venture studio, has announced the successful completion of its registration process in Puerto Rico, marking a significan","archive-april-2024.html":"Archives for April 2024","archive-november-2023.html":"Archives for November 2023","category-new-category.html":"A list of posts in category &ldquo;New Category&rdquo;","ozcorp-unveils-genos-bioinformatics-from-stealth.html":"SAN JUAN, Puerto Rico – April 14, 2024  – Ozcorp Scientific, a biotech venture studio, proudly announces the official emergence of GENOS, marking its ","category-crosspost.html":"A list of posts in category &ldquo;Crosspost&rdquo;","archive-december-2023.html":"Archives for December 2023","category-press-2013-genos.html":"A list of posts in category &ldquo;Press &ndash; GENOS&rdquo;","ozcorp-scientific-debuts-executive-services.html":"Ozcorp Scientific, a new force in the domain of scientific innovation, proudly announces the launch of its suite of Executive Services aimed at cataly","category-press.html":"A list of posts in category &ldquo;Press&rdquo;"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();