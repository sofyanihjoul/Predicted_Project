const itemList = document.getElementById('ItemsList');

// create element & render cafe
function renderItems(doc){
    let li = document.createElement('tr');
    


    li.setAttribute('data-id', doc.id);
   var itemName = doc.data().ItemName ;
   var ItemID = doc.id ;
    var itemCustody = doc.data().ItemCustody;
    var itemLocation = doc.data().ItemLocation;
    var itemWarehouse =  doc.data().Whouse;
    var itemDate= doc.data().ExpDate ;
    
    itemList.innerHTML += '<tr><td>' + ItemID + '</td>  <td>' + itemName + '</td>  <td>' + itemLocation + '</td>  <td>' + itemWarehouse + '</td>  <td>' + itemCustody + '</td>  <td>' + itemDate + '</td>  </tr>';
    itemList.innerHTML

}
var db = firebase.firestore();
// getting data

function getdata(){
    var srch = document.getElementById("search").value;

if(srch === "Keyboards"){
db.collection('Keyboards').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderItems(doc);
    });
});
}

else if(srch === "Mouses"){ 
    db.collection('Mouses').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            renderItems(doc);
        });
    });
    }
else if(srch === "Computers"){ 
        db.collection('Computers').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                renderItems(doc);
            });
        });
        }
else if(srch === "Monitors"){ 
    db.collection('Monitors').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            renderItems(doc);
        });
    });
    }
else if(srch === "Printers"){ 
        db.collection('Printers').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                renderItems(doc);
            });
        });
        }
else if(srch === "Furniture"){ 
        db.collection('Furniture').get().then(snapshot => {
              snapshot.docs.forEach(doc => {
                 renderItems(doc);
           });
         });
     }
}
