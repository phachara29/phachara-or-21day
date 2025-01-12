const changeBackground = document.getElementById('navigation-bar');
const containtText = document.querySelectorAll('.containt-text');
const arrivalDate = document.querySelectorAll('.body-table tr');
const outDay = document.getElementById('out-day');
const dateTime = new Date();

containtText.forEach(text => {
    text.addEventListener('mouseover', () => {
        changeBackground.style.backgroundColor = text.dataset.color;
    });
    text.addEventListener('mouseout', () => {
        changeBackground.style.backgroundColor = 'gray';
    });
});

// เริ่มการเเปลงค่าวันเดือนปีในตาราง

arrivalDate.forEach(row => {    
    const dateCell = row.cells[1]; //เข้าถึงคอลัมน์ที่2มาเก็บไว้ที่dateCell
    const passedDateCell = row.cells[2]; //เข้าถึงคอลัมน์ที่3มาเก็บไว้ที่passedDateCell

    // ดึงค่าในคอลัมน์ที่2 คือวันที่ (12/1/2568)
    const dateText = row.cells[1].textContent.trim();
    // เเยกวัน เดือน ปีโดยใช้ / เป็นตัวเเบ่ง
    const [day, month, year] = dateText.split('/');
    // เเปลงปีพุทธศักราชเป็นคริสต์ศักราช BE=พุทธศักราช CE=คริสต์ศักราช
    const yearInCE = parseInt(year) - 543; //ปีพุทธศักราชลบด้วย543จะกลาบเป็นคริสต์ศักราช

    //สร้างdate objectจากวันที่ในรูปเเบบ Year-month-day
    const date = new Date(`${yearInCE}-${month}-${day}`); //เอาค่าปีเดือนวันมาเก็บไว้ในdate

    //สิ้นสุดการเเปลงค่าวันเดือนปีในตาราง

    //เริ่มการนำค่าเวลามาเปรียบเทียบกัน

    if (dateTime > date) {
        row.cells[2].style.backgroundColor = 'green';
        passedDateCell.textContent = dateTime.toLocaleDateString('th-TH');
    }

    //สิ้นสุดการนำค่าเวลามาเปรียบเทียบกัน

});