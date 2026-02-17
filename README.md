# WDProjMgFernandoFrancisco Project Proposal

# Website Name: **ORICENTRIC**
##              — The Art of Folds


## Logo
![Oricentric_logo](Oricentric_logo.png)


---


## Brief Description


**Oricentric** is a website developed in **HTML**, **CSS**, and **JavaScript**, aiming to **highlight the beauty of Origami**, both as a calming art and a catalyst for innovation in science. We showcase informative content on Origami’s **history**, role in modern **science** (with NASA’s starshade), and **different folds** such as valley, mountain and squash fold–all used to create different Origami works. We additionally offer a clean and user-friendly interface, and engaging visuals.


As an educational and creative website for **students**, **art enthusiasts**, **STEM, and engineering learners**, we aim to explain concepts on Origami’s history, mechanisms, and real-world applications, as well as showcasing origami as a visual form of art through our works. We hope users may learn to **appreciate** the deep cultural roots of origami, and the art of folding paper, as well as **understand** the influence of origami on technology.


---


## Outline of Pages


### **Home Page**
- Header containing the website name: **Oricentric**
- Page title: **HOME**
- Navigation bar linking to all pages:
  - History  
  - Mechanisms  
  - Exhibit  
  - NASA Application  
  - Tutorials  
  - References and Resources  
- Brief website description answering:
  - What does the website offer?  
  - What is its purpose?  
  - Who is the targeted audience?  
- Featured sections for each page, seperated in a grid-like layout; these include:
  - **History:** Images of historical papers and modern colorful creations  
  - **Exhibit:** - Images of origami pieces we made, and pictures of NASA technology using origami
  - **Mechanisms:** Visuals of different folds (mountain, valley, squash, etc.), and images of tools (adhesives, scissors)
 - **References:** - Image of people creating origami, some from the past in paitings, others from the present
- **Footer** containing:
  - Copyright  
  - Social media links  
  - Contact information  
  - Email addresses  
  - Credits to all assets used  


---


### **History**
- Header: **Oricentric: Unfolding a Colorful History**  
- Page title: **HISTORY OF ORIGAMI**  
- Navigation bar and links back to home  
- Brief introduction summarizing learning objectives  
- **Interactive timeline** organizing history into eras:
  - Early Beginnings and Invention of Origami  
  - Integration of Origami into Japanese Culture  
  - Global Influence and Origami Spreading Worldwide
  - Modern Applications inspiring Architecture and Robotics  
- Each era includes photos for visual engagement  
- **Footer** containing:
  - Copyright  
  - Social media links  
  - Contact information  
  - Email addresses  
  - Credentials to all assets used  


---


### **Exhibit**
- Header: **Oricentric: Showcasing Numerous Masterpieces**  
- Page title: **ORIGAMI EXHIBIT**  
- Navigation bar and links back to home  
- Brief introduction to page contents  
- A **Gallery of Origami Works** by the creators:
  - Photos of finished creations  
  - Step-by-step folding procedures  
  - Short descriptions or creator notes  
- **Modern Applications** section including:
  - Engineering and architecture inspired by origami  
  - NASA’s use of origami in spacecraft and solar structures, shown with photos and videos
- **Footer** containing:
  - Copyright  
  - Social media links  
  - Contact information  
  - Email addresses  
  - Credits to all assets used  


---


### **Mechanisms**
- Header: **Oricentric: The Science Behind Every Fold**  
- Page title: **FOLDING IN ORIGAMI**  
- Navigation bar and links back to home  
- Brief explanation on why understanding folding mechanisms matters  
- **Segment on Commonly Used Folds**, including:
  - Valley, Mountain, Squash, Reverse, Pleats, and Sink folds  
- Discussion of **materials and tools**, including:
  - Paper types (Kami, Tant, Washi, etc.)  
  - Adhesives (tape, glue)  
  - Scissors, pens/pencils, tweezers  
- Additional videos or pictures demonstrating folds and materials  
- **Footer** containing:
  - Copyright  
  - Social media links  
  - Contact information  
  - Email addresses  
  - Credits to all assets used  


---


### **References / Resources**
- Header: **Sources Used**  
- Navigation bar and links back to home  
- Compiled list of all **citations, images, and videos**, organized by page  
- All references follow APA 7th Edition format  
- **Footer** containing:
  - Copyright  
  - Social media links  
  - Contact information  
  - Email addresses  


---


## Use of JavaScript
- In the **Exhibit Page**, users can navigate through folding steps:
  - `←` and `→` : Move between steps  
  - `↑` and `↓` : Scroll vertically through the page  
- **Dynamic Theme Switching**
  - Based on the time of day (Morning, Afternoon, Evening, Midnight), the CSS theme changes automatically to its respective theme.
  - The user can also toggle the theme manually as well, with JavaScript remembering the user's preferred theme if ever they leave the website
  - Shortcut: `Shift + T`
- **Music Controls**
  - A selected playlist of soundtracks can be played by the user
  - Music starts muted by default, unless previously enabled  
  - `Shift + P` : Play or Pause music  
  - `Shift + U` : Mute or Unmute music  
- **Keyboard Shortcuts**
  - The user has access to several shortcuts to pages, visual and music options, including:
  - `Shift + H` — History Page  
  - `Shift + E` — Exhibit Page  
  - `Shift + M` — Mechanisms Page  
  - `Shift + R` — References Page  
  - `Shift + T` — Toggle Theme  
  - `Shift + P` — Play/Pause Music  
  - `Shift + U` — Mute/Unmute Music  


---

## APPLICATION OF HTML FORMS

Overall, HTML form would be used for user personalization, allowing websites to change based on user preference for a smoother website browsing experience.

### Preferences Forum
- Header: **Oricentric: Personalization**
- Page Title: USER PREFERENCES
- Navigation bar with links back to home and other main sections
- Brief introduction explaining the purpose of the webpage- to allow users to customize their own experience in the website, allowing a more relaxing and comfortable experience
- A user Preferences HTML Form. It would be used to gather information and preferences from the visitor, including:
  - Intended purpose of learning origami (relaxation, skill improvement, creativity, other); uses radio buttons
  - Preferred learning difficulty of tutorials (beginner, intermediate, advanced); uses radio buttons
  - Areas of interest in origami making (animals, modular, geometric, plants, decorative, other); uses checkboxes
  - Preferred background music (lo-fi, ambiance, classical, OST, instrumental, silence); uses dropdown
- A "Submit Preferences" button that saves the user's selected options
  - Javascript would store submitted data in the user's computer via localStorage, allowing preferences to persist across multiple sessions
- Disclaimer text regarding information- no personal or sensitive information would be collected from the user, and all data remains on the user's device
- Footer containing:
  - Copyright
  - Credentials to referenced materials

The HTML form used in this page allows user's preference's to shape their website viewing. By collecting non-personal information regarding user interests, goals in learning origami, and music preferences, along with the use of radio buttons, checkboxes and dropdown selection, the website allows clean interaction. 

Upon submission, the form data is snet to JavaScript and saved locally on the user's computer through localStorage- allowing information to be saved even after the browser is closed. The stored preferences are later used to persnalize other segments of the website. No information is also sent to any external to ensure privacy as the user digitally browses.

### Tutorials
- Header: **Oricentric: Guidance**
- Page Title: TUTORIALS
- Navigation bar with links back to home and the preferences forum
- Brief introduction explaining the purpose of the webpage- to allow users to explore tutorials organized by their interests and skill level
- A recommended tutorials section that should appear at the top page, including:
  - Automatically generated tutorials and text best suited to the user's selected skill level and interests
- A complete tutorial library section that contains:
  - Beginner, Intermediate and Advanced origami tutorials; will use dropdown
  - Estimated difficulty and time required for each model; will use checkboxes
  - A filter that can manually browse tutorials, regardless of user preferences and recommendations
- JavaScript would use saved user preferences from localStorage to determine tutorial order and recommendations
- Footer containing:
  - Copyright
  - Credentials to referenced materials

The HTML form used on this page is based on the user's preferences and to customize their experience. Through collecting user-selected options such as origami skill level, tutorial interests, and learning goals, the website aims to personalize the tutorial and learning experience of the user. Upon submission of form data, JavaScript processes and locally stores information through the localStorage feature. Then, the website would remember the user's preferences even after the page is refreshed or closed. No information is also sent to any external to ensure privacy as the user digitally browses.

### Folding
- Header: **Oricentric: Mindfulness**
- Page Title: FOLDING
- Navigation bar with links back to home and the preferences forum
- Brief introduction explaining the purpose of the webpage- to enjoy origami as a calming and artistic activity, supported by ambient music. It is designed for user enhancement and enjoyment, allowing them to personalize music selection, volume settings and folding session duration- all without account creation and collection of personal information.
- A music and ambiance control HTML form would ask information from the users. allowing them to:
  - Select a preferred background music; will use either radio buttons or dropdown
  - Adjust volume settings; will use a range slider input
  - Choose a folding session duration; will use a number form tag
- Simple and minimalist interface is used and designed to reduce distractions and encourage users to focus and relax
- Inspirational quotes would be presented at random times to encourage creativity and motivation
- JS allows music settings chosen from localStorage to be applied immediately, and be saved as default values. It can also update and overwrite stored preferences too
- Subtle visual effects and transitions are added for a more calming atmosphere
- Footer containing:
  - Copyright
  - Credentials to referenced materials

The HTML form used on this page is based on the user's preferences and to customize their experience. Through collecting user-selected ambiance settings such as music genre, volume level and session level, the website aims to enhance the user's experience while folding paper. Upon submission of form data, JavaScript processes and locally stores information through the localStorage feature. Then, the website would remember the user's preferences even after the page is refreshed or closed. No information is also sent to any external to ensure privacy as the user digitally browses.
---
### Wireframe

## HOME - top
![Home_page](/assets/1.1_Homepage.png)

## HOME with Navigation tab expanded
![Home_page](/assets/1.2_Homepage.png)

## HOME - bottom
![Home_page](/assets/1.3_Homepage.png)

## HISTORY OF ORIGAMI - top
![History](/assets/2.1_History.png)

## HISTORY OF ORIGAMI - middle
![History](/assets/2.3_History.png)

## HISTORY OF ORIGAMI - bottom
![History](/assets/2.4_History.png)

## ORIGAMI EXHIBIT - top
![Exhibit](/assets/3.1_Exhibit.png)

## ORIGAMI EXHIBIT - per origami
![Exhibit](/assets/3.2_Exhibit.png)

## ORIGAMI EXHIBIT - bottom
![Exhibit](/assets/3.3_Exhibit.png)

## FOLDING IN ORIGAMI - top
![Mechanisms](/assets/4.1_Mechanisms.png)

## FOLDING IN ORIGAMI - bottom
![Mechanisms](/assets/4.2_Mechanisms.png)

## REFERENCES & RESOURCES
![References_and_Resources](/assets/5.1_References_and_Resources.png)

## PREFERENCES FORUM
![Preferences](/assets/6.1%20Preferences%20Forum.png)
- Alongside the footer and navigation bar, the screen will be split into two, with half of it showing the purpose of the preferences page, and the other half showing the HTML form the user can answer

## TUTORIALS - recommendations segment/upper part
![Preferences](/assets/7.1%20Tutorials.png)
- The screen header would be shown at the top, with the website purpose below it. A segment would show recommendations and additional recommendations that the user picked based on their answers from the preferences forum page. If the preferences page was not answered, no recommendations would be presented and would just show the library segment.

## TUTORIALS - library segment/lower part
![Preferences](/assets/7.2%20Tutorials.png)
- The screen header would be called "Library of Origami", with a difficulty bar that the user can use to fidn certain videos. Below would be every tutorial uploaded in the Oricentric website, regardless of preference. Text for estimated difficulty and approximated time to accomplish will also be visible

## FOLDING - choosing environment segment/first segment
![Preferences](/assets/8.1%20Folding.png)
- The screen header would be shown at the top, with the website purpose below it. A segment would show the background music, adjust volume and duration of time the user would want to fold origami. If the user answered the preferences page, information would already be filled up, else it would remain blank. 

## FOLDING - folding environment/second segment
![Preferences](/assets/8.2%20Folding.png)
- The screen would show the image of nature backgrounds, along with a timer at te top left. There would also be an inspirational quote that would randomly change in the bottom center. Music according to the user's preference would also play.
---