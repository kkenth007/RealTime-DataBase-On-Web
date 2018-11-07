function saveOnClick(){
   // var firebaseRef=firebase.database().ref("Admin");
    //firebaseRef.child("name/fname").set("Root");
    //firebaseRef.child("name/lname").set("FirstName");
    //firebaseRef.child("Admin").set("Root");
    var email = document.getElementById('Email');
    var password = document.getElementById('Password');
    var address = document.getElementById('Address');
    insertData(email.value,password.value,address.value);
}
window.onload=function(){
    
    showData();
}
function showData(){
    var firebaseRef=firebase.database().ref("User").orderByChild("Email"); //database()ตือ อ้างอิงฐานข้อมมูล ref ดึงออบเจ็คมาทำงาน  .orderByChild คือไห้เลียงลำดับ
    firebaseRef.once('value').then(function(dataSnapshot){//.orderByKey(); when console use console.log(childKey); if dont use  .orderByKey(); ค่าที่ได้ตามเดิม
        //console.log(dataSnapshot.val());
        dataSnapshot.forEach(function(childSnapshot){
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            console.log(childData);
        });
    });
}
function insertData(email,password,address ){
    var firebaseRef=firebase.database().ref("User");
    firebaseRef.push({
        Address:address,
        Email:email,
        Password:password
        //No ordering by database can use change order

    });
    console.log("insert Success");
    showData();

}
function deleteData(){
    var firebaseRef = firebase.database().ref("User/User2");
    firebaseRef.remove().then(function(){
        console.log("Remove Complete.");
    }).catch(function(error){
        console.log(error.message);
    });
}
function updateData(){
    var firebaseRef = firebase.database().ref('User/User1');
    firebaseRef.update({Address:'Royed',Email:'RealTimesDB@gmail.com'});
    console.log("success");
}