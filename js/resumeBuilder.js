//----
var bio = {
    "name": "Mister Magoo",
    "role": "Senior Engineer",
    "contacts":
    {
      "mobile": "(911) 123-1122",
      "email": "mmagoo@gmail.com",
      "twitter": "@mmagoo",
      "gitHub": "mmagoo",
      "blog": "wrgms.com",
      "location": "Brooklyn, NY"
    },
    "pictureURL": "images/mistermagoo.jpg",
    "welcomeMessage": "I was there when the web was born",
    "skills": ["cartoon", "entertaining kids", "front-end development"],

    "display": function() {
        var DOM = $('#header');
        prepend_dom(DOM, HTMLheaderRole, bio.role);
        prepend_dom(DOM, HTMLheaderName, bio.name);

        DOM = $('#topContacts');
        append_dom(DOM, HTMLmobile, bio.contacts.mobile);
        append_dom(DOM, HTMLemail, bio.contacts.email);
        append_dom(DOM, HTMLtwitter, bio.contacts.twitter);
        append_dom(DOM, HTMLgithub, bio.contacts.gitHub);
        append_dom(DOM, HTMLblog, bio.contacts.blog);
        append_dom(DOM, HTMLlocation, bio.contacts.location);

        DOM = $('#header');
        append_dom(DOM, HTMLbioPic, bio.pictureURL);
        append_dom(DOM, HTMLwelcomeMsg, bio.welcomeMessage);
        DOM.append(HTMLskillsStart);
        for (i in bio.skills) {
            append_dom($('#header'), HTMLskills, bio.skills[i]);
        }
    }
};
bio.display();

// ---
var work = {
    "jobs": [
        {
        "employer": "W Digital Marketing Agency",
        "title": "SVP Technology & Operations",
        "location": "New York, NY",
        "dates": "2000-2014",
        "description": "Responsible for the agency performance from a technology and service delivery perspective. Directly oversee technology and project management teams. Co-responsible for the top and bottom line."
        },
        {
        "employer": "XYZ Internet Service Provider",
        "title": "Co-founder, Engineering Lead",
        "location": "Porto Alegre, Brazil",
        "dates": "1995-1999",
        "description": "Co-founder of the first commercial ISPs in Brazil, in mid-90's. The company had several firsts: the first internet provider, the first commercial page ever hosted in Brazil, first radio streaming over the web, first 2D chat (The Palace), first virtual reality simulator (Words Chat, the Snow Crash-inspired predecessor of Second Life). Also the first company in Brazil to run entirely on Linux (kernel 0.99b, Slackware FTW). Engineering Lead, Solutions Architect, Product Lead."
        }
    ],
    "display": function () {
        for (i in work.jobs) {
            var DOM = $('#workExperience');
            DOM.append(HTMLworkStart);

            DOM = $('.work-entry').last();
            company_title = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) +
                            HTMLworkTitle.replace("%data%", work.jobs[i].title);
            DOM.append(company_title);
            append_dom(DOM, HTMLworkDates, work.jobs[i].dates);
            append_dom(DOM, HTMLworkLocation, work.jobs[i].location);
            append_dom(DOM, HTMLworkDescription, work.jobs[i].description);
        }
    }
};
work.display();

// ---
var projects = {
    "projects": [
        {
        "title": "Spiderman",
        "dates": "1999-2009",
        "description": "Spent 10 years as Spiderman. Had to quit after I started using glasses.",
        "images": [ "http://www.dhresource.com/albu_711866797_00-1.200x200/wholesale-new-style-lycra-spandex-spiderman.jpg"
                  ]
        },
        {
        "title": "Kids Party Entertainer",
        "dates": "2014-2015",
        "description": "Fun, Laughter Filled Magic Show",
        "images": [ "https://muppetmindset.files.wordpress.com/2010/11/66476-zoemimi.jpg?w=200&h=193",
                    "http://img3.wikia.nocookie.net/__cb20120123223528/muppet/images/a/a1/Albert_Heijn_puppets.jpg"
                  ]
        }
    ],
    "display": function () {
        for (i in projects.projects) {
            var DOM = $("#projects");
            DOM.append(HTMLprojectStart);

            DOM = $(".project-entry").last();
            append_dom(DOM, HTMLprojectTitle, projects.projects[i].title);
            append_dom(DOM, HTMLprojectDates, projects.projects[i].dates);
            append_dom(DOM, HTMLprojectDescription, projects.projects[i].description);

            for (j in projects.projects[i].images) {
                append_dom(DOM, HTMLprojectImage, projects.projects[i].images[j]);
            }
        }
    }
};
projects.display();


// ---
var education = {
    "schools": [
        {
        "name": "Stanford University",
        "location": "Stanford, CA",
        "degree": "BA",
        "major": ["Electric Engineering, Computer Science"],
        "dates": "1992-1996",
        "url": "http://www.stanford.edu"
        },
        {
        "name": "MIT",
        "location": "Boston, MA",
        "degree": "BA",
        "major": ["Engineer"],
        "dates": "1997-1999",
        "url": "http://www.mit.org/"
        }
    ],

    "onlineCourses": [
        {
        "title": "Javascript Crash Course",
        "school": "Udacity",
        "dates": "2013",
        "URL": "https://www.udacity.com/"
        },
        {
        "title": "Machine Learning",
        "school": "Coursera",
        "dates": "2012",
        "URL": "https://www.coursera.com/"
        }

    ],

    "display": function () {
        for (i in education.schools) {
            var DOM = $("#education");
            DOM.append(HTMLschoolStart);

            DOM = $(".education-entry").last();
            append_dom(DOM, HTMLschoolName, education.schools[i].name);
            append_dom(DOM, HTMLschoolDegree, education.schools[i].degree);
            append_dom(DOM, HTMLschoolDates, education.schools[i].dates);
            append_dom(DOM, HTMLschoolLocation, education.schools[i].location);
            for (j in education.schools[i].major) {
                append_dom(DOM, HTMLschoolMajor, education.schools[i].major[j]);
            }

        }

        for (i in education.onlineCourses) {

            //var DOM = $(".education-entry").last();
            var DOM = $("#education");
            if (i==0) {
                DOM.append(HTMLonlineClasses);
                DOM.append(HTMLschoolStart);
            }
            DOM = $(".education-entry").last();
            var title_school = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) +
                               HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);

            DOM.append(title_school);
            append_dom(DOM, HTMLonlineDates, education.onlineCourses[i].dates);
            append_dom(DOM, HTMLonlineURL, education.onlineCourses[i].URL);
        }
    }
};
education.display();

// ----
// add the map
$("#mapDiv").append(googleMap);


function prepend_dom(DOM, html_placeholder, value)
{
    if (value) DOM.prepend(html_placeholder.replace("%data%",  value));
}


function append_dom(DOM, html_placeholder, value)
{
    if (value) DOM.append(html_placeholder.replace("%data%",  value));
}
/*
  <div id="main">

     <div id="mapDiv">
      <h2>Where I've Lived and Worked</h2> //'
      // internationalizeButton
      // googleMap
    </div>

    <div id="letsConnect" class='dark-gray'>
      <h2 class='orange center-text'>Let's Connect</h2> //'
        <ul id="footerContacts" class="flex-box">
      </ul>
    </div>
  </div>

*/


/*
var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

$(".work-entry:last").append(formattedLocation);
for (var i in data.users) {
        output+="<li>" + data.users[i].firstName + " " + data.users[i].lastName + "--" + data.users[i].joined.month+"</li>";
    }
    output+="</ul>";

    document.getElementById("placeholder").innerHTML=output;

*/