const video_link = 'https://www.youtube.com/watch?v=';

chrome.runtime.onInstalled.addListener( () => {
    chrome.action.setBadgeText({
        text: 'OFF',
    });
});

chrome.action.onClicked.addListener( async (tab) => {
    if (tab.url.startsWith( video_link )) {
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        const nextState = ( prevState === 'ON' ) ? 'OFF' : 'ON';

        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });

        if ( nextState === 'ON' ) {
            await chrome.scripting.insertCSS({
                files: ['css/remove-comments-and-related.css'],
                target: { tabId: tab.id },
            });
        } else if ( nextState === 'OFF' ) {
            await chrome.scripting.removeCSS({
                files: ['css/remove-comments-and-related.css'],
                target: { tabId: tab.id },
            });
        }
    }
});