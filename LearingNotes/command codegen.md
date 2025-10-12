### Run codegen command to generate a new test
 - *npx playwright codegen demo.playwright.dev/todomvc*
  
1. When running the codegen command, two windows will be opened, a browser window where you interact with the website you wish to test and the Playwright inspector window where you can record your tests and then copy them into your editor.
2. When you have finished interacting with the page, press the **record** button to stop the recording and use the **copy** button to copy the generated code to your editor.
3. !! Don't close the browser window, which will close the Playwright inspector windows that you will lose all of the generated code.

### Command Options
 - --viewport-size="800,600" (generate tests with a dedicated viewport size)
   - *npx playwright codegen --viewport-size="800,600" playwright.dev*
 - --device="iPhone 13" (record scripts and tests while umulating a mobile device)
   - *npx playwright codegen --device="iPhone 13" playwright.dev*
 - --color-scheme=dark (record scripts and tests while umulating the color scheme)
   - *npx playwright codegen --color scheme=dark playwright.dev*
 - --timezone, --geolocation, --lang: Emulating timezone, language, location
   - *npx playwright codegen --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" bing.com/maps*

 - options to **Preserve authenticated state**
   - **--save-storage** to save cookies, localStorage and IndexedDB data. This is useful to separatedly record an authentication step and reuse it later when recording more tests.
   - *npx playwright codegen github.com/microsoft/playwright --save-storage=auth.json*
     - After performing authentication and closing the browser, auto.json will contain the storage state which you can then reuse in your tests.
     - ! Make sure you only use the auth.json locally as it contains sensitive information.
   - -- load-storage to consume the proviously loaded storage from auth.json: all cookies, localStorage and IndexedDB data will be retored, bringing most web apps to the authenticated state without the need to login again. This means you can continue generating tests from the logged in state.
   - *npx playwright codegen --load-storage=auth.json github.com/microsoft/playwright*
