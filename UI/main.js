
var Jobs = db.collection("jobs");

Jobs.doc("CL").set({
    companyLogo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fairpak.cr%2Fwp-content%2Fuploads%2Fsites%2F3%2F2020%2F08%2F%3FND&psig=AOvVaw0SJoGIDxMtLzyxulQ5JnrR&ust=1613828096510000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDg_6aI9u4CFQAAAAAdAAAAABAJ", 
    companyName: "Andela", 
    isFeatured: true, isNew: true, jopType: "Full Time", position: "IT Manager",
    skills: ["HTML", "CSS", "JAVASCRIPT"] });
Jobs.doc("CN").set({
    companyLogo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F07%2FAirtel_logo_logotype_emblem.png&imgrefurl=https%3A%2F%2Flogos-download.com%2F8181-airtel-logo-download.html&tbnid=VjXXrUFX9k43gM&vet=12ahUKEwiWzI_zhPbuAhUIvBoKHXjIAOIQMygAegUIARC4AQ..i&docid=AWg6tkJvBox-PM&w=2169&h=2337&q=airtel%20logo%20png&ved=2ahUKEwiWzI_zhPbuAhUIvBoKHXjIAOIQMygAegUIARC4AQ", 
    companyName: "Airtel",
    isFeatured: true, isNew: true, jobType: "Part Time", position: "Tutor",
    skills: ["Programming", "Networking", "Hardware"] });


Jobs.doc("CS").set({
        companyLogo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fairpak.cr%2Fwp-content%2Fuploads%2Fsites%2F3%2F2020%2F08%2F%3FND&psig=AOvVaw0SJoGIDxMtLzyxulQ5JnrR&ust=1613828096510000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDg_6aI9u4CFQAAAAAdAAAAABAJ", 
        companyName: "Tigo",
        isFeatured: true, isNew: true, jobType: "Full Time", position: "Programmer",
        skills: ["C#", "PHP", "Java"] });



        var jobRe = db.collection("jobs").doc("CL");
        
        jobRe.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });


        var jobR = db.collection("jobs").doc("CN");
        
        jobR.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

       
        var jobe = db.collection("jobs").doc("CS");
        
        jobe.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });