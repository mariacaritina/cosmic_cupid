function submitBirthChart() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const birthTime = document.getElementById('birthTime').value;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Date of Birth:', dob);
    console.log('Place of Birth:', birthPlace);
    console.log('Time of Birth:', birthTime);
}