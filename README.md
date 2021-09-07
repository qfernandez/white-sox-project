# Chicago White Sox Play Data Project

Simple overview of use/purpose.

## Description

Use the attached Collins' final pitch of his at bat play data from the White Sox v Tigers game on Saturday June 12 2021 
and build a page displaying some aspect(s) of the play. A video of the play is included for reference. This project is 
open-ended to allow you to show your programming skills and creativity.

## Getting Started

### Dependencies

Latest version of Node.js

Windows 10/Latest Apple OS

Latest Version of Chrome or other modern web browsers.

### Installing

The files on GitHub and the files can be downloaded there.

### Executing program

I uploaded the project to [Heroku](https://whitesoxproject.herokuapp.com/)

If it is downloaded, the program uses Node.JS. In the terminal type "node app.js" and it will run.

## Wireframe
![Layout_temp](https://user-images.githubusercontent.com/35700716/132380184-dd047535-9e20-4b93-bd2a-a7d8d81abcda.png)


## Thought Process
The initial wireframe is based off [mlb.com's film room](https://www.mlb.com/video/zack-collins-doubles-7-on-a-sharp-line-drive-to-right-fielder-nomar-mazar?q=TeamId%20%3D%3D%20%5B116%2C145%5D%20AND%20PlayerId%20%3D%3D%20%5B668670%2C641470%5D%20Order%20By%20Timestamp%20DESC&cp=CMS_FIRST&p=0)
version of the play. Some minor things I added were player profiles to the right of the screen
and to showcase a bit more data from the JSON file I added an "Aspects of the Play" section that will randomly generate 
statistics from the "statistics" section of the JSON file when the button is pressed.

## Use of APIs
For the Hitting/Pitcher Career Statistics I pulled data from MLB's Data API. I chose to use career stats vs. this seasons 
stats because when I was trying to pull Zack Collins' season stats I was hit with an "Access Denied," which I found strange
because the rest of the API including the pitcher's season stats was working perfectly fine. For Pitcher/Batter Info on the
bottom of the video, I pulled data from MLB's Data API and the JSON file to mimic (to some extent) mlb.com. 

## Authors

Quentin-Allen Fernandez
ex. [@qfernandez](https://github.com/qfernandez/)

## Acknowledgments

Inspiration, code snippets, etc.
Thank you so much Brett Phillips (not the Tampa Bay Rays player) for the opportunity for this project! 
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [MLB Data API](https://appac.github.io/mlb-data-api-docs/)
