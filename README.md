# food-logger

### Installation:
Just copy the repository and install ionic then run "ionic serve" or "npm run".

Downloading Ionic:
npm install -g @ionic/cli native-run cordova-res
(  npm install -g @ionic/cli cordova-res ionic start --start-id RGE3bFn@i  )?

More on installing ionic
https://ionicframework.com/docs/intro/cli#:~:text=Installing%20Ionic%201%20Install%20the%20Ionic%20CLI%20Before,the%20browser%20using%20the%20ionic%20serve%20command%3A%20

## User Interface:

![Main Home Page](https://lh3.googleusercontent.com/drive-viewer/AITFw-wMRw_Gj-WB2EPhHl6_SG5nXXVSexwTcXoamr_-Ce9D9-ilruTk4qklOdBLBuPXQapAB27MCro_8trTVQrlIk2jZO9YMw=s600)

The food logging application offers a user-friendly interface with three distinct tabs, each serving a specific purpose to enhance the user's experience. This section provides an overview of the tabs and their functionalities.

![Logging Page](https://lh3.googleusercontent.com/drive-viewer/AITFw-w9F7_VqKMBt7JgV71mgvXPPsAg-vj3-RJ8oE4TFmq_5rhKb5Qq_hQfw3tyVHkdQxELPJrrh2OgdUnHkO5AFmoUVbbZ=s600)
### 3.1 Main Tab: Today's Food Log The first tab, known as the "Main" tab, serves as the central hub of the application. Here, users can conveniently access their food log for the current day and gain insights into their daily diet. The main tab provides a basic breakdown of the nutritional information for today's meals, offering users a quick overview of their dietary intake. Additionally, logging food is effortless with a simple plus button that allows users to quickly add items to their food log. By clicking on the plus button, users can perform a search for a specific food item and easily log it into their daily record.

![Event Log Report Page](https://lh3.googleusercontent.com/drive-viewer/AITFw-yyBvCxMhS1PQW-rwzvZXInTsFAG15cnKSjHphz-KAaVysCOF5kQ77N1R9nCwb7kkR2y6T1qQLNezaVltwphHrVyTFT=s600)
### 3.2 Calendar History Tab The second tab, named the "Calendar History" tab, provides users with a comprehensive view of their food log history. Users can browse through different dates to access past records, review their dietary patterns, and make informed decisions regarding their eating habits. The calendar history tab enables users to view, edit, add, or remove food log records for any given day, allowing them to maintain an accurate and personalized record of their diet over time.

![Event Logging widgets](https://lh3.googleusercontent.com/drive-viewer/AITFw-zOoKBpoK22SC1IeNuq3vYiCqyIGh93qZDmU6v8fnd0qLB5ezkq0PUrtuYoY8o-hp4wiPZCF2ZKGdu7ZQSdfmG92up3=s600)
### 3.3 Biometric Data and Profile Tab The third tab, labeled as the "Biometric Data" tab, focuses on capturing and managing the user's general biometric information. Users can input data such as weight, height, and other relevant details to personalize their experience within the app. Additionally, this tab may include optional questions about allergies and food restrictions, ensuring that the app can provide tailored recommendations and alerts based on the user's specific needs and preferences.

![Recipe Page](https://lh3.googleusercontent.com/drive-viewer/AITFw-yfJEW4YRJL9_f3EAzCCbI6e9Ed1RCs9Hw0aZB1pQZ-11N4BRy_h5C7uHgyOCHlQP44FCPXyqPhWLb6Oraw7hH3ZgBxYA=s600)
By organizing the app's functionalities into these three tabs—Today's Food Log, Calendar History, and Biometric Data—the user interface becomes intuitive and easy to navigate. Users can seamlessly track their food intake, review past records, and manage their biometric data, enabling them to take control of their dietary habits and make informed decisions for their overall health and well-being.



## Usage:


Using the app is quite self explanatory but the images below describe how the food log process works:


## Project Layout:
Just like any ionic project the Food Logger open source project has a main app called the food-logger where the different pages, packages and services are located as you can see in the screenshot below.
![Project Folder Layout](https://lh3.googleusercontent.com/drive-viewer/AITFw-whOflHnIKOt6Z41LaJVqrloJ8p6vgUB4dBPcmNOQJlFtANXpOff8cjN47txzTaX5VxYCKZFhJHfKu5ZFJG3DEjKmtKFw=s500)
The main code which constructs the app is written inside the src folder.
![Src Folder Layout](https://lh3.googleusercontent.com/drive-viewer/AITFw-xQZR80CN1g51ApsQEDDA5t8DY6HVhp09s8hHhymSV4iaNKzPGZ8ABPc6DwCNEgLROo3qiMwgEjzo-6mo2SGHOGFnRLfg=s560)
The app folder contains the codebase for the app pages and functionalities.
The assets folder has all the assets such as images and local datasets and theme and environment has some general information about the app. The index.html is the main page which contains the app, the other pages which are located in the app folder will later be placed inside the index.html file.
![App Folder Layout](https://lh3.googleusercontent.com/drive-viewer/AITFw-xmpky3XA1hoWevMBDigleOEMKskmLy8k4eNjJ6zcQzWlBeDEeHD_AWC_a-tOTZUPvPQFcn6eEBRr0bA3MjWJLn64yGYQ=s560)

The auth folder contains the firebase authentication logic, the event logger contains a page which is beyond plain food logging and aims to log various events and can be adjusted by your needs.
The services page contains any logical service which may be used within the app. The survey logger is provided to design and collect recurring survey data from the user and store it in the backend. The survey can be designed by an expert.
The main code of the food logger is inside the logger folder.
![Pages Folders Layout](https://lh3.googleusercontent.com/drive-viewer/AITFw-yp0ZVkq7PLgiveVGQGUwuk8Q5Y91yb05ssC7rhQz9cOiCjZRuUDuavjAHcvY-C8sjldT-0t2zqATc8RZ5CIVD2kvGZiQ=s560)



The different pages are layed here as seen above.



## Customization:
It's good to practice creating a blank ionic project for yourself first before deciding to change the code in the food logger:
https://ionicframework.com/docs/angular/your-first-app

Most of the customization can happen on the backend so that the user doesn’t have to worry about much on their end, the only time the user is directly involved is on the 3rd tab where they set their preferences, diet restrictions and allergies along with their basic biometric information. The rest of the customization can happen automatically by the app getting to know the user:


### Adding a new page:
Adding new pages and components are easy just follow the documentations:
https://ionicframework.com/docs/cli/commands/generate

#### $ ionic generate [type] [name]

##### Automatically create framework features with Ionic Generate. This command uses the Angular CLI to generate features such as pages, components, directives, services, and more:

#### For a full list of available types, use npx ng g --help
#### For a list of options for a types, use npx ng g <type> --help
#### You can specify a path to nest your feature within any number of subdirectories. For example, specify a name of "pages/New Page" to generate page files at src/app/pages/new-page/.
#### To test a generator before file modifications are made, use the --dry-run option.



### Adding Elements:
Ionic apps are made of high-level building blocks called Components, which allow you to quickly construct the UI for your app. Ionic comes stock with a number of components, including cards, lists, and tabs. Once you’re familiar with the basics, refer to the API Index for a complete list of each component and sub-component.


Check out different components in here: https://ionicframework.com/docs/components
Here you can find from buttons to alert widgets to input boxes and search bars.


In addition to that there are many modules that are made specific for ionic or cordova which also works with ionic to provide more complicated features such as the apple health and google fit connection between the app. Here is an example of such modules:
https://devdactic.com/ionic-healthkit-integration
 
## Troubleshooting:


Here is a troubleshooting section which addresses common issues users may encounter and their solutions:


Support and Community:
Contact information:
rostami1@uci.edu



## Bugs
These Bugs may occur after build android or ios, and you need to fix them according to the solutions shown below.

### Build Android
#### Bug 1
##### Description
After running ionic capacitor build android and run the android studio, it may occur this error: `android.support.v4.content.FileProvider not found`
##### Solution
Instead of `import android.support.v4.content.FileProvider;`

Try to `import androidx.core.content.FileProvider;`
##### Ref
https://stackoverflow.com/questions/48534293/android-support-v4-content-fileprovider-not-found

### Build IOS
#### Bug 1
##### Description
The camera doesn't work on Xcode simulator, so you need a real iPhone to test the food image logging and barcode scanning features.
According to refs shown below, you need to add several descriptions in config.xml for the access to camera, voice, location...on iPhone.

However, they still may not be included in Info.plist and the app may crash after trying to access camera.
##### Solution
Add these descriptions manually in Info.plist file of IOS folder after building IOS.

![img](/images/needtoaddmanually.png)
##### Ref
[https://www.twilio.com/blog/2018/07/how-to-test-your-ios-application-on-a-real-device.html](https://www.twilio.com/blog/2018/07/how-to-test-your-ios-application-on-a-real-device.html)

[https://ionicframework.com/docs/native/camera](https://ionicframework.com/docs/native/camera)

[https://github.com/apache/cordova-plugin-camera](https://github.com/apache/cordova-plugin-camera)

[https://stack247.wordpress.com/2018/12/26/ionic-plugin-camera-crash/](https://stack247.wordpress.com/2018/12/26/ionic-plugin-camera-crash/)

[https://stack247.wordpress.com/2018/12/26/ionic-plugin-camera-info-plist/](https://stack247.wordpress.com/2018/12/26/ionic-plugin-camera-info-plist/)

[https://stackoverflow.com/questions/39465687/nscamerausagedescription-in-ios-10-0-runtime-crash](https://stackoverflow.com/questions/39465687/nscamerausagedescription-in-ios-10-0-runtime-crash)
# FoodLogger2.0
