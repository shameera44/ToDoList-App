let nameInput = document.getElementById("nameinput");
let ageInput = document.getElementById("ageinput");
let jobInput = document.getElementById("jobinput");

let addBtn = document.getElementById("addbtn");
let deleteBtn = document.getElementById("deletebtn");
let editBtn = document.getElementById("editbtn");
let displayList = document.getElementById("displaylist");

let selectedlist = null;


// ADD ITEM CODE

const addList = () => {
    let name = nameInput.value;
    let age = ageInput.value;
    let job = jobInput.value;

    if (name === "" || age === "" || job === "") {
        alert("Please fill all fields");
        return;
    }

    const li = document.createElement("li");
    li.className = "list-item";
    li.innerText = `Name: ${name} |  Age: ${age}  |  Job: ${job}`;


    li.addEventListener('click', () => selection(li));



    displayList.appendChild(li);
    nameInput.value = "";
    ageInput.value = "";
    jobInput.value = "";

};

// SELECTION CODE

const selection = (li) => {
    if (selectedlist) {
        selectedlist.classList.remove("selected");
    }
    li.classList.add("selected");
    selectedlist = li;
    console.log(selectedlist);


};
//  DELETE CODE

const deleteList = () => {
    if (!selectedlist) {
        alert("Please select  item for delete");
        return;
    }

    selectedlist.remove();
    selectedlist = null;

};

// EDIT CODE

const editList = () => {
    if (!selectedlist) {
        alert("Please select  item for edit");
        return;
    }

    let newName = prompt("Enter new name");
    let newAge = Number(prompt("Enter new age"));
    let newJob = prompt("Enter new job");

    if (!newName || !newAge || !newJob) {
        alert("Not entered all field");
        return;
    }

    selectedlist.innerText = `Name: ${newName} | Age: ${newAge} | Job: ${newJob}`;
};




addBtn.addEventListener('click', addList);
deleteBtn.addEventListener('click', deleteList);
editBtn.addEventListener("click", editList);

