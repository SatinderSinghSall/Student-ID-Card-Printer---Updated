function UpdateCard()
{
    document.getElementById("SchoolNameValue").innerText = document.getElementById("SchoolName").value;
    document.getElementById("StudentNameValue").innerText = document.getElementById("StudentName").value;
    document.getElementById("DateOfBirthValue").innerText = document.getElementById("DateOfBirth").value;
    document.getElementById("ClassValue").innerText = document.getElementById("Class").value;
    document.getElementById("RollNumberValue").innerText = document.getElementById("RollNumber").value;
    document.getElementById("ContactNumberValue").innerText = document.getElementById("ContactNumber").value;
}

function ClearAll()
{
    document.getElementById("SchoolName").value = "";
    document.getElementById("StudentName").value = "";
    document.getElementById("DateOfBirth").value = "";
    document.getElementById("Class").value = "";
    document.getElementById("RollNumber").value = "";
    document.getElementById("ContactNumber").value = ""; // Note: Or just set type="reset" in HTML Button.
}

function PrintIdCard()
{
    window.print();
}
