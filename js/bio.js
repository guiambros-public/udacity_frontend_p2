var bio = {
    "name": "Mister Magoo",
    "role": "Developer",
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
    "welcomeMessage": "I was there before the web was born",
    "skills": ["cartoon", "entertaining kids", "front-end development"],

    "display": function() {
        prepend_dom($('#header'), HTMLheaderRole, bio.role);
        prepend_dom($('#header'), HTMLheaderName, bio.name);

        append_dom($('#topContacts'), HTMLmobile, bio.contacts.mobile);
        append_dom($('#topContacts'), HTMLemail, bio.contacts.email);
        append_dom($('#topContacts'), HTMLtwitter, bio.contacts.twitter);
        append_dom($('#topContacts'), HTMLgithub, bio.contacts.gitHub);
        append_dom($('#topContacts'), HTMLblog, bio.contacts.blog);
        append_dom($('#topContacts'), HTMLlocation, bio.contacts.location);

        $('#header').append(HTMLbioPic.replace("%data%",      bio.pictureURL));
        $('#header').append(HTMLWelcomeMsg.replace("%data%",  bio.welcomeMessage));
        $('#header').append(HTMLskillsStart);
        console.log("-- skills: " + bio.skills);
        for (i in bio.skills) {
            console.log("-- skills: " + bio.skills[i]);
            $('#header').append(HTMLskills.replace("%data%",  bio.skills[i]));
        };
    }
};