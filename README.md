# remove-youtube-comments-and-related-videos
A Chrome Extension that removes comments and related videos to a video from YouTube with a CSS insertion.

# Overview
This extension disables comments and related videos on a YouTube video. The intention is to have a minimalist and distraction-free experience while watching a video that is not in fullscreen. When toggled to ``ON``, this extension injects a CSS file to a video page, adding/changing the ``display`` style to ``none``, to the elements of ``#comments`` and ``#secondary-inner``. When toggled ``OFF``, it removes this CSS file. 

# Installation
1. Download the ZIP file. Extract the _extension_ folder (``remove-youtube-comments-and-related-videos-main/extension``) to any desired location.
2. Go to your Manage Extensions page. On a new tab, search chrome://extensions (chrome browser) or edge://extensions (edge browser).
3. Enable Developer Mode (in case it is not enabled).
4. Click the Unload unpacked button, and select the directory of the downloaded _extension_ folder.

# How to use the Extension
On a YouTube video, simply click the extension icon on your toolbar. The icon will display either ``ON`` or ``OFF``. Note that this is tab-dependent, the extension will be either on or off on each unique tab. 
