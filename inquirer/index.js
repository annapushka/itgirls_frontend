class Cat {
    constructor(petname, name, contacts, type, feed, sex, comment, img) {
        this.petname = petname;
        this.name = name;
        this.contacts = contacts;
        this.type = type;
        this.feed = feed;
        this.sex = sex;
        this.comment = comment;
        this.img = img;
    }
}

function takeData() {
    const petname = document.getElementById('petname').value;
    const name = document.getElementById('name').value;
    const contacts = document.getElementById('contacts').value;
    const selectedType = document.getElementById("type");
    const type = selectedType.options[selectedType.selectedIndex].textContent;
    const feed = [];
    const feedCheckboxes = document.querySelectorAll('input[name="food"]:checked');
    for (var i = 0; i < feedCheckboxes.length; i++) {
        feed.push(feedCheckboxes[i].value);
    }
    const sexArr = document.getElementsByName('sex');
    let sex;
    for (let i = 0; i < sexArr.length; i++) {
        if (sexArr[i].checked) {
            sex = sexArr[i].value;
        }
    }
    const comment = document.getElementById('comment').value;
    const img = document.getElementById('img').value;
    let cat = new Cat(petname, name, contacts, type, feed, sex, comment, img);
    console.log(cat);
}